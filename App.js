import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import Profile from './screens/Profile.js'
import BACCalc from './screens/BACCalc.js'
import InformationHub from './screens/InformationHub.js'
import AboutUs from './screens/AboutUs.js'
import InfoHubPage from './components/InfoHubPage.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='InfoHubPage'
          component={InfoHubPage}
        />
      </Stack.Navigator>
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
          tabBarLabel: () => { return null },
        })}
      >
        <Tab.Screen
          name="Hub"
          component={InformationHub}
        />
        <Tab.Screen
          name="BAC Calc"
          component={BACCalc}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>

    </NavigationContainer>
  );
}


