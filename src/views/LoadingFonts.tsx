import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { appTheme } from "../constants";

export const LoadingFonts:FC = ()=>(
    <View>
        <Text> Cargando Fuentes ...</Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        width:'90%',
        height:' 90%',
        backgroundColor:appTheme.colorBackground,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:appTheme.colorText,
        fontSize:50
    }
})