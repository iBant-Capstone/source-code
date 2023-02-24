import { Text, View, Pressable } from 'react-native';
import * as StyleSheet from '../components/styles';
import { Image } from 'react-native';

let styles = StyleSheet.styles;

const Profile = (props) => {
    return (
        <View>
            <View style={styles.row}>
                <Image style={styles.rosieLeftImage} source={require('../assets/avatars/Curious_Rosie_shadow.png')} resizeMode='contain' />
                <Text style={styles.rosieSpeechRight}>Edit your profile information or learn more about BACtracker!</Text>
            </View>

            <View style={styles.centered}>
                <Pressable
                    style={styles.aboutButton}
                    onPress={() => props.navigation.navigate('HowToUse')}
                >
                    <Text style={styles.mainRedButtonText}>How to Use</Text>
                </Pressable>
                <Pressable
                    style={styles.aboutButton}
                    onPress={() => props.navigation.navigate('OurMission')}
                >
                    <Text style={styles.mainRedButtonText}>Our Mission</Text>
                </Pressable>
                <Pressable
                    style={styles.aboutButton}
                    onPress={() => props.navigation.navigate('OurSources')}
                >
                    <Text style={styles.mainRedButtonText}>Our Sources</Text>
                </Pressable>
            </View>
        </View>
    );
};



export default Profile