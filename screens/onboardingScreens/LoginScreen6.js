import { Text, View, Image } from 'react-native';
import * as StyleSheet from '../../components/styles';
import Footer from '../../components/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';

let styles = StyleSheet.styles;

// sixth Login Screen: Introduction to Rosie
const LoginScreen6 = ({ navigation }) => {
    async function setOnboarding() {
        await AsyncStorage.setItem('onboarding', true);
        // const onboard = await AsyncStorage.getItem('onboarding');
        // console.log(onboard);
    }
    setOnboarding();
    return (
        <View>
            <View style={styles.row}>
                <Image style={styles.rosieLeftImage} source={require('../../assets/avatars/Casual_Rosie_shadow.png')} resizeMode='contain' />
                <Text style={styles.rosieSpeechRight}>
                    <Text style={styles.onboardingHeaderText}>Hello! 👋</Text>
                    I'm Rosie, your guide through this app. My job is to explain different features and help get you set up!
                    Are you ready to get started?
                </Text>
            </View>
            <Footer rightButtonLabel="Get Started!" rightButtonPress={() => { navigation.navigate('HeightInput'); }} leftButtonLabel="Back" leftButtonPress={() => { navigation.navigate('Login5'); }} />
        </View>

    );
};

export default LoginScreen6