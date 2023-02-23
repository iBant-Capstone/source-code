import { useCallback } from 'react';
import { Text, View, Linking, Alert } from 'react-native';
import * as StyleSheet from '../../components/styles';

// import all sources from json
import sources from '../../json/sources.json'

let styles = StyleSheet.styles;

// Creates a clickable link that leads to given url
const URLLink = ({ id, name, url }) => {
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            Alert.alert(`Unable to open URL: ${url}`);
        }
    }, [url]);


    return (
        <View style={styles.leftContainer}>
            <Text style={{marginVertical: 5}}>
                <Text style={styles.redBoldText}>{id}: </Text><Text onPress={handlePress} style={styles.link}>{name}</Text>
            </Text>
        </View>
    );
};

// Page to return
const OurSources = () => {
    return (
        <View style={{backgroundColor: '#fff'}}>
            <Text style={styles.centered}>Below are a list of our sources used to create this app</Text>
            {sources.map((source) => {
                return (
                    <URLLink key={source.id} id={source.id} name={source.name} url={source.url} />)
            })}
        </View>
    );
};

export default OurSources