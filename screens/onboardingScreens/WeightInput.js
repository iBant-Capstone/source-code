// Accept user input for Weight -> need to connect with stored Profile information
import { Text, View } from 'react-native';

// Import components
import Footer from '../../components/Footer';

// Import styles
import * as StyleSheet from '../../components/styles';
let styles = StyleSheet.styles;

const WeightInput = ({ navigation }) => {
    return (
        <View style={styles.centerContainer}>
            <Text style={styles.onboardingHeaderText}>Select Weight</Text>
            <Text>Input your weight here in lbs or kg</Text>
            <Footer rightButtonLabel="Next" rightButtonPress={() => { navigation.navigate('BiologicalSex'); }} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('Welcome'); }} />
        </View>

    );

    /*
        // Variable from EditProfilePage that keeps track of what weight unit we're using
        const [weightUnitValueChecked, setWeightUnitValueChecked] = useState();

        <View>
            <View style={[styles.row, {paddingLeft: 15, paddingTop: 15}]}>
            <Text>Add your weight:  </Text>
            <Pressable
                style={weightUnitValueChecked === 'lbs' ? styles.radioButtonSelected : styles.radioButtonRegular}
                onPress={() => setWeightUnitValueChecked('lbs')}
            >
                <Text>lbs</Text></Pressable>
            <Pressable
                style={weightUnitValueChecked === 'kg' ? styles.radioButtonSelected : styles.radioButtonRegular}
                onPress={() => setWeightUnitValueChecked('kg')}
            ><Text>kg</Text></Pressable>
        </View>
        <View>
            <Text style={styles.textInputLabel}>{weightUnitValueChecked}</Text>
            <TextInput
                style={styles.textInput}
                value={weightInputValue}
                onChangeText={setWeightInputValue}
                placeholder={"weight (" + weightUnitValueChecked + ")"}
            />

        </View>
    */
};

export default WeightInput