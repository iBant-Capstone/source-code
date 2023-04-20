import React, { useState } from 'react';
import { Text, View, LayoutAnimation, ScrollView, UIManager, Platform, Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component'

// Import icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import json data of topic q and as
import data from '../json/topics.json'
import BACeffects from '../json/bac-levels.json'

// Import components
import TitleText from './Title';
import Expandable from './Expandable';

// Import styles
import { containerStyles } from './styles/containerStyles';
import { imageStyles } from './styles/imageStyles';
import { textStyles } from './styles/textStyles';
import { tableStyles } from './styles/tableStyles';

// Page to export 
const InfoTopicPage = ({ route }) => {
    // Get all question and answer of topic 
    const topicData = data.find(object => {
        return object.topicid === route.params.title
    })
    const CONTENT = topicData.qa

    const [listDataSource, setListDataSource] = useState(CONTENT);

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    // To add animation and expanded parameter
    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        // Allow multiple select
        array[index]['isExpanded'] = !array[index]['isExpanded'];
        setListDataSource(array);
    };

    // Show standard drink sizes image if the topic is Standard Drink Sizes
    const showImage = () => {
        if (topicData.topicid === "Standard Drink Sizes") {
            // Use require() to fetch image
            const imageUrl = require('../assets/images/Standard_Drink_Sizes.png')
            // Return View component with Text and Image
            return (
                <ScrollView>
                    <View style={[containerStyles.row, containerStyles.specialInfoItem]}>
                        <Text style={[textStyles.text, textStyles.questionText]}>Standard Drink Sizes Visualized</Text>
                    </View>
                    <Image
                        source={imageUrl}
                        style={imageStyles.standardDrinksImage}
                        resizeMode='cover'
                    />
                </ScrollView>
            )
        }
    }

    // Show BAC table if the topic is BAC Levels and Effects
    const showTable = () => {
        if (topicData.topicid === "BAC Levels and Effects") {
            const headTable = ['BAC Level', 'Effects'];
            return (
                <View>
                    <Text style={[textStyles.text, textStyles.questionText, containerStyles.specialInfoItem]}>BAC Levels: Table</Text>
                    <Table borderStyle={tableStyles.border} style={containerStyles.specialInfoItem}>
                        <Row data={headTable} style={tableStyles.head} textStyle={tableStyles.headText} widthArr={[100, undefined]} />
                        <Rows data={BACeffects} textStyle={tableStyles.text} widthArr={[100, undefined]} />
                    </Table>
                </View>
            )
        }
    }

    // Return page view
    return (
        <ScrollView>
            <View style={[containerStyles.row, containerStyles.titleContainer]}>
                <TitleText name={route.params.title} />
            </View>
            <View style={containerStyles.centerContainer}>
                {listDataSource.map((item, key) => (
                    <Expandable
                        key={item.question}
                        onClickFunction={() => {
                            updateLayout(key);
                        }}
                        item={item}
                    />
                ))}
                <View style={containerStyles.centerWhiteContainer}>
                    {showImage()}
                    {showTable()}
                </View>
            </View>
        </ScrollView>
    )
}

export default InfoTopicPage;