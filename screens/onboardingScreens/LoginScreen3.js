import { Text, View, Image } from 'react-native';
import * as StyleSheet from '../../components/styles';
import Footer from '../../components/Footer';

let styles = StyleSheet.styles;

// Third Login Screen: Welcome message with general information about our app and mission
const LoginScreen3 = ({navigation}) => {
    return (
        <View>
            <Text>
                <Text style={styles.onboardingHeaderText}>Hi there!</Text>
                Welcome to our app, <Text style={styles.redBoldText}>BACtracker</Text>! This is a tool for young adults to explore and educate themselves about drinking alcohol.
                Our <Text style={styles.redBoldText}>mission</Text> is to increase knowledge and understanding of safe alcohol consumption practices so you can be as informed as possible!
            </Text>
            <Footer  rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('Login4');}} leftButtonLabel="Back" leftButtonPress={() => { navigation.navigate('Login2');}}/>
        </View>
       
        // add progress bar (circles) at bottom of screen -> not MVP
    );
};

export default LoginScreen3