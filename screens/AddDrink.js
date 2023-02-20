import {Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StyleSheet from '../components/styles';

let styles = StyleSheet.styles;

// TODO: add a button to add drinks to an array that can be passed to BACCalc

const AddDrink = ({route, navigation}) => {

    const addDrink = async () => {
        const data = {
          name: 'newDrink'
        };
        try {
          await AsyncStorage.setItem(Math.random() * 100 + 'myKey', JSON.stringify(data));
          console.log('Data saved successfully!');
        } catch (error) {
          console.log(error);
        }
    }

    return (
        <View style={styles.centered}>
            <Text>{route.params.title}</Text>
            <Button
                onPress={addDrink}
                title="Add Drink"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => navigation.navigate('BACCalc')}
                title="Back to BACCalc"
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