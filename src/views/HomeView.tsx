import React, { useContext, useEffect, useState } from 'react'
import {View, StyleSheet, ScrollView, FlatList} from 'react-native'
import { BalanceCard, BalanceItem } from '../components/balance';
import { Navbar } from '../components/navBar';
import { MovementsContext } from '../constants/reducer';
import { appTheme } from '../constants/theme';
import { MovementContextType } from '../types';


export const HomeView: React.FC = ()=>{
    const {movements,} = useContext(MovementsContext) as MovementContextType
    const[balances, setBalances] = useState({
        negativeBalance: 0,
        positiveBalance: 0,
        totalBalance:0
    })
     useEffect(()=> {
        const totalBalance = movements.reduce((acc, currentElement)=> acc += currentElement.amount ,0)
        const negativeBalance = movements.reduce((acc, currentElement)=> {
            if(currentElement.amount < 0){
                acc += currentElement.amount
            }
            return acc 
        },0)
        const positiveBalance =  movements.reduce((acc, currentElement)=> {
            if(currentElement.amount > 0){
                acc += currentElement.amount
            }
            return acc
        },0)

        setBalances({
            totalBalance,negativeBalance,positiveBalance
        })
    },[movements])

    return(
        <View style={styles.container}>

            <ScrollView style={styles.balanceContainer} 
            contentContainerStyle={{justifyContent:"center",flexDirection:"row",alignItems:'center'}}
            horizontal={true}>

                <BalanceCard key={1} balance={balances.positiveBalance} balanceType="Total Ingresos"/>
                <BalanceCard key={2} balance={balances.totalBalance} balanceType="Total"/>
                <BalanceCard key={3} balance={balances.negativeBalance} balanceType="Total Devengos"/>
                
            </ScrollView>
            <FlatList 
                initialNumToRender={10}
                data={movements} 
                keyExtractor={(element)=> element.id} 
                renderItem={({item})=> <BalanceItem id={item.id} amount={item.amount} description={item.description} movementDate={item.movementDate}/>} 
                bounces={false}
                collapsable={true}
                style={{marginBottom:90,height:'60%'}}
            /> 
                {/* {movements.length > 0 ? movements.map(({id,amount,description,movementDate})=>{
                    return(
                            <BalanceItem
                            key={id}
                            id={id}
                            amount={amount}
                            description={description}
                            movementDate={movementDate}
                             />
                    )
                }): []} */}
            {/* </ScrollView> */}
                <Navbar/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appTheme.colorBackground,
      alignItems: "center",
      justifyContent: "space-around",
    },
    balanceContainer:{
        height:"40%",
        width:"100%",
        borderWidth:0
    },
    movementsContainer:{
    }
  });