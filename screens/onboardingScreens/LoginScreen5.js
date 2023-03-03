import { Text, View } from 'react-native';

// Import components
import Footer from '../../components/Footer';

// Import styles
import * as StyleSheet from '../../components/styles';
let styles = StyleSheet.styles;

// Fifth Login Screen: Medical disclaimer
const LoginScreen5 = ({navigation}) => {
    return (
        <View>
            <Text>
                <Text style={styles.onboardingHeaderText}>Disclaimer</Text>
                The alcohol-focused algorithms used in this application are based on currently available information. This means that they may <Text style={styles.redBoldText}>not</Text> be completely accurate and can change over time. 
                <Text style={styles.redBoldText}>This app is not meant to substitute the advice of a licensed medical professional. Please use this resource with caution!</Text>
            </Text>
            <Footer  rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('Login6');}} leftButtonLabel="Back" leftButtonPress={() => { navigation.navigate('Login4');}}/>
    </View>
        // add "I accept"/"Get started" button
    );
};

export default LoginScreen5