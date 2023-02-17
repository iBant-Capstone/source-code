import {Text, View, Button} from 'react-native';
import * as StyleSheet from '../components/styles';
import Title from "../components/Title";

let styles = StyleSheet.styles;
const headerTitle = 'BAC Calculator';

const BACCalc = () => {
    return (
        <View style={styles.centered}>
            <Title title={headerTitle} />
            <Text style={styles.centered}> This is the BAC Calculator: find out what your BAC is!</Text>
            <Button
                onPress={() => Alert.alert('Simple Button pressed')}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
};


export default BACCalc