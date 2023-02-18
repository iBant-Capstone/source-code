import {Text, View, Button} from 'react-native';
import * as StyleSheet from '../components/styles';
import Title from "../components/Title";

let styles = StyleSheet.styles;

// TODO: add a button to add drinks to an array that can be passed to BACCalc

const AddDrink = ({route, navigation}) => {
    return (
        <View style={styles.centered}>
            <Text>{route.params.title}</Text>
            <Button
                onPress={() => navigation.navigate('BACCalc', { title: 'Add a Drink' })}
                title="Add Drink"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

export default AddDrink