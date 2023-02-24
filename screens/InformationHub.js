import { Pressable, Text, View, Image, ImageBackground } from 'react-native';
import * as StyleSheet from '../components/styles';
import Popup from '../components/AlcoholPopUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import other nav bar pages
import Profile from './Profile'
import BACCalc from './BACCalc'

// Import icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Set style 
let styles = StyleSheet.styles;

// Page to be returned
let InfoPage = (props) => {
  return (
    <View>
      <View style={styles.row}>
        <Image style={styles.rosieLeftImage} source={require('../assets/avatars/Scientist_Rosie_shadow.png')} resizeMode='contain' />
        <Text style={styles.rosieSpeechRight}>Hi there, welcome to our Information Hub! What alcohol information are you looking for?</Text>
      </View>
      <View style={[styles.row, styles.centered]}>
        <Pressable
          style={styles.mainRedButton}
          onPress={() => props.navigation.navigate('CommonAlcoholTypes')}>
          <Text style={styles.mainRedButtonText}>Common Alcohol Types</Text>
        </Pressable>
        <Pressable
          style={styles.mainRedButton}
          title="Alcohol Physical Effects"
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Alcohol Physical Effects' })}>
          <Text style={styles.mainRedButtonText}>Alcohol Physical Effects</Text>
        </Pressable>
        <Pressable
          style={styles.mainRedButton}
          title="BAC Levels and Effects"
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'BAC Levels and Effects' })}>
          <Text style={styles.mainRedButtonText}>BAC Levels and Effects</Text>
        </Pressable>
        <Pressable
          style={styles.mainRedButton}
          title="Standard Drink Sizes"
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Standard Drink Sizes' })}>
          <Text style={styles.mainRedButtonText}>Standard Drink Sizes</Text>
        </Pressable>
        <Pressable
          style={styles.mainRedButton}
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Measuring Alcohol Content' })}>
          <Text style={styles.mainRedButtonText}>Measuring Alcohol Content</Text>
        </Pressable>
        <Pressable
          style={styles.mainRedButton}
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Social Drinking' })}>
          <Text style={styles.mainRedButtonText}>Social Drinking</Text>
        </Pressable>
        <Pressable
          style={styles.mainRedButton}
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Drinking Safety Tips' })}>
          <Text style={styles.mainRedButtonText}>Drinking Safety Tips</Text>
        </Pressable>
        <Pressable
          style={styles.mainRedButton}
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Resources' })}>
          <Text style={styles.mainRedButtonText}>Resources</Text>
        </Pressable>
      </View>
      {/* <Popup/> */}
    </View >
  );
}


// Information Hub is the "home page of the app"
// Everything below this is part of the navigation bar.
const Tab = createBottomTabNavigator();

const InformationHub = ({ navigation }) => {
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
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#CF5260',
        tabBarInactiveTintColor: 'black',
        tabBarLabel: () => { return null },
      })}
    >
      <Tab.Screen
        name="Information Hub"
        component={InfoPage}
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

  );
};



export default InformationHub