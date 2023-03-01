import { Text, View, Image } from 'react-native';
import * as StyleSheet from '../../components/styles';
import Footer from '../../components/Footer';

let styles = StyleSheet.styles;

// First Login Screen: just BACtracker logo
const LoginScreen1 = ({navigation}) => {
    return (
        <View style={styles.centerContainer}>
            <View style={styles.row}>
                <Image style={styles.largeLogoWithText} source={require('../../assets/icons/BACtracker_logo.png')} resizeMode='contain' />
             </View>    
             <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('Login2');}}/>        
        </View>
    );
};

export default LoginScreen1