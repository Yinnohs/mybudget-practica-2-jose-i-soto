import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { HomeView } from './src/views';

const Stack = createNativeStackNavigator()

export default function App() {
  const[texts] = useFonts({
    "title": require("./assets/fonts/Poppins//Poppins-Medium.ttf"),
    "normal": require("./assets/fonts/Roboto/Roboto-Regular.ttf")
 })
  return (
    <NavigationContainer>
         <Stack.Navigator>
          <Stack.Screen
          name='Home'
          component={HomeView}
          options={{title:"Este es el home View"}}/>
         </Stack.Navigator>
    </NavigationContainer>
  );
}
