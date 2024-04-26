import React, { useState } from 'react';
import { ScrollView, View, Text, Switch, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { containerStyles } from "../../components/styles/containerStyles";

import TitleText from "../../components/Title";
import { imageStyles } from '../../components/styles/imageStyles';

const NotificationSettings = () => {
  const [hourlyReminder, setHourlyReminder] = useState(false);
  const [twoHourReminder, setTwoHourReminder] = useState(false);
  const [twentyFourHourReminder, setTwentyFourHourReminder] = useState(false);

  return (
    <ScrollView style={containerStyles.phoneScreen}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/Frame.png")}
          style={imageStyles.backgroundHeading}
          resizeMode="cover"
        >
          <View style={[containerStyles.row]}>
            <TitleText name={"Notifications"}/>
          </View>
        </ImageBackground>

        <View style={styles.setting}>
          <Text style={styles.settingText}>Hourly Reminder</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={hourlyReminder ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() =>
              setHourlyReminder((previousState) => !previousState)
            }
            value={hourlyReminder}
          />
        </View>
        <Text style={styles.description}>
          When turned on, you will be notified every 1 hour to be reminded to
          log their alcohol consumption throughout the night.
        </Text>
        <View style={styles.setting}>
          <Text style={styles.settingText}>2-hr Reminder</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={twoHourReminder ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() =>
              setTwoHourReminder((previousState) => !previousState)
            }
            value={twoHourReminder}
          />
        </View>
        <Text style={styles.description}>
          When turned on, you will be notified every 2 hour to be reminded to
          log their alcohol consumption throughout the night.
        </Text>
        <View style={styles.setting}>
          <Text style={styles.settingText}>24-hr Reminder</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={twentyFourHourReminder ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() =>
              setTwentyFourHourReminder((previousState) => !previousState)
            }
            value={twentyFourHourReminder}
          />
        </View>
        <Text style={styles.description}>
          When turned on, you will be notified every 24 hour to be reminded to
          log their alcohol consumption throughout the night.
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    // Add styles that match your app's design
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    // Add styles that match your app's design
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    // Add styles that match your app's design
  },
  settingText: {
    fontSize: 18,
    // Add styles that match your app's design
  },
  description: {
    fontSize: 16,
    padding: 20,
    paddingTop: 0,
    color: '#666',
    // Add styles that match your app's design
  },
  // Add other styles as needed
});

export default NotificationSettings;
