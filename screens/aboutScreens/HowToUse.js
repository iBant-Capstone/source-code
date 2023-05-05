import { Text, View, Image, ScrollView, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';

// Import icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import components
import TitleText from '../../components/Title';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { buttonStyles } from '../../components/styles/buttonStyles';
import { imageStyles } from '../../components/styles/imageStyles';
import { textStyles } from '../../components/styles/textStyles';

// Create a how to use page with informaiton on how the different nav bar icons leads to different pages
const HowToUse = ({ navigation }) => {
    const route = useRoute();

    return (
        <ScrollView style={[containerStyles.phoneScreen, { backgroundColor: '#fff' }]}>
            <View>
                <View style={[containerStyles.row, containerStyles.titleContainer]}>
                    <TitleText name={"How to Use"} />
                    <Image style={imageStyles.rightImage} source={require('../../assets/avatars/Curious_Rosie.png')} resizeMode='contain' />
                </View>
                <View style={containerStyles.centerWhiteContainer}>
                    <Text style={[textStyles.text, { marginVertical: 15 }]}>Wondering how to use the app? See below!</Text>
                    <View style={containerStyles.row}>
                        <Pressable onPress={() => navigation.navigate('InformationHub')} style={containerStyles.howToIconContainer}>
                            <Ionicons name={'ios-book-outline'} style={imageStyles.howToIcon} />
                        </Pressable>
                        <Text style={[textStyles.text, textStyles.iconExplanationText]}>This leads to our <Text style={textStyles.redSemiBoldText}>home page, the information hub,</Text> where you can find general information and common questions surrounding several alcohol consumption topics including drink types and safety measures.</Text>
                    </View>
                    <View style={containerStyles.row}>
                        <Pressable onPress={() => navigation.navigate('BAC Calc')} style={containerStyles.howToIconContainer}>
                            <Ionicons name={'ios-calculator-outline'} style={imageStyles.howToIcon} />
                        </Pressable>
                        <Text style={[textStyles.text, textStyles.iconExplanationText]}>This leads to the <Text style={textStyles.redSemiBoldText}>Blood Alcohol Content (BAC) Calculator</Text>. Here, you can either insert drinks in real-time or experiment with how consuming different drinks will impact your BAC level. This page will also suggest how you may feel internally and display externally based on your BAC level.</Text>
                    </View>
                    <View style={containerStyles.row}>
                        <Pressable onPress={() => navigation.navigate('Profile')} style={containerStyles.howToIconContainer}>
                            <Ionicons name={'ios-person-outline'} style={imageStyles.howToIcon} />
                        </Pressable>
                        <Text style={[textStyles.text, textStyles.iconExplanationText]}>This leads to the <Text style={textStyles.redSemiBoldText}>information about you</Text> that is used to calculate your BAC. You can change this information if need be! Here you can also find information about the team behind this app, how to use it, and our sources.</Text>
                    </View>
                    <View style={containerStyles.centerWhiteContainer}>
                        {route.name == "Welcome" ? <Pressable onPress={() => navigation.navigate('InformationHub')} style={[buttonStyles.alignCenter, buttonStyles.redButton, buttonStyles.defaultButton, buttonStyles.largeButton]}><Text style={textStyles.whiteSemiBoldText}>Click here to get started with the app!</Text></Pressable> : <View></View>}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default HowToUse