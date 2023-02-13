import {Text, View } from 'react-native';
import * as StyleSheet from '../components/styles';
import Title from "../components/Title";

let styles = StyleSheet.styles;
const headerTitle = 'BAC Calculator';

const BACCalc = () => {
    return (
        <View style={styles.centered}>
            <Title title={headerTitle} />
            <Text style={styles.centered}> This is the BAC Calculator: find out what your BAC is!</Text>
        </View>
    );
};


export default BACCalc