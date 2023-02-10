import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button } from 'react-native';
import { ScrollView } from 'react-native-web';

import Profile from './components/Profile.js'
import BACCalc from './components/BACCalc.js'
import InformationHub from './components/InformationHub.js'
import AboutUs from './components/AboutUs.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="InformationHub"
          component={InformationHub}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs} 
        />
        <Stack.Screen
          name="BACCalc"
          component={BACCalc} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
