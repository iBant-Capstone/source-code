import { Text, View, Image } from 'react-native';
import * as StyleSheet from '../../components/styles';

let styles = StyleSheet.styles;

const LoginScreen1 = () => {
    return (
        // <View style={styles.centerContainer}>
        //     <View style={styles.row}>
                <Image style={styles.largeLogo} source={require('../../assets/icons/BACtracker_logo.png')} resizeMode='contain' />
        //     </View>            
        // </View>
    );
};

export default LoginScreen1