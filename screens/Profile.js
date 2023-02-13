import {Text, View } from 'react-native';
import * as StyleSheet from '../components/styles';
import Title from "../components/Title";

let styles = StyleSheet.styles;
const headerTitle = 'Profile Page';


const Profile = () => {
    return (
        <View style={styles.centered}>
            <Title title={headerTitle} />
            <Text style={styles.centered}> This is the Profile: edit your information here!</Text>
        </View>
    );
};



export default Profile