import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens/components
import Profile from './screens/Profile.js'
import BACCalc from './screens/BACCalc.js'
import InformationHub from './screens/InformationHub.js'
import InfoTopicPage from './components/InfoTopicPage.js';
import AddDrinkPage from './screens/AddDrink.js'
import CommonAlcoholTypes from './screens/CommonAlcoholTypes.js'
import HowToUse from './screens/aboutScreens/HowToUse.js';
import OurMission from './screens/aboutScreens/OurMission.js';
import OurSources from './screens/aboutScreens/OurSources.js';
import EditProfilePage from './screens/EditProfilePage.js';

// login screens 
import Login1 from './screens/onboardingScreens/LoginScreen1'


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
        <Stack.Screen
          name='HowToUse'
          component={HowToUse}
          options={({ route }) => ({ title: 'How to Use' })}
        />
        <Stack.Screen
          name='OurMission'
          component={OurMission}
          options={({ route }) => ({ title: 'Our Mission' })}
        />
        <Stack.Screen
          name='OurSources'
          component={OurSources}
          options={({ route }) => ({ title: 'Our Sources' })}
        />
        <Stack.Screen 
          name='EditProfilePage'
          component={EditProfilePage}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


