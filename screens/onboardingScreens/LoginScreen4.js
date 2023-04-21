import { Text, View, Image, ScrollView } from 'react-native';

// Import icons 
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import components
import Footer from '../../components/Footer';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { textStyles } from '../../components/styles/textStyles';
import { imageStyles } from '../../components/styles/imageStyles';

// Fourth Login Screen: Disclaimers
const LoginScreen4 = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={[containerStyles.centerWhiteContainer, {justifyContent: 'space-between'}]}>
                <Image style={imageStyles.medCenterImage} source={require('../../assets/avatars/Scientist_Rosie_shadow.png')} resizeMode='contain' />
                <Text style={[textStyles.text, textStyles.headerText, textStyles.redSemiBoldText]}><Ionicons name='alert-outline' style={{ color: '#CF5260', fontSize: 30 }} />Disclaimers<Ionicons name='alert-outline' style={{ color: '#CF5260', fontSize: 30 }} /></Text>
                <View style={containerStyles.horizontalPadding}>
                    <Text style={[textStyles.redSemiBoldText, textStyles.size16, {marginBottom: "2%"}]}>Data Privacy:</Text>
                    <Text style={[textStyles.text, {marginBottom: "2%"}]}>We want to protect the privacy of your information, so <Text style={textStyles.boldText}>all data is stored locally</Text>. {"\n"}{"\n"}If this app is deleted, your data will be lost.
                        We will only collect information on an as-needed basis!</Text>
                    <Text style={[textStyles.redSemiBoldText, textStyles.size16, {marginBottom: "2%"}]}>Medical Advice:</Text>
                    <Text style={textStyles.text}>The alcohol-focused algorithms used in this application are based on currently available information. This means that they may <Text style={textStyles.boldText}>not</Text> be completely accurate and can change over time.
                        {"\n"}{"\n"}<Text style={textStyles.boldText}>This app is not meant to substitute the advice of a licensed medical professional. Please use this resource with caution!</Text>
                    </Text>
                </View>
                <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('HeightInput'); }} leftButtonLabel="Back" leftButtonPress={() => { navigation.navigate('Login3'); }} />
            </View>
        </ScrollView>
    );
};

export default LoginScreen4