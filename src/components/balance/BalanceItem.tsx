import React from "react"
import { View, Text,StyleSheet} from "react-native"
import { appTheme, cardBoxShadow } from "../../constants/theme"
import { stringDateFormatter } from "../../utils"
import { AmountText } from "./amountText"
import { IMovement } from "../../types"
import { ModalButton } from "./buttons"
import {MaterialCommunityIcons} from '@expo/vector-icons'


export const BalanceItem:React.FC<IMovement> = ({id,description,amount,movementDate}:IMovement)=>{


   return(
    <View style={BalanceItemStyles.card}>
      <View style={BalanceItemStyles.cardIconContainer} onTouchStart={()=> alert("id del movimiento: " + id)}>
         
         <MaterialCommunityIcons name="cash-plus" size={50} color={appTheme.colorText} />
      </View>
      <View style={BalanceItemStyles.cardInfo} onTouchStart={()=> alert("id del movimiento: " + id)}>
         <Text style={BalanceItemStyles.cardInfoTitle}>{description}</Text>
         <Text style={BalanceItemStyles.cardInfoDate}>{stringDateFormatter(movementDate!)}</Text>
      </View>
      <View>
         <View style={BalanceItemStyles.cardButton}>
            <AmountText amount={amount}/>
            <ModalButton marginTop={30} color={appTheme.colorText}/>
         </View>
      </View>
      
    </View>
   )
    
}


const BalanceItemStyles = StyleSheet.create({
   card:{
      flexDirection:"row",
      justifyContent:"space-between",
      width:"95%",
      height:"12%",
      backgroundColor:appTheme.colorSecondary,
      borderRadius:5,
      ...cardBoxShadow

   },
   cardIconContainer:{
      height:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",

   },
   cardInfo:{
      width:200,
      height:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",

   },
   cardButton:{
      width:110,
      height:"100%",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
   },
   cardInfoTitle:{
      fontSize:appTheme.mainFontSize,
      fontWeight:"700",
      color:appTheme.colorText,
      fontFamily:appTheme.textTitle,
   },
   cardInfoDate:{
      fontSize:appTheme.secondaryFontsize,
      color:appTheme.colorTextSecondary,
      fontFamily:appTheme.textNormal
   }

})