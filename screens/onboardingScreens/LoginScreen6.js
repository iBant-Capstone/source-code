import { Text, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import components
import Footer from '../../components/Footer';

// Import styles
import * as StyleSheet from '../../components/styles';
let styles = StyleSheet.styles;

// sixth Login Screen: Introduction to Rosie
const LoginScreen6 = ({ navigation }) => {
    async function setOnboarding() {
        await AsyncStorage.setItem('onboarding', true);
    }
    setOnboarding();
    return (
        <View style={styles.centerContainer}>
            <View style={styles.row}>
                <Image style={styles.rosieLeftImage} source={require('../../assets/avatars/Casual_Rosie_shadow.png')} resizeMode='contain' />
                <Text style={styles.rosieSpeechRight}>
                    <Text style={styles.onboardingHeaderText}>Hello! 👋🏻</Text>
                    I'm Rosie, your guide through this app. My job is to explain different features and help get you set up!
                    Are you ready to get started?
                </Text>
            </View>
            <Footer rightButtonLabel="Get Started!" rightButtonPress={() => { navigation.navigate('HeightInput'); }} leftButtonLabel="Back" leftButtonPress={() => { navigation.navigate('Login5'); }} />
        </View>

    );
};

export default LoginScreen6