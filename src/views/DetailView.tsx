import {RouteProp, useNavigation } from "@react-navigation/native"
import React, {useContext, useEffect, useState } from "react"
import { TextInput, Text, StyleSheet,View, TouchableOpacity, Keyboard} from "react-native"
import { BasicButton } from "../components/buttons"
import { CustomDatePicker } from "../components/customInput"
import { Navbar } from "../components/navBar"
import { appTheme, cardBoxShadow, MovementsContext } from "../constants"
import { 
        AddScreenProp,
        DetailScreenProp,
        HomeScreenProp,
        MovementContextType, 
        MovementInputType, 
        RouteType 
    } from "../types"
import { handleError, stringDateFormatter } from "../utils"



export const DetailView = ({route}:{route:RouteProp<RouteType>})=>{
    const navigation = useNavigation<HomeScreenProp|DetailScreenProp|AddScreenProp>()
    const {movements,setMovements} = useContext(MovementsContext) as MovementContextType
    const {id} = route.params
    let currentMovement = movements.find((movement)=> movement.id === id)
    currentMovement
    const[movementInput, setMovementInput] = useState<MovementInputType>({
        amount:"",
        description:"",
        movementDate: new Date()
    })

    useEffect(()=>{
        setMovementInput({
                amount:currentMovement!.amount.toString(),
                description: currentMovement!.description,
                movementDate: currentMovement!.movementDate
            })
    },[])

    const handleDescription=(input:string)=>{
        setMovementInput({
            ...movementInput,
            description:input
        })
    }

    const handleAmount = (input:string)=>{
        setMovementInput({
            ...movementInput,
            amount: input
        })
    }


    const handleDate = (input:Date)=>{
        setMovementInput({
            ...movementInput,
            movementDate: input
        })
    }

    const handleUpdate = ()=>{
        const amount = parseFloat(movementInput.amount)
        if(isNaN(amount)){
            handleError('El campo de "Cantidad" debe ser correcto, y tener + o -')
            return
        }
        
        const movementsUpdated = movements.map((movement)=>{
            if(movement.id === id){
                if(movement.amount !== amount) movement.amount = amount
                if(movement.description !== movementInput.description){ 
                    movementInput.description = movementInput.description
                }
                return movement
            }
            return movement
        })

        setMovements(movementsUpdated)
        navigation.navigate("Home")
        
    }

    const dateString = `Fecha de creacion: ${stringDateFormatter(currentMovement!.movementDate)}`

    return(
        
    <View style={styles.container}>

        <View style={[styles.header]}>
            <Text style={styles.headerText}> Actualizar Movimiento </Text>
            <Text style={styles.headerLabel}>{id}</Text>
        </View>

        <View>
            <Text style={styles.dateText}>{dateString}</Text>
        </View>
        
        <TouchableOpacity  activeOpacity={1} style={[styles.containersize, styles.inputContainer]} onPress={Keyboard.dismiss}>
            <View style={styles.division}>
                <Text style={styles.label}>Descripción</Text>
                <TextInput style={styles.input}
                    placeholder="Descripcion del Movimiento"
                    value={movementInput.description}
                    onChangeText={(text:string)=> handleDescription(text)}
       
                />
            </View>
            <View style={styles.division}>
                <Text style={styles.label}>Cantidad</Text>
                <TextInput style={styles.input}
                    placeholder="Cantidad del movimiento"
                    value={movementInput.amount.toString()}
                    onChangeText={(text:string)=> handleAmount(text)}
                    keyboardType="numbers-and-punctuation"
                />
            </View>

            <View style={styles.division}>
                <Text style={styles.label}>Cantidad</Text>
                <CustomDatePicker
                dateState={movementInput.movementDate}
                setter={handleDate}
                />
            </View>
        </TouchableOpacity>
        <View style={[styles.buttonContainer, styles.containersize]}>
            <BasicButton label="Cancelar" action={()=> navigation.navigate("Home")} />
            {movementInput.amount === "" || movementInput.description === ""
            ? <BasicButton label="Enviar" action={()=> console.log("disabled")} disabled={true} />
            :<BasicButton label="Enviar" action={()=> handleUpdate()} />
        }
        </View>
        <Navbar/>
    </View>
    )

    
   
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
        backgroundColor:appTheme.colorBackground,
        paddingTop:100
    },
    buttonContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    inputContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        height:'35%'
    },
    containersize:{
        width:'100%',
        height:'30%'
    },
    header:{
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:180,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:appTheme.colorPrimary,
    },
    input:{
        width:300,
        borderWidth:1.5,
        borderColor:appTheme.colorPrimary,
        padding:20,
        fontSize:15,
        ...cardBoxShadow,
        borderRadius:5
    },
    division:{
        width:'100%',
        marginVertical:5,
        marginLeft:30
    },
    label:{
        width:150,
        color:appTheme.colorSecondary,
        backgroundColor:appTheme.colorPrimary,
        fontSize:15,
        paddingVertical:10,
        textAlign:'center'
    },
    headerText:{
        fontSize:26,
        color:appTheme.colorBackground
    },
    headerLabel:{
        fontSize:15,
        color:appTheme.colorBackground,
        textAlign:"center"
    },
    dateText:{
        fontSize:20,
        backgroundColor:appTheme.colorPrimary,
        color:appTheme.colorBackground,
        paddingHorizontal:10,
        paddingVertical:15,
        marginTop:20,
        ...cardBoxShadow
    }
})