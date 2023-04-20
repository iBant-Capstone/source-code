import { Text, View } from 'react-native';

// Import icons 
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import components
import Footer from '../../components/Footer';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { textStyles } from '../../components/styles/textStyles';

// Fourth Login Screen: Note about data storage and protection
const LoginScreen4 = ({ navigation }) => {
    return (
        <View style={containerStyles.centerWhiteContainer}>
            <Text style={[textStyles.text, textStyles.headerText]}><Ionicons name='alert-outline' style={{ color: '#CF5260', fontSize: 30 }} />A quick note<Ionicons name='alert-outline' style={{ color: '#CF5260', fontSize: 30 }} /></Text>
            <View style={containerStyles.horizontalPadding}>
                <Text style={textStyles.text}>We want to protect the privacy of your information, so <Text style={textStyles.redSemiBoldText}>all data is stored locally</Text>. {"\n"}{"\n"}If this app is deleted, your data will be lost.
                    We will only collect information on an as-needed basis!</Text>
            </View>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('Login5'); }} leftButtonLabel="Back" leftButtonPress={() => { navigation.navigate('Login3'); }} />
        </View>

        // add progress bar (circles) at bottom of screen -> not MVP
    );
};

export default LoginScreen4