import React from "react"
import { StyleSheet, View, Pressable} from "react-native";
import { appTheme, buttonBoxShadow } from "../../constants";
import {AntDesign} from '@expo/vector-icons'
import { NavigationProp,useNavigation } from "@react-navigation/native";
import { AddScreenProp,DetailScreenProp,HomeScreenProp } from "../../types";


export const Navbar:React.FC = ()=>{
    const navigation = useNavigation<HomeScreenProp|DetailScreenProp|AddScreenProp>()
    return(
        <View style={styles.navBar}>
            <Pressable>
                <AntDesign 
                    name="home" 
                    onPress={()=> navigation.navigate('Home')} 
                    size={50} 
                    color={appTheme.colorPrimary}
                    style={[styles.shadow, styles.button]}
                />
                
            </Pressable>
            <Pressable>
            <AntDesign 
                    name="pluscircleo" 
                    onPress={()=> navigation.navigate('New')} 
                    size={50} 
                    color={appTheme.colorPrimary}
                    style={[styles.shadow, styles.button]}
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    navBar:{
        position:'absolute',
        bottom:0,
        left:0,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
        height:90,
        width:'100%',
        borderTopColor: appTheme.colorTerciary,
        borderTopWidth: 0.5,
        backgroundColor:appTheme.colorBackground
    },
    shadow:{
        ...buttonBoxShadow
    },
    button:{
        marginBottom:20
    }
})

