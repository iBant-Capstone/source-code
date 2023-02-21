import { Text, View, Pressable } from 'react-native';
import * as StyleSheet from '../components/styles';
import Title from "../components/Title";

let styles = StyleSheet.styles;
const headerTitle = 'Profile Page';


const Profile = (props) => {
    return (
        <View style={styles.centered}>
            <Title title={headerTitle} />
            <Text style={styles.centered}> This is the Profile: edit your information here!</Text>
            <Pressable
            style={styles.aboutButton}
            onPress={() => props.navigation.navigate('HowToUse')}
            >
                <Text style={styles.infoHubButtonText}>How to Use</Text>
            </Pressable>
            <Pressable
            style={styles.aboutButton}
            onPress={() => props.navigation.navigate('OurMission')}
            >
                <Text style={styles.infoHubButtonText}>Our Mission</Text>
            </Pressable>
            <Pressable
            style={styles.aboutButton}
            onPress={() => props.navigation.navigate('OurSources')}
            >
                <Text style={styles.infoHubButtonText}>Our Sources</Text>
            </Pressable>
        </View>
    );
};



export default Profile