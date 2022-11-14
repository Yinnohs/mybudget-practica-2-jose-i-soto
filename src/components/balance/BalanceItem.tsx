import React, { useState } from "react"
import { View, Text,StyleSheet} from "react-native"
import { appTheme, cardBoxShadow } from "../../constants/theme"
import { stringDateFormatter } from "../../utils"
import { AmountText } from "./amountText"
import { IMovement } from "../../types"
import {  DeleteButton } from "../buttons"
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { DeleteModal } from "../crudInfoComponents"


export const BalanceItem:React.FC<IMovement> = ({id,description,amount,movementDate}:IMovement)=>{

   const[modalOpen, setModalOpen] = useState(false)

   return(
    <View style={BalanceItemStyles.card} key={id}>
      <View style={BalanceItemStyles.cardIconContainer} onTouchStart={()=> alert("id del movimiento: " + id)}>
         {amount >= 0 
         ?<MaterialCommunityIcons name="cash-plus" size={60} color={appTheme.colorSecondary} />
         :<MaterialCommunityIcons name="cash-minus" size={60} color={appTheme.colorSecondary} />}
         
      </View>
      <View style={BalanceItemStyles.cardInfo}>
         <Text style={BalanceItemStyles.cardInfoTitle}>{description}</Text>
         <Text style={BalanceItemStyles.cardInfoDate}>{stringDateFormatter(movementDate!)}</Text>
      </View>
      <View>
         <View style={BalanceItemStyles.cardButton}>
            <AmountText amount={amount}/>
            <DeleteButton marginTop={30} color={appTheme.colorText} action={()=> setModalOpen(true)}/>
         </View>
      </View>
      
      <DeleteModal elementId={id} isOpen={modalOpen} setIsOpen={setModalOpen} />
    </View>
   )
    
}


const BalanceItemStyles = StyleSheet.create({
   card:{
      flexDirection:"row",
      justifyContent:"space-between",
      width:"95%",
      height:90,
      marginTop:25,
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
      borderRightWidth:0.5,
      borderColor: appTheme.colorTerciary,
      backgroundColor: appTheme.colorPrimary,
      borderTopLeftRadius:5,
      borderBottomLeftRadius: 5

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
      ...cardBoxShadow
   },
   cardInfoDate:{
      fontSize:appTheme.secondaryFontsize,
      color:appTheme.colorTextSecondary,
      fontFamily:appTheme.textNormal
   }

})

