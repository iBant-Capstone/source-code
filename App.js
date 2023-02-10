import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button } from 'react-native';
import { ScrollView } from 'react-native-web';

// TODO: PUT IN DIFFERENT FILE AND IMPORT FROM THE TOP
const InformationHub = ({navigation}) => {
  return (
    <ScrollView>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }
      />
      <Button
        title="Go to BACCalc"
        onPress={() =>
          navigation.navigate('BACCalc')
        }
      />
    </ScrollView>
  );
};
const Profile = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
const AboutUs = ({navigation, route}) => {
  return <Text>Here are some things about us!</Text>;
};
const BACCalc = ({navigation, route}) => {
  return <Text>Get drunk!</Text>;
};


// Actual beginning of App.js
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={InformationHub}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs} 
        />
        <Stack.Screen
          name="BACCalc"
          component={BACCalc} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
