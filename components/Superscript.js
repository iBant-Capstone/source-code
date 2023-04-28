//import React in our code
import React, { useCallback } from 'react';
import { Text, Linking } from 'react-native';

// import sources
import sources from '../json/sources.json'

const SuperscriptText = ({ sourceId }) => {
    let url = sources[sourceId - 1].url
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
        <Text style={{ fontSize: 10, lineHeight: 4, textDecorationLine: 'underline' }} onPress={handlePress}>{sourceId} </Text>
    );
};

export default SuperscriptText;