import React, { useContext } from "react"
import { Modal, StyleSheet, View,Text, Pressable } from "react-native"
import { appTheme, buttonBoxShadow, cardBoxShadow } from "../../constants"
import {AntDesign} from '@expo/vector-icons'
import { MovementsContext } from "../../constants/reducer"
import { MovementContextType } from "../../types"
import { deleteOne } from "../../utils"

type deleteModalPropsType = {
    isOpen: boolean,
    setIsOpen:Function
    elementId: string
}

export const DeleteModal:React.FC<deleteModalPropsType> = ({isOpen,setIsOpen,elementId}:deleteModalPropsType)=>{
    const {movements, setMovements} = useContext(MovementsContext) as MovementContextType

    return(
    <Modal visible={isOpen} transparent={true} animationType="slide">
        <View style={styles.modal} >  
            <Text style={styles.modalText}>
                ¿Estás seguro de que quieres Borrar el Elemento?
            </Text>
            <View style={styles.modalButtonContainer}>
                <Pressable style={styles.iconBorder} onPress={()=> setIsOpen(false)}>
                    <AntDesign  name="close" size={36} color={appTheme.colorWarning} />
                </Pressable >
                <Pressable onPress={()=> deleteOne(movements,setMovements, elementId)} style={styles.iconBorder} >
                    <AntDesign  name="check" size={36} color={appTheme.colorPass}  />
                </Pressable>
            </View>
        </View>
    </Modal>)
}

const styles = StyleSheet.create({
    modal:{
        position:'absolute',
        top:300,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor: appTheme.colorTerciary,
        borderRadius:20,
        margin:20,
        padding: 20,
        ...cardBoxShadow,
        height:250,
        borderWidth:1.5,
        borderColor:appTheme.colorPrimary
    },
    modalText:{
        color:appTheme.colorBackground,
        fontSize:30,
        height:'60%',
        textAlign:"center"
        
    },
    modalButtonContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        height:'20%',
        width:'100%',
    },
    iconBorder:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:appTheme.colorPrimary,
        borderRadius:20,
        width:50,
        height:50,

        ...cardBoxShadow
    }
})