import {Button, Text, View } from 'react-native';
import * as StyleSheet from '../components/styles';
import Title from "../components/Title";
import Popup from '../components/AlcoholPopUp';

let styles = StyleSheet.styles;
const headerTitle = 'Information Hub';


const InformationHub = ({ navigation }) => {
    return (
        <View style={styles.centered}>
            <Title title={headerTitle} />
            <Text style={styles.centered}> This is the Information Hub: Learn about alcohol and its effects on you!</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
};



export default InformationHub