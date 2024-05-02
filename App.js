import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import screens/components
import Profile from './screens/Profile.js'
import BACCalc from './screens/BACCalc.js'
import { InformationHub } from './screens/InformationHub.js'
import InfoTopicPage from './components/InfoTopicPage.js';
import CommonAlcoholTypes from './screens/CommonAlcoholTypes.js'
import HowToUse from './screens/aboutScreens/HowToUse.js';
import NotificationSettings from './screens/aboutScreens/NotificationSettings.js';
import OurMission from './screens/aboutScreens/OurMission.js';
import OurSources from './screens/aboutScreens/OurSources.js';
import Disclaimers from './screens/aboutScreens/Disclaimers.js';
import EditProfilePage from './screens/EditProfilePage.js';
import AddDrinkType from './screens/addDrinkScreens/AddDrinkType.js';
import AddDrinkSize from './screens/addDrinkScreens/AddDrinkSize.js';
import AddDrinkStrength from './screens/addDrinkScreens/AddDrinkStrength.js'
import AddDrinkHunger from './screens/addDrinkScreens/AddDrinkHunger.js';
import AddDrinkTime from './screens/addDrinkScreens/AddDrinkTime.js';
import ContactList from './components/BACCalc-components/ContactList.js';

// Import onboarding pages
import LoginScreen1 from './screens/onboardingScreens/LoginScreen1';
import LoginScreen2 from './screens/onboardingScreens/LoginScreen2';
import LoginScreen3 from './screens/onboardingScreens/LoginScreen3';
import LoginScreen4 from './screens/onboardingScreens/LoginScreen4';
import PersonalDetailsInput from './screens/onboardingScreens/PersonalDetailsInput.js';

// Import icons
import Ionicons from 'react-native-vector-icons/Ionicons';

import { containerStyles } from './components/styles/containerStyles.js';

// Import fonts
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

import { Dimensions } from 'react-native';
import { textStyles } from './components/styles/textStyles.js';
import AddDrinkEmotion from './screens/addDrinkScreens/AddDrinkEmotion.js';
const width = Dimensions.get('window').width;


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
        options={({ route }) => ({
          title: "",
          headerTransparent: true,
          headerTintColor: 'white',
          headerLeftContainerStyle: { paddingLeft: (width - 375) / 2 }
        })}
      />
      <infoStack.Screen
        name='CommonAlcoholTypes'
        component={CommonAlcoholTypes}
        options={({ route }) => ({
          title: "",
          headerTransparent: true,
          headerTintColor: 'white',
          headerLeftContainerStyle: { paddingLeft: (width - 375) / 2 }
        })}
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
        options={({ route }) => ({
          title: '',
          headerTransparent: true,
          headerTintColor: 'white',
          headerLeftContainerStyle: { paddingLeft: (width - 375) / 2 }
        })}
      />
      <profileStack.Screen
        name='HowToUse'
        component={HowToUse}
        options={({ route }) => ({
          title: '',
          headerTransparent: true,
          headerTintColor: 'white',
          headerLeftContainerStyle: { paddingLeft: (width - 375) / 2 }
        })}
      />
      <profileStack.Screen
        name='NotificationSettings'
        component={NotificationSettings}
        options={({ route }) => ({
          title: '',
          headerTransparent: true,
          headerTintColor: 'white',
          headerLeftContainerStyle: { paddingLeft: (width - 375) / 2 }
        })}
      />
      <profileStack.Screen
        name='OurSources'
        component={OurSources}
        options={({ route }) => ({
          title: '',
          headerTransparent: true,
          headerTintColor: 'white',
          headerLeftContainerStyle: { paddingLeft: (width - 375) / 2 }
        })}
      />
      <profileStack.Screen
        name='EditProfilePage'
        component={EditProfilePage}
        options={({ route }) => ({
          title: '',
          headerTransparent: true,
          headerTintColor: 'white',
          headerLeftContainerStyle: { paddingLeft: (width - 375) / 2 }
        })}
      />
      <profileStack.Screen
        name='Disclaimers'
        component={Disclaimers}
        options={({ route }) => ({
          title: '',
          headerTransparent: true,
          headerTintColor: 'white',
          headerLeftContainerStyle: { paddingLeft: (width - 375) / 2 }
        })}
      />
    </profileStack.Navigator>
  );
}

// the info stack contains all the pages that cannot be accessed from the BACCalc -- do not include pages that are linked through InfoHub or Profile
function BACStackComponent() {
  return (
    <bacStack.Navigator>
      <bacStack.Screen
        name="BACCalc"
        component={BACCalc}
        options={({ route }) => ({
          title: "BAC Calculator",
          headerShown: false,
        })}
      />
      <bacStack.Screen
        name="AddDrinkEmotion"
        component={AddDrinkEmotion}
        options={({ route }) => ({
          title: "",
          headerTransparent: true,
          headerTintColor: "black",
          headerLeftContainerStyle: { paddingLeft: (width - 375) / 2 },
        })}
      />
      <bacStack.Screen
        name="AddDrinkType"
        component={AddDrinkType}
        options={({ route }) => ({
          title: "",
          headerTransparent: true,
          headerTintColor: "black",
          headerLeftContainerStyle: { paddingLeft: (width - 375) / 2 },
        })}
      />
      <bacStack.Screen
        name="AddDrinkSize"
        component={AddDrinkSize}
        options={({ route }) => ({
          title: "",
          headerTransparent: true,
          headerTintColor: "black",
          headerLeftContainerStyle: { paddingLeft: (width - 375) / 2 },
        })}
      />
      <bacStack.Screen
        name="AddDrinkStrength"
        component={AddDrinkStrength}
        options={({ route }) => ({
          title: "",
          headerTransparent: true,
          headerTintColor: "black",
          headerLeftContainerStyle: { paddingLeft: (width - 375) / 2 },
        })}
      />
      <bacStack.Screen
        name="AddDrinkHunger"
        component={AddDrinkHunger}
        options={({ route }) => ({
          title: "",
          headerTransparent: true,
          headerTintColor: "black",
          headerLeftContainerStyle: { paddingLeft: (width - 375) / 2 },
        })}
      />
      <bacStack.Screen
        name="AddDrinkTime"
        component={AddDrinkTime}
        options={({ route }) => ({
          title: "",
          headerTransparent: true,
          headerTintColor: "black",
          headerLeftContainerStyle: { paddingLeft: (width - 375) / 2 },
        })}
      />
      <bacStack.Screen
      name="ContactList"
      component={ContactList}
      options={({ route }) => ({
        title: "",
        headerTransparent: true,
        headerTintColor: "black",
        headerLeftContainerStyle: { paddingLeft: (width - 375) / 2 },
      })}
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
        tabBarStyle: { width: 375, alignSelf: 'center' },
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
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

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
          name='PersonalDetailsInput'
          component={PersonalDetailsInput}
          options={{ headerShown: false }}
        />
        <obStack.Screen
          name='Welcome'
          component={HowToUse}
          options={({ navigation }) => ({
            title: 'Welcome',
            headerShown: false,
            navigation: navigation
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


