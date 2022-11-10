import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { HomeView } from './src/views';

const Stack = createNativeStackNavigator()

export default function App() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
