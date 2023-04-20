import { Text, View } from 'react-native';

// Import icons 
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import components
import Footer from '../../components/Footer';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { textStyles } from '../../components/styles/textStyles';

// Fifth Login Screen: Medical disclaimer
const LoginScreen5 = ({ navigation }) => {
    return (
        <View style={containerStyles.centerWhiteContainer}>
            <Text style={[textStyles.text, textStyles.headerText]}><Ionicons name='alert-outline' style={{ color: '#CF5260', fontSize: 30 }} />Disclaimer<Ionicons name='alert-outline' style={{ color: '#CF5260', fontSize: 30 }} /></Text>
            <View style={containerStyles.horizontalPadding}>
                <Text style={textStyles.text}>The alcohol-focused algorithms used in this application are based on currently available information. This means that they may <Text style={textStyles.redSemiBoldText}>not</Text> be completely accurate and can change over time.
                    {"\n"}{"\n"}<Text style={textStyles.redSemiBoldText}>This app is not meant to substitute the advice of a licensed medical professional. Please use this resource with caution!</Text>
                </Text>
            </View>
            <Footer rightButtonLabel="I accept" rightButtonPress={() => { navigation.navigate('Login6'); }} leftButtonLabel="Back" leftButtonPress={() => { navigation.navigate('Login4'); }} />
        </View>
    );
};

export default LoginScreen5