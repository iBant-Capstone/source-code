// Accept user input for Biological Sex -> need to connect with stored Profile information
// Include disclaimer
// Add Skip button (skips to InfoHub page)
// Add Next button (goes to InfoHub page)
import { Text, View, Image } from 'react-native';
import * as StyleSheet from '../../components/styles';
import Footer from '../../components/Footer';

let styles = StyleSheet.styles;

const BiologicalSex = ({navigation}) => {
    return (
        <View>
            <Text>
                Input your biological sex here 
                * disclaimer this uses male-bodied and female-bodied as shortcuts for liver size - not fully accurate * 
            </Text>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('InformationHub');}} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('InformationHub');}}/>
    </View>
        
    );
};

export default BiologicalSex