// Accept user input for Biological Sex -> need to connect with stored Profile information
// Include disclaimer
// Add Skip button (skips to InfoHub page)
// Add Next button (goes to InfoHub page)
import { Text, View } from 'react-native';

// Import components used
import Footer from '../../components/Footer';

// Import styles
import * as StyleSheet from '../../components/styles';
let styles = StyleSheet.styles;

// Page to return
const BiologicalSex = ({ navigation }) => {
    return (
        <View>
            <Text>
                <Text style={styles.onboardingHeaderText}>Select Biological Sex</Text>
                Input your biological sex here
                
                <Text style={styles.redBoldText}>Please note:</Text>
                We are using a BAC algorithm that uses male-bodied and female-bodied individuals as a shortcut for defining body mass, fat distribution, and enzymes. Current research on BAC calculation for trans or intersex individuals is greatly lacking.
            </Text>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('InformationHub'); }} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('InformationHub'); }} />
        </View>

    );
};

export default BiologicalSex