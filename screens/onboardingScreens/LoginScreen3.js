import { Text, View } from 'react-native';

// Import components
import Footer from '../../components/Footer';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { textStyles } from '../../components/styles/textStyles';

// Third Login Screen: Welcome message with general information about our app and mission
const LoginScreen3 = ({ navigation }) => {
    return (
        <View style={containerStyles.centerWhiteContainer}>
            <Text style={[textStyles.text, textStyles.headerText]}>Hi there!</Text>
            <View style={containerStyles.horizontalPadding}>
                <Text style={textStyles.text}>Welcome to our app, <Text style={textStyles.redSemiBoldText}>BACtracker</Text>! This is a tool for young adults to explore and educate themselves about drinking alcohol.
                    {"\n"}{"\n"}Our <Text style={textStyles.redSemiBoldText}>mission</Text> is to increase knowledge and understanding of safe alcohol consumption practices so you can be as informed as possible!</Text>
            </View>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('Login4'); }} leftButtonLabel="Back" leftButtonPress={() => { navigation.navigate('Login2'); }} />
        </View>

        // add progress bar (circles) at bottom of screen -> not MVP
    );
};

export default LoginScreen3