import { Text, View, Image, ScrollView } from 'react-native';

// Import icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import components
import TitleText from '../../components/Title';

// Import styles
import * as StyleSheet from '../../components/styles';
let styles = StyleSheet.styles;

// Create a how to use page with informaiton on how the different nav bar icons leads to different pages
const HowToUse = () => {
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#fff' }}>
                <View style={styles.titleContainer}>
                    <TitleText name={"How to Use"} />
                    <Image style={styles.rosieRightImage} source={require('../../assets/avatars/Curious_Rosie.png')} resizeMode='contain' />
                </View>
                <View style={styles.centerContainer}>
                    <Text style={{ marginVertical: 15 }}>Wondering how to use the app? See below!</Text>
                    <View style={styles.row}>
                        <View style={styles.howToIconContainer}>
                            <Ionicons name={'ios-book-outline'} style={styles.howToIcon} />
                        </View>
                        <Text style={styles.howToIconText}>This leads to our <Text style={styles.redBoldText}>home page, the information hub,</Text> where you can find general information and common questions surrounding several alcohol consumption topics including drink types and safety measures.</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.howToIconContainer}>
                            <Ionicons name={'ios-calculator-outline'} style={styles.howToIcon} />
                        </View>
                        <Text style={styles.howToIconText}>This leads to the <Text style={styles.redBoldText}>Blood Alcohol Content (BAC) Calculator</Text>. Here, you can either insert drinks in real-time or experiment with how consuming different drinks will impact your BAC level. This page will also suggest how you may feel internally and display externally based on your BAC level.</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.howToIconContainer}>
                            <Ionicons name={'ios-person-outline'} style={styles.howToIcon} />
                        </View>
                        <Text style={styles.howToIconText}>This leads to the <Text style={styles.redBoldText}>information about you</Text> that is used to calculate your BAC. You can change this information if need be! Here you can also find information about the team behind this app, how to use it, and our sources.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default HowToUse