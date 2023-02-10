import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button } from 'react-native';
import { ScrollView } from 'react-native-web';

const InformationHub = ({navigation}) => {
    return (
        <ScrollView>
        <Button
            title="Go to Jane's profile"
            onPress={() =>
            navigation.navigate('Profile', {name: 'Jane'})
            }
        />
        <Button
            title="Go to BACCalc"
            onPress={() =>
            navigation.navigate('BACCalc')
            }
        />
        </ScrollView>
    );
};

export default InformationHub