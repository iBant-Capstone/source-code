// Accept user input for Height -> need to connect with stored Profile information
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

    /*
        // Variable from EditProfilePage that keeps track of what height unit we're using
        const [heightUnitValueChecked, setHeightUnitValueChecked] = useState();

        <View style={[styles.row, {paddingLeft: 15, paddingTop: 15}]}>
            <Text>Add your height:  </Text>

            <Pressable
                style={heightUnitValueChecked === 'ft' ? styles.radioButtonSelected : styles.radioButtonRegular}
                onPress={() => setHeightUnitValueChecked('ft')}
            ><Text>ft</Text></Pressable>
            <Pressable
                style={heightUnitValueChecked === 'cm' ? styles.radioButtonSelected : styles.radioButtonRegular}
                onPress={() => setHeightUnitValueChecked('cm')}
            ><Text>cm</Text></Pressable>
        </View>

        {heightUnitValueChecked === "ft" ?
            <View>
                <View style={styles.row}>
                    <Text style={styles.textInputLabel}>feet</Text>
                    <Text style={styles.textInputLabel}>inches</Text>
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.textInput}
                        value={ftInputValue}
                        onChangeText={setFtInputValue}
                        placeholder={"feet"}
                    />
                    <TextInput
                        style={styles.textInput}
                        value={inInputValue}
                        onChangeText={setInInputValue}
                        placeholder={"inches"}
                    />
                </View>
            </View>
            :
            <View>
                <View style={styles.row}>
                    <Text style={styles.textInputLabel}>cm</Text>
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.textInput}
                        value={cmInputValue}
                        onChangeText={setCmInputValue}
                        placeholder={"cm"}
                    />
                </View>
            </View>
        }
    */
};

export default HeightInput