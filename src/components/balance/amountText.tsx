import { appTheme, cardBoxShadow } from "../../constants/theme"
import { Text,StyleSheet } from "react-native"


export const AmountText:React.FC<{amount:number}> = ({amount}:{amount:number})=>{
    return(
        amount >= 0 
        ? <Text style={BalanceItemStyles.cardInfoBalance}>+{amount}</Text>
        : <Text style={BalanceItemStyles.cardInfoBalance}>{amount}</Text>
    )
}


const BalanceItemStyles = StyleSheet.create({
    cardInfoBalance:{
        fontSize:appTheme.secondaryFontsize,
        fontWeight:"800",
        color:appTheme.colorSecondary,
        backgroundColor: appTheme.colorPrimary,
        position:"absolute",
        borderColor:appTheme.colorPrimary,
       top: -15,
       borderWidth:5,
       ...cardBoxShadow
    },

 
 })