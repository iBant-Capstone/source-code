import { Text, View, Image } from 'react-native';
import * as StyleSheet from '../../components/styles';
import Footer from '../../components/Footer';

let styles = StyleSheet.styles;

// sixth Login Screen: Introduction to Rosie
const LoginScreen5 = ({navigation}) => {
    return (
        <View>
            <Text>
               Hi! I'm Rosie ...blah blah blah blah here's how to use this app
            </Text>
            <Footer rightButtonLabel="Get Started!" rightButtonPress={() => { navigation.navigate('HeightInput');}} leftButtonLabel="Back" leftButtonPress={() => { navigation.navigate('Login5');}}/>
    </View>
        
    );
};

export default LoginScreen5