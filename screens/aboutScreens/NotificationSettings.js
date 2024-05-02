import React, { useState } from 'react';
import { ScrollView, View, Text, Switch, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

// Import components
import TitleText from "../../components/Title";

// Import styles
import { containerStyles } from "../../components/styles/containerStyles";
import { imageStyles } from '../../components/styles/imageStyles';
import { textStyles } from '../../components/styles/textStyles';

const NotificationSettings = () => {
  const [hourlyReminder, setHourlyReminder] = useState(false);
  const [twoHourReminder, setTwoHourReminder] = useState(false);
  const [twentyFourHourReminder, setTwentyFourHourReminder] = useState(false);

  return (
    <SafeAreaView style={[containerStyles.centerWhiteContainer, containerStyles.phoneScreen]}>
      <ScrollView style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../assets/images/Frame.png")}
          style={imageStyles.backgroundHeading}
          resizeMode="cover"
        >
          <View style={[containerStyles.row, styles.header]}>
            <TitleText name={"Notifications"}/>
          </View>
        </ImageBackground>

        <View style={styles.settingsContainer}>
          <View style={styles.setting}>
            <Text style={styles.settingText}>Hourly Reminder</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={hourlyReminder ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setHourlyReminder}
              value={hourlyReminder}
            />
          </View>
          <Text style={styles.description}>
            When turned on, you will be notified every 1 hour to be reminded to log their alcohol consumption throughout the night.
          </Text>
          
          {/* 2-Hour Reminder */}
          <View style={styles.setting}>
            <Text style={styles.settingText}>2-Hour Reminder</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={twoHourReminder ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setTwoHourReminder}
              value={twoHourReminder}
            />
          </View>
          <Text style={styles.description}>
            When turned on, you will be notified every 2 hours to be reminded to log their alcohol consumption throughout the night.
          </Text>

          {/* 24-Hour Reminder */}
          <View style={styles.setting}>
            <Text style={styles.settingText}>24-Hour Reminder</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={twentyFourHourReminder ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setTwentyFourHourReminder}
              value={twentyFourHourReminder}
            />
          </View>
          <Text style={styles.description}>
            When turned on, you will be notified every 24 hours to be reminded to log their alcohol consumption throughout the night.
          </Text>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  header: {
    // If additional header styling is needed
  },
  setting: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  settingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    padding: 20,
    paddingTop: 0,
    color: '#666',
  },
  // Add other styles as needed to match the ContactList page
});

export default NotificationSettings;
