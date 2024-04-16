import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, SafeAreaView } from 'react-native';

const NotificationSettings = () => {
  const [hourlyReminder, setHourlyReminder] = useState(false);
  const [twoHourReminder, setTwoHourReminder] = useState(false);
  const [twentyFourHourReminder, setTwentyFourHourReminder] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Hourly Reminder</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={hourlyReminder ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setHourlyReminder(previousState => !previousState)}
          value={hourlyReminder}
        />
      </View>
      <Text style={styles.description}>
        When turned on, you will be notified every 1 hour to be reminded to log their alcohol consumption throughout the night.
      </Text>
      <View style={styles.setting}>
        <Text style={styles.settingText}>2-hr Reminder</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={twoHourReminder ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setTwoHourReminder(previousState => !previousState)}
          value={twoHourReminder}
        />
      </View>
      <Text style={styles.description}>
        When turned on, you will be notified every 2 hour to be reminded to log their alcohol consumption throughout the night.
      </Text>
      <View style={styles.setting}>
        <Text style={styles.settingText}>24-hr Reminder</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={twentyFourHourReminder ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setTwentyFourHourReminder(previousState => !previousState)}
          value={twentyFourHourReminder}
        />
      </View>
      <Text style={styles.description}>
        When turned on, you will be notified every 1 hour to be reminded to log their alcohol consumption throughout the night.
      </Text>
    </SafeAreaView>
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
