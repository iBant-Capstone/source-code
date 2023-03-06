import { Text, View, Image, useWindowDimensions } from 'react-native';

// Import components
import Footer from '../../components/Footer';

// Import styles
import * as StyleSheet from '../../components/styles';
let styles = StyleSheet.styles;

// Second Login Screen: "Welcome to BACtracker" text and slogan
const LoginScreen2 = ({ navigation }) => {
    return (
        <View style={styles.centerContainer}>
                <Text style={styles.onboardingHeaderText}>Welcome to BACtracker!</Text>
                <Text style={styles.redBoldText}>We've got your BACk.</Text>
            <View style={[styles.row, {minHeight: (useWindowDimensions().height * 0.25), minWidth: '100%'}]}>
                <Image style={styles.oneThirdContainer} source={require('../../assets/avatars/Curious_Rosie_shadow.png')} resizeMode='contain' />
                <Image style={styles.oneThirdContainer} source={require('../../assets/avatars/Scientist_Rosie_shadow.png')} resizeMode='contain'/>
                <Image style={styles.oneThirdContainer} source={require('../../assets/avatars/Casual_Rosie_shadow.png')} resizeMode='contain'/>
            </View>
            {/* add progress bar (circles) at bottom of screen -> not MVP */}
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('Login3'); }} leftButtonLabel="Back" leftButtonPress={() => { navigation.navigate('Login1'); }} />
        </View>
    );
};

export default LoginScreen2