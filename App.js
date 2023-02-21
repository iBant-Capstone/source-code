import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens/components
import Profile from './screens/Profile.js'
import BACCalc from './screens/BACCalc.js'
import InformationHub from './screens/InformationHub.js'
import AboutUs from './screens/AboutUs.js'
import InfoTopicPage from './components/InfoTopicPage.js';
import AddDrinkPage from './screens/AddDrink.js'
import CommonAlcoholTypes from './screens/CommonAlcoholTypes.js'



const Stack = createStackNavigator();

// Create all screens within the Stack Navigator - this will allow us to navigate to them even if they are not explicitly within the nav bar. 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='InformationHub'
          component={InformationHub}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='AboutUs'
          component={AboutUs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='BACCalc'
          component={BACCalc}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='InfoTopicPage'
          component={InfoTopicPage}
          options={({ route }) => ({ title: route.params.title })}
        />
        <Stack.Screen
          name='AddDrinkPage'
          component={AddDrinkPage}
          options={({route}) => ({title: 'Add Drink'})}
        />
        <Stack.Screen
          name='CommonAlcoholTypes'
          component={CommonAlcoholTypes}
          options={({ route }) => ({ title: 'Common Alcohol Types' })}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


