import { appTheme } from "../../constants/theme"
import { Text,StyleSheet } from "react-native"


export const AmountText:React.FC<{amount:number}> = ({amount}:{amount:number})=>{
    return(
        amount >= 0 
        ? <Text style={BalanceItemStyles.cardInfoBalancePositive}>+{amount}</Text>
        : <Text style={BalanceItemStyles.cardInfoBalanceNegative}>-{amount}</Text>
    )
}


const BalanceItemStyles = StyleSheet.create({
    cardInfoBalancePositive:{
       fontSize:appTheme.secondaryFontsize,
       fontWeight:"800",
       fontFamily:appTheme.textTitle,
       color:appTheme.colorText,
       backgroundColor: appTheme.colorPass,
       borderColor:appTheme.colorPass,
       borderWidth:5,
       borderRadius:5
    },
    cardInfoBalanceNegative:{
        fontSize:appTheme.secondaryFontsize,
        fontWeight:"600",
        color:appTheme.colorWarning
    }
 
 })