import {Text, View } from 'react-native';
import * as StyleSheet from '../components/styles';
import Title from "../components/Title";

let styles = StyleSheet.styles;
const headerTitle = 'Information Hub';


const InformationHub = () => {
    return (
        <View style={styles.centered}>
            <Title title={headerTitle} />
            <Text style={styles.centered}> This is the Information Hub: Learn about alcohol and its effects on you!</Text>
        </View>
    );
};



export default InformationHub