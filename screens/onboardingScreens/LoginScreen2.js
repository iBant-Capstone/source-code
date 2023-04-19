import { Text, View, Image, useWindowDimensions } from 'react-native';

// Import components
import Footer from '../../components/Footer';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { textStyles } from '../../components/styles/textStyles';

// Second Login Screen: "Welcome to BACtracker" text and slogan
const LoginScreen2 = ({ navigation }) => {
    return (
        <View style={containerStyles.centerWhiteContainer}>
            <Text style={[textStyles.text, textStyles.headerText]}>Welcome to BACtracker!</Text>
            <Text style={textStyles.redSemiBoldText}>We've got your BACk.</Text>
            <View style={[containerStyles.row, { minHeight: (useWindowDimensions().height * 0.25), minWidth: '100%' }]}>
                <Image style={containerStyles.threeColumnContainer} source={require('../../assets/avatars/Curious_Rosie_shadow.png')} resizeMode='contain' />
                <Image style={containerStyles.threeColumnContainer} source={require('../../assets/avatars/Scientist_Rosie_shadow.png')} resizeMode='contain' />
                <Image style={containerStyles.threeColumnContainer} source={require('../../assets/avatars/Casual_Rosie_shadow.png')} resizeMode='contain' />
            </View>
            {/* add progress bar (circles) at bottom of screen -> not MVP */}
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('Login3'); }} />
        </View>
    );
};

export default LoginScreen2