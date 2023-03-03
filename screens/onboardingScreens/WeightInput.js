// Accept user input for Weight -> need to connect with stored Profile information
// Add Skip button (skips to InfoHub page)
// Add Next button (goes to BiologicalSexInput page)
import { Text, View } from 'react-native';

// Import components
import Footer from '../../components/Footer';

// Import styles
import * as StyleSheet from '../../components/styles';
let styles = StyleSheet.styles;

const WeightInput = ({navigation}) => {
    return (
        <View>
            <Text>
                <Text style={styles.onboardingHeaderText}>Select Weight</Text>
                Input your weight here in lbs or kg 
            </Text>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('BiologicalSex');}} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('InformationHub');}}/>
    </View>
        
    );
};

export default WeightInput