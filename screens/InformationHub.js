import { Pressable, Text, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ClearDrinksButton from '../components/ClearDrinkButton';

// Import components
import TitleText from '../components/Title';

// Set style 
import { styles } from '../components/styles';
import { containerStyles } from '../components/styles/containerStyles';
import { buttonStyles } from '../components/styles/buttonStyles';

// Page to be returned
// Has different buttons for the different topics that are available on information hub
export const InfoPage = (props) => {

  return (
    <View>
      <View style={styles.titleContainer}>
        <TitleText name={"Information Hub"}></TitleText>
        <Image style={styles.rosieRightImage} source={require('../assets/avatars/Scientist_Rosie.png')} resizeMode='contain' />

      </View>
      <ClearDrinksButton/>
      <View style={[containerStyles.row, containerStyles.centerContainer]}>
        <Text style={{ marginBottom: 15 }}>Hi there, welcome to our Information Hub! What alcohol information are you looking for?</Text>
        <Pressable
          style={[buttonStyles.alignLeft, buttonStyles.redButton, buttonStyles.defaultButton]}
          onPress={() => props.navigation.navigate('CommonAlcoholTypes')}>
          <Text style={styles.mainRedButtonText}>Common Alcohol Types</Text>
        </Pressable>
        <Pressable
          style={[buttonStyles.alignLeft, buttonStyles.redButton, buttonStyles.defaultButton]}
          title="Alcohol Physical Effects"
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Alcohol Physical Effects' })}>
          <Text style={styles.mainRedButtonText}>Alcohol Physical Effects</Text>
        </Pressable>
        <Pressable
          style={[buttonStyles.alignLeft, buttonStyles.redButton, buttonStyles.defaultButton]}
          title="BAC Levels and Effects"
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'BAC Levels and Effects' })}>
          <Text style={styles.mainRedButtonText}>BAC Levels and Effects</Text>
        </Pressable>
        <Pressable
          style={[buttonStyles.alignLeft, buttonStyles.redButton, buttonStyles.defaultButton]}
          title="Standard Drink Sizes"
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Standard Drink Sizes' })}>
          <Text style={styles.mainRedButtonText}>Standard Drink Sizes</Text>
        </Pressable>
        <Pressable
          style={[buttonStyles.alignLeft, buttonStyles.redButton, buttonStyles.defaultButton]}
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Measuring Alcohol Content' })}>
          <Text style={styles.mainRedButtonText}>Measuring Alcohol Content</Text>
        </Pressable>
        <Pressable
          style={[buttonStyles.alignLeft, buttonStyles.redButton, buttonStyles.defaultButton]}
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Social Drinking' })}>
          <Text style={styles.mainRedButtonText}>Social Drinking</Text>
        </Pressable>
        <Pressable
          style={[buttonStyles.alignLeft, buttonStyles.redButton, buttonStyles.defaultButton]}
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Drinking Safety Tips' })}>
          <Text style={styles.mainRedButtonText}>Drinking Safety Tips</Text>
        </Pressable>
        <Pressable
          style={[buttonStyles.alignLeft, buttonStyles.redButton, buttonStyles.defaultButton]}
          onPress={() => props.navigation.navigate('InfoTopicPage', { title: 'Resources' })}>
          <Text style={styles.mainRedButtonText}>Resources</Text>
        </Pressable>
      </View>
    </View >
  );
}


export const InformationHub = ({ navigation }) => {
  return (
    <View>
      <InfoPage navigation={navigation} />
    </View>

  );
};