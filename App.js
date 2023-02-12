import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Profile from './screens/Profile.js'
import BACCalc from './screens/BACCalc.js'
import InformationHub from './screens/InformationHub.js'
import AboutUs from './screens/AboutUs.js'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  function Nav() {
    return (
      <NavBar.Navigator tabBarPosition='bottom'>
        <NavBar.Screen name="InformationHub" component={InformationHub} options={{title: 'Welcome'}}/>
        <NavBar.Screen name="AboutUs" component={AboutUs} />
        <NavBar.Screen name="BACCalc" component={BACCalc} />
        {/* <NavBar.Screen name="Profile" component={Profile} options={{name: 'Jane'}} /> */}
      </NavBar.Navigator>
    );
  }

  return ( 
    <NavigationContainer>
      
        <Tab.Navigator initialRouteName="InformationHub">
          <Tab.Screen
            name="InformationHub"
            component={InformationHub}
          />
          <Tab.Screen 
            name="Profile" 
            component={Profile} 
          />
          <Tab.Screen
            name="AboutUs"
            component={AboutUs} 
          />
          <Tab.Screen
            name="BACCalc"
            component={BACCalc} 
          />
        </Tab.Navigator>
      
    </NavigationContainer>
  );
}


