import { useNavigation } from "@react-navigation/native"
import { FC, useContext, useState } from "react"
import { StyleSheet, View, TextInput, Text } from "react-native"
import { BasicButton } from "../components/buttons"
import { Navbar } from "../components/navBar"
import { appTheme,cardBoxShadow } from "../constants"
import { MovementsContext } from "../constants/reducer"
import { AddScreenProp, DetailScreenProp, HomeScreenProp, MovementContextType } from "../types"
import { addOne, createMovement, handleError } from "../utils"

type MovementInputType = {
    description:string
    amount:string
}


export const AddView:FC = ()=>{
    const navigation = useNavigation<HomeScreenProp|DetailScreenProp|AddScreenProp>()
    const {movements, setMovements} = useContext(MovementsContext) as MovementContextType
    const[movementInput, setMovementInput] = useState<MovementInputType>({
        amount:"",
        description:""
    })

    const handleCreation = (): void => {
        if(movementInput.amount === "" || movementInput.description === ""){
            handleError("Los campos deben ser rellenados")
        }
        const amount = parseFloat(movementInput.amount)
        if(isNaN(amount)){
            handleError('El campo de "Cantidad" debe ser correcto, y tener + o -')
            return
        }
        console.log(amount)
        const description = movementInput.description.trim()
        const newMovement = createMovement(amount,description)

        addOne(movements,setMovements,newMovement)

        navigation.navigate("Home")
    }
    

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
    return(
        <View style={styles.container}>

            <View style={[styles.header]}>
                <Text style={styles.headerText}> Añadir Movimiento </Text>
            </View>


            <View style={[styles.containersize, styles.inputContainer]}>
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
            </View>
            <View style={[styles.buttonContainer, styles.containersize]}>
                <BasicButton label="Cancelar" action={()=> alert("Cancelar")} />
                {movementInput.amount === "" || movementInput.description === ""
                ? <BasicButton label="Enviar" action={()=> console.log("disabled")} disabled={true} />
                :<BasicButton label="Enviar" action={()=> handleCreation()} />
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
    },
    containersize:{
        width:'100%',
        height:'40%'
    },
    header:{
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:150,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:appTheme.colorPrimary,
    },
    input:{
        width:300,
        borderWidth:1.5,
        borderColor:appTheme.colorPrimary,
        padding:20,
        fontSize:18,
        ...cardBoxShadow,
        borderRadius:5
    },
    division:{
        width:'100%',
        marginVertical:30,
        marginLeft:30
    },
    label:{
        width:150,
        color:appTheme.colorSecondary,
        backgroundColor:appTheme.colorPrimary,
        fontSize:25,
        paddingVertical:10,
        textAlign:'center'
    },
    headerText:{
        fontSize:26,
        color:appTheme.colorBackground
    }
})