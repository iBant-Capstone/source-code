import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Profile from './screens/Profile.js'
import BACCalc from './screens/BACCalc.js'
import InformationHub from './screens/InformationHub.js'
import AboutUs from './screens/AboutUs.js'
import InfoHubPage from './components/InfoHubPage.js';
import AddDrink from './screens/AddDrink.js'
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='InfoHubPage'
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
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}


