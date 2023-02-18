import {Button, Text, View } from 'react-native';
import * as StyleSheet from '../components/styles';
import Title from "../components/Title";
import Popup from '../components/AlcoholPopUp';
import InfoHubPage from '../components/InfoHubPage';

let styles = StyleSheet.styles;
const headerTitle = 'Information Hub';


const InformationHub = ({ navigation }) => {
    return (
        <View style={styles.centered}>
            <Title title={headerTitle} />
            <Text style={styles.centered}> This is the Information Hub: Learn about alcohol and its effects on you!</Text>
            <Button
                title="Go to Page 1"
                onPress={() => navigation.navigate(InfoHubPage,{title: 'page 1'})}
            />
        </View>
    );
};



export default InformationHub