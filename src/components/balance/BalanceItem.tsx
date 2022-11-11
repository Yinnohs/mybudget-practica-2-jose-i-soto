import React from "react"
import { View, Text,StyleSheet } from "react-native"
import { appTheme, cardBoxShadow } from "../../constants/theme"
import { stringDateFormatter } from "../../utils"
import { AmountText } from "./amountText"
import { IMovement } from "../../types"


export const BalanceItem:React.FC<IMovement> = ({id,description,amount,movementDate}:IMovement)=>{

   return(
    <View style={BalanceItemStyles.card} onTouchStart={()=> alert("id del movimiento: " + id)}>
      <View style={BalanceItemStyles.cardInfo}>
         <Text style={BalanceItemStyles.cardInfoTitle}>{description}</Text>
         <AmountText amount={amount}/>
      </View>
      <View>
         <View style={BalanceItemStyles.cardButton}>
            <Text style={BalanceItemStyles.cardInfoDate}>{stringDateFormatter(movementDate!)}</Text>
         </View>
      </View>
    </View>
   )
    
}


const BalanceItemStyles = StyleSheet.create({
   card:{
      flexDirection:"column",
      width:"95%",
      height:"12%",
      backgroundColor:appTheme.colorSecondary,
      borderRadius:5,
      ...cardBoxShadow

   },
   cardInfo:{
      width:"90%",
      height:"50%",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      marginLeft:10

   },
   cardButton:{
      width:"90%",
      height:"50%",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"baseline",
      marginLeft:10

   },
   cardInfoTitle:{
      fontSize:appTheme.mainFontSize,
      fontWeight:"700",
      color:appTheme.colorText,
      fontFamily:appTheme.textTitle
   },
   cardInfoDate:{
      fontSize:appTheme.secondaryFontsize,
      color:appTheme.colorTextSecondary,
      fontFamily:appTheme.textNormal
   }

})