import React from 'react'
import {View, StyleSheet} from 'react-native'
import { BalanceItem } from '../components/balance';
import { appTheme } from '../constants/theme';
const currentDate = new Date()

export const HomeView: React.FC = ()=>{
    return(
        <View style={styles.container}>
            <BalanceItem 
            id="06cd2f2b-58dc-452c-b5ca-e33a1d71a7c0"
            description='Se dio culo'
            amount={200.00}
            movementDate={currentDate}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appTheme.colorBackground,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });