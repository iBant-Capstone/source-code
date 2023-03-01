// Accept user input for Weight -> need to connect with stored Profile information
// Add Skip button (skips to InfoHub page)
// Add Next button (goes to BiologicalSexInput page)
import { Text, View, Image } from 'react-native';
import * as StyleSheet from '../../components/styles';
import Footer from '../../components/Footer';

let styles = StyleSheet.styles;

const WeightInput = ({navigation}) => {
    return (
        <View>
            <Text>
                Input your weight here in lbs or kg 
            </Text>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('BiologicalSex');}} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('InformationHub');}}/>
    </View>
        
    );
};

export default WeightInput