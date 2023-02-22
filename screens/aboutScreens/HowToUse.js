import { Text, View, Image } from 'react-native';
import * as StyleSheet from '../../components/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

let styles = StyleSheet.styles;

const HowToUse = () => {
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <View style={styles.row}>
                <Image style={styles.rosieLeftImage} source={require('../../assets/avatars/Curious_Rosie_shadow.png')} resizeMode='contain' />
                <Text style={styles.rosieSpeechRight}>Wondering how to use the app? See below!</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.howToIconContainer}>
                        <Ionicons name={'ios-book-outline'} style={styles.howToIcon} />
                    </View>
                    <Text style={styles.howToIconText}>This leads to our <Text style={styles.howToBoldText}>home page, the information hub,</Text> where you can find general information and common questions surrounding several alcohol consumption topics including drink types and safety measures.</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.howToIconContainer}>
                        <Ionicons name={'ios-calculator-outline'} style={styles.howToIcon} />
                    </View>
                    <Text style={styles.howToIconText}>This leads to the <Text style={styles.howToBoldText}>Blood Alcohol Content (BAC) Calculator</Text>. Here, you can either insert drinks in real-time or experiment with how consuming different drinks will impact your BAC level. This page will also suggest how you may feel internally and display externally based on your BAC level.</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.howToIconContainer}>
                        <Ionicons name={'ios-person-outline'} style={styles.howToIcon} />
                    </View>
                    <Text style={styles.howToIconText}>This leads to the <Text style={styles.howToBoldText}>information about you</Text> that is used to calculate your BAC. You can change this information if need be! Here you can also find information about the team behind this app, how to use it, and our sources.</Text>
                </View>
            </View>
        </View>
    );
};

export default HowToUse