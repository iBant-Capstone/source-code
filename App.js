import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Profile from './screens/Profile.js'
import BACCalc from './screens/BACCalc.js'
import InformationHub from './screens/InformationHub.js'
import AboutUs from './screens/AboutUs.js'
import InfoTopicPage from './components/InfoTopicPage.js';
import AddDrinkPage from './screens/AddDrink.js'
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='InformationHub'
          component={InformationHub}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
        />
        <Stack.Screen
          name='AboutUs'
          component={AboutUs}
        />
        <Stack.Screen
          name='BACCalc'
          component={BACCalc}
        />
        <Stack.Screen
          name='InfoTopicPage'
          component={InfoTopicPage}
        />
        <Stack.Screen
          name='AddDrinkPage'
          component={AddDrinkPage}
        />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}


