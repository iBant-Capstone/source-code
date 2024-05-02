import React from 'react';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

// Import icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import components
import TitleText from '../../components/Title';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { textStyles } from '../../components/styles/textStyles';
import { imageStyles } from '../../components/styles/imageStyles';

const ContactList = ({ navigation }) => {
  // Dummy data for contacts
  const contacts = [
    { id: '1', name: 'Mom', isFavorite: true },
    { id: '2', name: 'Angel Hughes', isFavorite: false },
    { id: '3', name: 'Annie B.', isFavorite: false },
    // ... more contacts
  ];

  // Function to render each contact
  const renderContactItem = ({ item }) => (
    <TouchableOpacity style={styles.contactCard} onPress={() => {/* handle navigation or action on press */}}>
      <View style={styles.cardContent}>
        {/* Display favorite icon conditionally if item is favorited */}
        {item.isFavorite && <Ionicons name="star" size={16} color="#ffd700" />}
        <Text style={styles.contactName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[containerStyles.centerWhiteContainer, containerStyles.phoneScreen]}>
      <ScrollView style={{ minWidth: "100%" }}>
        <ImageBackground
          source={require("../../assets/images/Frame.png")}
          style={{ width: "100%", height: 163 }}
          resizeMode='cover'
        >
          <View style={[containerStyles.row, styles.header]}>
            <TitleText name={"Contacts"}></TitleText>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="add" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <FlatList
          data={contacts}
          renderItem={renderContactItem}
          keyExtractor={(item) => item.id}
          style={styles.contactList}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  addButton: {
    // Style the add button
  },
  contactItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    alignItems: 'center',
  },
  contactCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactName: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    // Style for the contact name text
  },
});

export default ContactList;
