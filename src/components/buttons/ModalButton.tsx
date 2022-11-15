import {AntDesign} from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { appTheme, buttonBoxShadow } from '../../constants'

type ModalButtonPropsType = {
    marginTop?:number, 
    color?:string, 
    action?:Function,
}

export const DeleteButton:React.FC<ModalButtonPropsType> = ({marginTop, color = "#000", action}:ModalButtonPropsType)=>{
    return(
        <>
            <Pressable onPress={()=> action!()} style={{...styles.container,marginTop:marginTop}}>
                <AntDesign name='delete' size={40} style={{...buttonBoxShadow}} color={color} />
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"60%",
        height:"60%",
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
        borderWidth:1,
        borderColor:appTheme.colorSecondary,
    }
})