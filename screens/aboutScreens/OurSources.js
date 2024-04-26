import { useCallback } from 'react';
import { Text, View, Linking, Alert, ScrollView, Image, ImageBackground } from 'react-native';
import { Table, TableWrapper, Cell } from 'react-native-table-component'

// import all sources from json
import sources from '../../json/sources.json'

// import components
import TitleText from '../../components/Title';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { tableStyles } from '../../components/styles/tableStyles';
import { textStyles } from '../../components/styles/textStyles';
import { imageStyles } from '../../components/styles/imageStyles';

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
        <View>
            <TableWrapper style={[{ flexDirection: 'row' }]}>
                <Cell data={id} width={35} textStyle={tableStyles.id} />
                <Cell data={name} textStyle={[textStyles.text, textStyles.link]} onPress={handlePress} />
            </TableWrapper>
        </View>
    );
};

// Page to return
const OurSources = () => {
    return (
      <View style={[containerStyles.centerWhiteContainer]}>
        <ScrollView style={containerStyles.phoneScreen}>
          <ImageBackground
            source={require("../../assets/images/Frame.png")}
            style={{ width: "375", height: "163" }}
            resizeMode="cover"
          >
            <View style={[containerStyles.row, containerStyles.titleContainer]}>
              <TitleText name={"Our Sources"} />
              <Image
                style={imageStyles.rightImage}
                source={require("../../assets/avatars/Scientist_Rosie.png")}
                resizeMode="contain"
              />
            </View>
          </ImageBackground>
          <View style={containerStyles.centerContainer}>
            <Text style={{ marginBottom: 10 }}>
              Below is the list of sources we used to create this app:
            </Text>
            <Table>
              {sources.map((source) => {
                return (
                  <URLLink
                    key={source.id}
                    id={source.id}
                    name={source.name}
                    url={source.url}
                  />
                );
              })}
            </Table>
          </View>
        </ScrollView>
      </View>
    );
};

export default OurSources