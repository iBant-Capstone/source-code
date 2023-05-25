import { Text, View, Image } from 'react-native';

// Import components
import Footer from '../../components/Footer';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { textStyles } from '../../components/styles/textStyles';
import { imageStyles } from '../../components/styles/imageStyles';

// Second Login Screen: "Welcome to BACtracker" text and slogan
const LoginScreen2 = ({ navigation }) => {
    return (
        <View style={[containerStyles.centerWhiteContainer, containerStyles.phoneScreen]}>
            <Text style={[textStyles.text, textStyles.headerText]}>Welcome to <Text style={[textStyles.boldText, textStyles.headerText]}>BAC</Text>tracker!</Text>
            <Text style={textStyles.redSemiBoldText}>We've got your BACk.</Text>
            <Image style={imageStyles.medCenterImage} source={require('../../assets/avatars/Casual_Rosie_shadow.png')} resizeMode='contain' />
            <Text style={[textStyles.text, textStyles.headerText, textStyles.redSemiBoldText, { marginBottom: "5%" }]}>Hi, I'm Rosie!</Text>
            <Text style={[textStyles.text, containerStyles.horizontalPadding, containerStyles.alignTextCenter]}>I'm your guide through this app. My job is to explain different features and help get you set up!</Text>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('Login3'); }} />
        </View>
    );
};

export default LoginScreen2