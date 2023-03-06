// Accept user input for Height -> need to connect with stored Profile information
// Add Skip button (skips to InfoHub page)
// Add Next button (goes to WeightInput page)
import { Text, View } from 'react-native';

// Import components used
import Footer from '../../components/Footer';

// Import styles
import * as StyleSheet from '../../components/styles';
let styles = StyleSheet.styles;

// Page to return
const HeightInput = ({ navigation }) => {
    return (
        <View style={styles.centerContainer}>
            <Text style={styles.onboardingHeaderText}>Select Height</Text>
            <Text>Input your height here in cm or ft/inches </Text>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('WeightInput'); }} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('Welcome'); }} />
        </View>

    );
};

export default HeightInput