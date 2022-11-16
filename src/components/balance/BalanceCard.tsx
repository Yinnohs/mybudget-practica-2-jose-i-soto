import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { appTheme, buttonBoxShadow, cardBoxShadow } from "../../constants";

type BalanceCardProps = {
    balance:number
    balanceType:string
}


export const BalanceCard: FC<BalanceCardProps> = ({balance, balanceType}:BalanceCardProps)=>{
    return(
        <View style={[styles.card,styles.cardShadow]}>
            <Text style={styles.cardTextTitle}>{balanceType}:</Text>
            <Text style={balance >= 0 ? styles.cardTextNumber : {...styles.cardTextNumber,color:appTheme.colorWarning}}>{balance}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width: 310,
        height: 150,
        backgroundColor: appTheme.colorPrimary,
        marginTop:100,
        marginHorizontal:20,
        borderRadius:18
    },
    cardShadow:cardBoxShadow,
    cardTextTitle:{
        fontSize:32,
        color:appTheme.colorBackground
    },
    cardTextNumber:{
        fontSize:38,
        color: appTheme.colorPass
    }

})