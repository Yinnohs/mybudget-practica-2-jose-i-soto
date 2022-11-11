import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { appTheme, MovementProvider } from './src/constants';
import { HomeView } from './src/views';

const Stack = createNativeStackNavigator()

export default function App() {
  const[texts] = useFonts({
    [appTheme.textTitle]: require("./assets/fonts/Poppins//Poppins-Medium.ttf"),
    [appTheme.textNormal]: require("./assets/fonts/Roboto/Roboto-Regular.ttf")
 })
  return (
    <NavigationContainer>
         <Stack.Navigator>
          <MovementProvider>
            <Stack.Screen
            name='Home'
            component={HomeView}
            options={{title:"Este es el home View"}}/>
            <Stack.Screen
            name='Detail:id'
            component={HomeView}
            options={{title:"Este es el home View"}}/>
          </MovementProvider>
         </Stack.Navigator>
    </NavigationContainer>
  );
}
