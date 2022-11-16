import { appTheme, cardBoxShadow } from "../../constants/theme"
import { Text,StyleSheet, View } from "react-native"


export const AmountText:React.FC<{amount:number}> = ({amount}:{amount:number})=>{
    
    return(
        <View style={BalanceItemStyles.cardInfoContainer}>
            {amount >= 0 
                ? <Text style={BalanceItemStyles.cardInfoBalance}>+{amount}</Text>
                : <Text style={{...BalanceItemStyles.cardInfoBalance, color:appTheme.colorWarning}}>{amount}</Text>
            }
        </View>
        
    )
}


const BalanceItemStyles = StyleSheet.create({
    
    cardInfoBalance:{
        fontSize:appTheme.secondaryFontsize,
        fontWeight:"800",
        color:appTheme.colorPass,
    },
    cardInfoContainer:{
        backgroundColor: appTheme.colorPrimary,
        position:"absolute",
        top: -15,
        padding:"4.5%",
       ...cardBoxShadow
    }

 
 })