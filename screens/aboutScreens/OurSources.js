import { useCallback } from 'react';
import { Text, View, Linking, Alert, ScrollView } from 'react-native';
import { Table, TableWrapper, Cell } from 'react-native-table-component'

// import all sources from json
import sources from '../../json/sources.json'

// Import styles
import * as StyleSheet from '../../components/styles';
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
        <TableWrapper style={{ flexDirection: 'row' }}>
            <Cell data={id} width={35} textStyle={styles.tableId} />
            <Cell data={name} textStyle={styles.link} onPress={handlePress} />
        </TableWrapper>
    );
};

// Page to return
const OurSources = () => {
    return (
        <ScrollView>
            <View style={styles.centered}>
                <Text style={{ marginBottom: 10 }}>Below are a list of our sources used to create this app</Text>
                <Table>
                    {sources.map((source) => {
                        return (
                            <URLLink key={source.id} id={source.id} name={source.name} url={source.url} />)
                    })}
                </Table>
            </View>
        </ScrollView>
    );
};

export default OurSources