import {Button, Text, View } from 'react-native';
import * as StyleSheet from '../components/styles';
import Title from "../components/Title";
import Popup from '../components/AlcoholPopUp';
import InfoHubPage from '../components/InfoHubPage';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from './Profile'
import BACCalc from './BACCalc'
import AboutUs from './AboutUs'
import Ionicons from 'react-native-vector-icons/Ionicons';


let styles = StyleSheet.styles;
const headerTitle = 'Information Hub';

let InfoPage = () => {
    return (
    <View style={styles.centered}>
        <Title title={headerTitle} />
        <Text style={styles.centered}> This is the Information Hub: Learn about alcohol and its effects on you!</Text>
        <Button
            title="Go to Page 1"
            onPress={() => navigation.navigate(InfoHubPage,{title: 'page 1'})}
        />
        <Popup/>
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