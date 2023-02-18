import {Text, View } from 'react-native';
import * as StyleSheet from '../components/styles';
import Title from "../components/Title";

let styles = StyleSheet.styles;
const headerTitle = 'About Us Page';

const AboutUs = ({ navigation }) => {
    return (
        <View style={styles.centered}>
            <Title title={headerTitle} />
            <Text style={styles.centered}> Learn more about us!</Text>
        </View>
    );
};

export default AboutUs