import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { MovementProvider } from './src/constants';
import { AddView, HomeView } from './src/views';
import { DetailView } from './src/views/DetailView';
import { LoadingFonts } from './src/views/LoadingFonts';

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] =  useFonts({
    "poppins": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    "roboto": require("./assets/fonts/Roboto/Roboto-Regular.ttf")
 })
 
  return (
    !fontsLoaded 
    ? <LoadingFonts />
    :
      <MovementProvider>
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                name='Home'
                component={HomeView}
                options={{headerShown:false}}/>

                <Stack.Screen
                name='Detail'
                component={DetailView}
                options={{headerShown:false}}/>

                <Stack.Screen
                name='New'
                component={AddView}
                options={{headerShown:false}}/>
    
            </Stack.Navigator>
        </NavigationContainer>
      </MovementProvider>

  );
}
