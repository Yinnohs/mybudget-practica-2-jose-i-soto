import React, { useContext } from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import { BalanceItem } from '../components/balance';
import { Navbar } from '../components/navBar';
import { MovementsContext } from '../constants/reducer';
import { appTheme } from '../constants/theme';
import { MovementContextType } from '../types';


export const HomeView: React.FC = (navigation:any)=>{
    const {movements, setMovements} = useContext(MovementsContext) as MovementContextType

    return(
        <View style={styles.container}>
            <ScrollView style={styles.balanceContainer} contentContainerStyle={{justifyContent:"center",flexDirection:"row"}}>

            </ScrollView>
            <ScrollView  contentContainerStyle={styles.scrollContainer}>
                {movements.length > 0 ?movements.map(({id,amount,description,movementDate})=>{
                    return(
                            <BalanceItem
                            key={id}
                            id={id}
                            amount={amount}
                            description={description}
                            movementDate={movementDate}
                             />
                    )
                }): []}
            </ScrollView>
                <Navbar/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appTheme.colorBackground,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    balanceContainer:{
        height:"45%",
        width:"100%",
        borderWidth:0
    },
    scrollContainer:{
        flex:1,
        display:'flex',
        flexDirection:"column",
        alignItems:'center'
    }
  });