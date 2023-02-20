import {Text, View, Button, AsyncStorage} from 'react-native';
import * as StyleSheet from '../components/styles';

let styles = StyleSheet.styles;

// TODO: add a button to add drinks to an array that can be passed to BACCalc

const AddDrink = ({route, navigation}) => {
    return (
        <View style={styles.centered}>
            <Text>{route.params.title}</Text>
            <Button
                onPress={() => navigation.navigate('BACCalc', { title: 'Add a Drink', drinks: route.params.drinks.push("Another Drink") })}
                title="Add Drink"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            {
                route.params.drinks.map((drink, index) => (
                    <Text key={index}>{drink}</Text>
                ))
            }
        </View>
    );
}

export default AddDrink