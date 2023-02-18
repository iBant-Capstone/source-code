import { Button, Text, View } from 'react-native';
import * as StyleSheet from '../components/styles';
import Title from "../components/Title";
import Popup from '../components/AlcoholPopUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from './Profile'
import BACCalc from './BACCalc'
import AboutUs from './AboutUs'
import Ionicons from 'react-native-vector-icons/Ionicons';


let styles = StyleSheet.styles;
const headerTitle = 'Information Hub';

let InfoPage = (props) => {
  return (
    <View style={styles.centered}>
      <Title title={headerTitle} />
      <Text style={styles.centered}> This is the Information Hub: Learn about alcohol and its effects on you!</Text>
      <Button
        title="Common Alcohol Types"
        // onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'page 1' })}
      />
      <Button
        title="Alcohol Physical Effects"
        onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Alcohol Physical Effects' })}
      />
      <Button
        title="BAC Levels and Effects"
        onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'BAC Levels and Effects' })}
      />
      <Button
        title="Standard Drink Sizes"
        onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Standard Drink Sizes' })}
      />
      <Button
        title="Measuring Alcohol Content"
        onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Measuring Alcohol Content' })}
      />
      <Button
        title="Social Drinking"
        onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Social Drinking' })}
      />
      {/* <Popup/> */}
    </View>
  );
}

const Tab = createBottomTabNavigator();

const InformationHub = ({ navigation }) => {
  return (
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