import { Text, View, Image } from 'react-native';

// Import components
import Footer from '../../components/Footer';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { textStyles } from '../../components/styles/textStyles';
import { imageStyles } from '../../components/styles/imageStyles';

// Third Login Screen: Welcome message with general information about our app and mission
const LoginScreen3 = ({ navigation }) => {
    return (
        <View style={[containerStyles.centerWhiteContainer, containerStyles.phoneScreen, containerStyles.horizontalPadding]}>
            <Text style={[textStyles.text, textStyles.headerText, textStyles.redSemiBoldText]}>Welcome!</Text>
            <View style={containerStyles.horizontalPadding}>
                <Text style={[textStyles.text, containerStyles.alignTextCenter]}>Welcome to our app, <Text style={textStyles.redSemiBoldText}>BACtracker</Text>! This is a tool for young adults to explore and educate themselves about alcohol consumption.
                </Text>
            </View>
            <Image style={imageStyles.medCenterImage} source={require('../../assets/avatars/Curious_Rosie_shadow.png')} resizeMode='contain' />
            <View style={{ backgroundColor: "#CF5260", opacity: 0.75, borderRadius: 5, padding: 8 }}>
                <Text style={[textStyles.whiteText, containerStyles.alignTextCenter]}>Our <Text style={textStyles.boldText}>mission</Text> is to increase alcohol health literacy in young adults, and we're here to support you in making <Text style={textStyles.boldText}>safe and informed</Text> alcohol consumption decisions!</Text>
            </View>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('Login4'); }} leftButtonLabel="Back" leftButtonPress={() => { navigation.navigate('Login2'); }} />
        </View>
    );
};

export default LoginScreen3