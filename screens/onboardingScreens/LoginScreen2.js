import { Text, View, Image } from 'react-native';
import * as StyleSheet from '../../components/styles';

let styles = StyleSheet.styles;

// Second Login Screen: "Welcome to BACtracker" text and slogan
const LoginScreen2 = () => {
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <View style={styles.row}>
                <Image style={styles.rosieLeftImage} source={require('../../assets/avatars/Curious_Rosie_shadow.png')} resizeMode='contain' />
                {/* add additional Rosies gathered at top of screen */}
            </View>
            <View style={styles.centerContainer}>
                <View style={styles.row}>
                    <Text>Welcome to BACtracker!</Text>
                    <Text style={styles.redBoldText}>We've got your BACk.</Text>                   
                </View>               
            </View>
            {/* add Next button */}
            {/* add progress bar (circles) at bottom of screen -> not MVP */}
        </View>
    );
};

export default LoginScreen2