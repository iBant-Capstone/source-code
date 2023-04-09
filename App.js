import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/elements';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import screens/components
import Profile from './screens/Profile.js'
import BACCalc from './screens/BACCalc.js'
import { InformationHub } from './screens/InformationHub.js'
import InfoTopicPage from './components/InfoTopicPage.js';
import AddDrinkPage from './screens/AddDrink.js'
import CommonAlcoholTypes from './screens/CommonAlcoholTypes.js'
import HowToUse from './screens/aboutScreens/HowToUse.js';
import OurMission from './screens/aboutScreens/OurMission.js';
import OurSources from './screens/aboutScreens/OurSources.js';
import EditProfilePage from './screens/EditProfilePage.js';
import AddDrinkType from './screens/addDrinkScreens/AddDrinkType.js';
import AddDrinkSize from './screens/addDrinkScreens/AddDrinkSize.js';
import AddDrinkStrength from './screens/addDrinkScreens/AddDrinkStrength.js'
import AddDrinkHunger from './screens/addDrinkScreens/AddDrinkHunger.js';

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

// Import icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import fonts
import { useFonts } from 'expo-font';

// creating navigators for each of our sections
// ob = onboarding
// info = information hub
// profile = profile
// bac = BAC pages
// tab = our main nav bar 
const Tab = createBottomTabNavigator();
const obStack = createStackNavigator();
const infoStack = createStackNavigator();
const profileStack = createStackNavigator();
const bacStack = createStackNavigator();

// the info stack contains all the pages that cannot be accessed from the Information Hub -- do not include pages that are linked through profile or BACCalc
function InfoStackComponent() {
  return (
    <infoStack.Navigator>
      <infoStack.Screen
        name='InformationHub'
        component={InformationHub}
        options={({ route }) => ({ headerShown: false })}
      />
      <infoStack.Screen
        name='InfoTopicPage'
        component={InfoTopicPage}
        options={({ route }) => ({ title: "", headerTransparent: true, headerTintColor: 'white' })}
      />
      <infoStack.Screen
        name='CommonAlcoholTypes'
        component={CommonAlcoholTypes}
        options={({ route }) => ({ title: "", headerTransparent: true, headerTintColor: 'white' })}
      />

    </infoStack.Navigator>
  );
}

// the Profile stack contains all the pages that cannot be accessed from the Profile -- do not include pages that are linked through InfoHub or BACCalc
function ProfileStackComponent() {
  return (
    <profileStack.Navigator>
      <profileStack.Screen
        name='Profile'
        component={Profile}
        options={({ route }) => ({ headerShown: false })}
      />
      <profileStack.Screen
        name='OurMission'
        component={OurMission}
        options={({ route }) => ({ title: '', headerTransparent: true, headerTintColor: 'white' })}
      />
      <profileStack.Screen
        name='HowToUse'
        component={HowToUse}
        options={({ route }) => ({ title: '', headerTransparent: true, headerTintColor: 'white' })}
      />
      <profileStack.Screen
        name='OurSources'
        component={OurSources}
        options={({ route }) => ({ title: '', headerTransparent: true, headerTintColor: 'white' })}
      />
      <profileStack.Screen
        name='EditProfilePage'
        component={EditProfilePage}
        options={({ route }) => ({ title: 'Edit Profile Information' })}
      />
    </profileStack.Navigator>
  );
}

// the info stack contains all the pages that cannot be accessed from the BACCalc -- do not include pages that are linked through InfoHub or Profile
function BACStackComponent() {
  return(
  <bacStack.Navigator>
    <bacStack.Screen
      name='BACCalc'
      component={BACCalc}
      options={({ route }) => ({ title: 'BAC Calculator', headerBackVisible: false })}
    />
    <bacStack.Screen
      name='AddDrinkPage'
      component={AddDrinkPage}
      options={({ route }) => ({ title: 'Add Drink' })}
    />
    <bacStack.Screen
      name='AddDrinkType'
      component={AddDrinkType}
      options={({ route }) => ({ title: 'Add Drink' })}
    />
    <bacStack.Screen
      name='AddDrinkSize'
      component={AddDrinkSize}
      options={({ route }) => ({ title: 'Add Drink' })}
    />
    <bacStack.Screen
      name='AddDrinkStrength'
      component={AddDrinkStrength}
      options={({ route }) => ({ title: 'Add Drink' })}
    />
    <bacStack.Screen
      name='AddDrinkHunger'
      component={AddDrinkHunger}
      options={({ route }) => ({ title: 'Add Drink' })}
    />
  </bacStack.Navigator>
  );
}


// the tab navigator - links to all the other stacks 
// constant across all pages
function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          // taking icon names straight from Ionicons
          if (route.name === 'Information Hub') {
            iconName = focused ? 'ios-book' : 'ios-book-outline';

          } else if (route.name === 'BAC Calc') {
            iconName = focused ? 'ios-calculator' : 'ios-calculator-outline';

          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';

          }
          return (
            <Ionicons name={iconName} size={size} color={color} />

          );
        },
        tabBarActiveTintColor: '#CF5260',
        tabBarInactiveTintColor: 'black',
        tabBarLabel: () => { return null },
      })}
    >
      {/* Our three main pages */}
      <Tab.Screen
        name="Information Hub"
        component={InfoStackComponent}
        options={({ route }) => ({ headerShown: false, headerBackVisible: false })}

      />
      <Tab.Screen
        name="BAC Calc"
        component={BACStackComponent}
        options={({ route }) => ({ headerShown: false, headerBackVisible: false })}

      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackComponent}
        options={({ route }) => ({ headerShown: false, headerBackVisible: false })}

      />

    </Tab.Navigator>
  );
}


// Create all screens within the Stack Navigator - this will allow us to navigate to them even if they are not explicitly within the nav bar. 
export default function App() {

  // For fonts
  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
  });

  // app starts with the onboarding stack and then links to the welcome/infohub page
  return (
    <NavigationContainer>
      <obStack.Navigator>
        <obStack.Screen
          name='Login1'
          component={LoginScreen1}
          options={{
            headerShown: false
          }}
        />
        <obStack.Screen
          name='Login2'
          component={LoginScreen2}
          options={{ headerShown: false }}
        />
        <obStack.Screen
          name='Login3'
          component={LoginScreen3}
          options={{ headerShown: false }}
        />
        <obStack.Screen
          name='Login4'
          component={LoginScreen4}
          options={{ headerShown: false }}
        />
        <obStack.Screen
          name='Login5'
          component={LoginScreen5}
          options={{ headerShown: false }}
        />
        <obStack.Screen
          name='Login6'
          component={LoginScreen6}
          options={{ headerShown: false }}
        />
        <obStack.Screen
          name='HeightInput'
          component={HeightInput}
          options={{ headerShown: false }}
        />
        <obStack.Screen
          name='WeightInput'
          component={WeightInput}
          options={{ headerShown: false }}
        />
        <obStack.Screen
          name='BiologicalSex'
          component={BiologicalSex}
          options={{ headerShown: false }}
        />
        <obStack.Screen
          name='Welcome'
          component={HowToUse}
          options={({ navigation }) => ({
            title: 'Welcome to BACtracker',
            headerLeft: () => (<HeaderBackButton onPress={() => navigation.navigate('InformationHub')} />)
          })}
        />
        <obStack.Screen
          name='InformationHub'
          component={NavBar}
          options={() => ({ headerShown: false, headerBackVisible: false })}
        />

      </obStack.Navigator>
    </NavigationContainer>
  );
}


