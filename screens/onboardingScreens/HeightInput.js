// Accept user input for Height -> need to connect with stored Profile information
// Add Skip button (skips to InfoHub page)
// Add Next button (goes to WeightInput page)
import { Text, View, Image } from 'react-native';
import * as StyleSheet from '../../components/styles';
import Footer from '../../components/Footer';

let styles = StyleSheet.styles;

const HeightInput = ({navigation}) => {
    return (
        <View>
            <Text>
                <Text style={styles.onboardingHeaderText}>Select Height</Text>
                Input your height here in cm or ft/inches 
            </Text>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('WeightInput');}} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('InformationHub');}}/>
    </View>
        
    );
};

export default HeightInput