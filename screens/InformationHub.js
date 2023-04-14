import { Pressable, Text, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import components
import TitleText from '../components/Title';

// Set style 
import * as StyleSheet from '../components/styles';
let styles = StyleSheet.styles;

// Page to be returned
// Has different buttons for the different topics that are available on information hub
export const InfoPage = (props) => {

  return (
    <View>
      <View style={styles.titleContainer}>
        <TitleText name={"Information Hub"}></TitleText>
        <Image style={styles.rosieRightImage} source={require('../assets/avatars/Scientist_Rosie.png')} resizeMode='contain' />

      </View>
      <View style={[styles.row, styles.centered]}>
        <Text style={{ marginBottom: 15 }}>Hi there, welcome to our Information Hub! What alcohol information are you looking for?</Text>
        <Pressable
          style={styles.leftRedButton}
          onPress={() => props.navigation.navigate('CommonAlcoholTypes')}>
          <Text style={styles.mainRedButtonText}>Common Alcohol Types</Text>
        </Pressable>
        <Pressable
          style={styles.leftRedButton}
          title="Alcohol Physical Effects"
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Alcohol Physical Effects' })}>
          <Text style={styles.mainRedButtonText}>Alcohol Physical Effects</Text>
        </Pressable>
        <Pressable
          style={styles.leftRedButton}
          title="BAC Levels and Effects"
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'BAC Levels and Effects' })}>
          <Text style={styles.mainRedButtonText}>BAC Levels and Effects</Text>
        </Pressable>
        <Pressable
          style={styles.leftRedButton}
          title="Standard Drink Sizes"
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Standard Drink Sizes' })}>
          <Text style={styles.mainRedButtonText}>Standard Drink Sizes</Text>
        </Pressable>
        <Pressable
          style={styles.leftRedButton}
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Measuring Alcohol Content' })}>
          <Text style={styles.mainRedButtonText}>Measuring Alcohol Content</Text>
        </Pressable>
        <Pressable
          style={styles.leftRedButton}
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Social Drinking' })}>
          <Text style={styles.mainRedButtonText}>Social Drinking</Text>
        </Pressable>
        <Pressable
          style={styles.leftRedButton}
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Drinking Safety Tips' })}>
          <Text style={styles.mainRedButtonText}>Drinking Safety Tips</Text>
        </Pressable>
        <Pressable
          style={styles.leftRedButton}
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Resources' })}>
          <Text style={styles.mainRedButtonText}>Resources</Text>
        </Pressable>
        <Pressable
            onPress={() => {
                AsyncStorage.removeItem("drinks") 
            }}
            accessibilityLabel="Add a drink"
            style={styles.whiteButton}
        >
            <Text>Clear Drinks</Text>
        </Pressable>
      </View>
    </View >
  );
}


export const InformationHub = ({ navigation }) => {
  console.log("Information Hub page")
  return (
    <View>
      <InfoPage navigation={navigation} />
    </View>

  );
};