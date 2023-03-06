import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton, Header } from '@react-navigation/elements';

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

// Import onboarding pages
import LoginScreen1 from './screens/onboardingScreens/LoginScreen1';
import LoginScreen2 from './screens/onboardingScreens/LoginScreen2';
import LoginScreen3 from './screens/onboardingScreens/LoginScreen3';
import LoginScreen4 from './screens/onboardingScreens/LoginScreen4';
import LoginScreen5 from './screens/onboardingScreens/LoginScreen5';
import LoginScreen6 from './screens/onboardingScreens/LoginScreen6';
import BiologicalSex from './screens/onboardingScreens/BiologicalSexInput';
import HeightInput from './screens/onboardingScreens/HeightInput';
import WeightInput from './screens/onboardingScreens/WeightInput';


const Stack = createStackNavigator();

// Create all screens within the Stack Navigator - this will allow us to navigate to them even if they are not explicitly within the nav bar. 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login1'
          component={LoginScreen1}
        />
        <Stack.Screen
          name='Login2'
          component={LoginScreen2}
        />
        <Stack.Screen
          name='Login3'
          component={LoginScreen3}
        />
        <Stack.Screen
          name='Login4'
          component={LoginScreen4}
        />
        <Stack.Screen
          name='Login5'
          component={LoginScreen5}
        />
        <Stack.Screen
          name='Login6'
          component={LoginScreen6}
        />
        <Stack.Screen
          name='HeightInput'
          component={HeightInput}
        />
        <Stack.Screen
          name='WeightInput'
          component={WeightInput}
        />
        <Stack.Screen
          name='BiologicalSex'
          component={BiologicalSex}
        />
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
          options={({ route }) => ({ title: 'Add Drink' })}
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
          name='Welcome'
          component={HowToUse}
          options={({ navigation }) => ({
            title: 'Welcome to BACtracker',
            headerLeft: () => (<HeaderBackButton onPress={() => navigation.navigate('InformationHub')} />)
          })}
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
          options={({ route }) => ({ title: 'Edit Profile Information' })}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


