import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { appTheme, MovementProvider } from './src/constants';
import { HomeView } from './src/views';

const Stack = createNativeStackNavigator()

export default function App() {
  const texts = async ()=>  await useFonts({
    "title": require("./assets/fonts/Poppins//Poppins-Medium.ttf"),
    "normal": require("./assets/fonts/Roboto/Roboto-Regular.ttf")
 })
  return (
    <MovementProvider>
      <NavigationContainer>
          <Stack.Navigator>

              <Stack.Screen
              name='Home'
              component={HomeView}
              options={{title:"Este es el home View"}}/>

              <Stack.Screen
              name='Detail'
              component={HomeView}
              options={{title:"Este es el home View"}}/>
            
          </Stack.Navigator>
      </NavigationContainer>
    </MovementProvider>
  );
}
