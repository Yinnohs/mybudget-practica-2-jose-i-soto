import { FC } from "react";
import { Pressable,Text, StyleSheet } from "react-native";
import { appTheme, buttonBoxShadow } from "../../constants";

type BasicButtonProps={
    action:Function,
    color?:string
    padding?:number,
    width?:number,
    heigth?:number
    label:string,
    disabled?:boolean
}

export const BasicButton:FC<BasicButtonProps> =({action,disabled=false,label,}:BasicButtonProps)=>{
    
    
    return(

        <Pressable onPress={()=> action()} style={styles.buttonDefault} disabled={disabled}>
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonDefault:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
        ...buttonBoxShadow,
        backgroundColor:appTheme.colorPrimary,
        width:140,
        height:75,
        borderRadius:40,
    },
    text:{
        fontSize:18,
        color:appTheme.colorSecondary
    }
})