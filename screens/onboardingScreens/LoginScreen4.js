import { Text, View } from 'react-native';

// Import components
import Footer from '../../components/Footer';

// Import styles
import * as StyleSheet from '../../components/styles';
let styles = StyleSheet.styles;

// Fourth Login Screen: Note about data storage and protection
const LoginScreen4 = ({ navigation }) => {
    return (
        <View>
            <Text>
                <Text style={styles.onboardingHeaderText}>A quick note</Text>
                We want to protect the privacy of your information, so <Text style={styles.redBoldText}>all data is stored locally</Text>. If this app is deleted, your data will be lost.
                We will only collect information on an as-needed basis!
            </Text>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('Login5'); }} leftButtonLabel="Back" leftButtonPress={() => { navigation.navigate('Login3'); }} />
        </View>

        // add progress bar (circles) at bottom of screen -> not MVP
    );
};

export default LoginScreen4