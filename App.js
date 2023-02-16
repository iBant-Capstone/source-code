import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile.js'
import BACCalc from './screens/BACCalc.js'
import InformationHub from './screens/InformationHub.js'
import AboutUs from './screens/AboutUs.js'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


export default function App() {

  return ( 
    <NavigationContainer>
        <Tab.Navigator  
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // taking icon names straight from Ionicons
            if (route.name === 'Hub') {
              iconName = focused ? 'ios-book' : 'ios-book-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'BAC Calc') {
              iconName = focused ? 'ios-calculator' : 'ios-calculator-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#CF5260',
          tabBarInactiveTintColor: 'black',
        })}
        >
          <Tab.Screen
            name="Hub"
            component={InformationHub}
          />
          <Tab.Screen 
            name="Profile" 
            component={Profile} 
          />
          <Tab.Screen
            name="About"
            component={AboutUs} 
          />
          <Tab.Screen
            name="BAC Calc"
            component={BACCalc} 
          />
        </Tab.Navigator>
      
    </NavigationContainer>
  );
}


