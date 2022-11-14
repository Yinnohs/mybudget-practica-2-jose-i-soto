import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { appTheme, MovementProvider } from './src/constants';
import { HomeView } from './src/views';
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
              component={HomeView}
              options={{headerShown:false}}/>

              <Stack.Screen
              name='New'
              component={HomeView}
              options={{headerShown:false}}/>

            
          </Stack.Navigator>
      </NavigationContainer>
    </MovementProvider>
  );
}
