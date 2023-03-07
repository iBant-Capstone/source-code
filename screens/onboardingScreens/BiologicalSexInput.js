// Accept user input for Biological Sex -> need to connect with stored Profile information
import { Text, View } from 'react-native';

// Import components used
import Footer from '../../components/Footer';

// Import styles
import * as StyleSheet from '../../components/styles';
let styles = StyleSheet.styles;

// Page to return
const BiologicalSex = ({ navigation }) => {
    // navigation.dispatch( StackActions.push('Profile') );
    return (
        <View style={styles.centerContainer}>
            <Text style={styles.onboardingHeaderText}>Select Biological Sex</Text>
            <Text>Input your biological sex here</Text>

            <View style={{paddingHorizontal: 15}}>
                <Text style={styles.redBoldText}>Please note:</Text>
                <Text>We are using a Blood Alcohol Concentration algorithm that uses male-bodied and female-bodied individuals as a shortcut for defining body mass, fat distribution, and enzymes. Current research on BAC calculation for trans or intersex individuals is greatly lacking.
                </Text>
            </View>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('Welcome'); }} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('Welcome'); }} />
        </View>

    );

    /*
        // Variable from EditProfilePage that keeps track of what sex value is selected
        const [sexValueChecked, setSexValueChecked] = useState('');

        <View style={[{paddingLeft: 15, paddingTop: 15}]}>
            <View style={styles.row}>
                <Text>Chosen Biological Sex: {sexValueChecked}</Text>
            </View>

            <View style={[styles.row, {justifyContent: 'center', paddingVertical: 15}]}>
                <Pressable
                    style={sexValueChecked === 'female' ? styles.radioButtonSelected : styles.radioButtonRegular}
                    onPress={() => setSexValueChecked('female')}
                ><Text>Female</Text></Pressable>
                <Pressable
                    style={sexValueChecked === 'male' ? styles.radioButtonSelected : styles.radioButtonRegular}
                    onPress={() => setSexValueChecked('male')}
                ><Text>Male</Text></Pressable>
            </View>
        </View>
    */
};

export default BiologicalSex