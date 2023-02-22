// import React in our code
import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    LayoutAnimation,
    ScrollView,
    UIManager,
    TouchableOpacity,
    Platform,
    Image
} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component'
// Import styles
import { styles } from './styles';
// Import json data of topic q and as
import data from '../json/topics.json'
import BACeffects from '../json/bac-levels.json'
// Import icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// import drinkImage from '../assets/images/Standard_Drink_Sizes.png';

const ExpandableComponent = ({ item, onClickFunction }) => {
    // Custom Component for the Expandable List
    const [layoutHeight, setLayoutHeight] = useState(0);

    useEffect(() => {
        if (item.isExpanded) {
            setLayoutHeight(null);

        } else {
            setLayoutHeight(0);
        }
    }, [item.isExpanded]);

    // Change arrow direction based on if it is expanded or not
    const iconName = item.isExpanded ? "chevron-up-outline" : "chevron-down-outline"

    return (
        <View>
            {/*Header of the Expandable List Item*/}
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onClickFunction}
                style={item.isExpanded ? styles.expandedQuestion : styles.topicQuestion}>
                <View style={styles.row}>
                    <Text style={styles.topicQuestionText}>{item.question}</Text>
                    <Ionicons name={iconName} color='#606070' size={16} style={styles.questionIcon} />
                </View>
            </TouchableOpacity>
            <View
                style={{
                    height: layoutHeight,
                    overflow: 'hidden',
                }}>
                {/*Content under the header of the Expandable List Item*/}
                <Text style={styles.topicAnswer}>
                    {item.answer}
                </Text>
            </View>
        </View>
    );
};

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
                <View>
                    <Text style={[styles.topicQuestionText, styles.specialInfoItem]}>Standard Drink Sizes Visualized</Text>
                    <Image
                        source={imageUrl}
                        style={[styles.standardDrinkImg, styles.specialInfoItem]}
                        resizeMode='cover'
                    />
                </View>
            )
        }
    }

    // Show BAC table if the topic is BAC Levels and Effects
    const showTable = () => {
        if (topicData.topicid === "BAC Levels and Effects") {
            const headTable = ['BAC Level', 'Effects'];
            return (
                <View>
                    <Text style={[styles.topicQuestionText, styles.specialInfoItem]}>BAC Levels: Table</Text>
                    <Table borderStyle={{ borderColor: '#606070', borderStyle: 'solid', borderWidth: 1 }} style={styles.specialInfoItem}>
                        <Row data={headTable} style={styles.headStyle} textStyle={{ fontWeight: "600", color: "white" }} widthArr={[100, undefined]} />
                        <Rows data={BACeffects} textStyle={styles.tableText} widthArr={[100, undefined]} />
                    </Table>
                </View>
            )
        }
    }

    // Return page view
    return (
        <View style={styles.centered}>
            <ScrollView>
                {listDataSource.map((item, key) => (
                    <ExpandableComponent
                        key={item.question}
                        onClickFunction={() => {
                            updateLayout(key);
                        }}
                        item={item}
                    />
                ))}

                <View style={styles.container}>
                    {showImage()}
                    {showTable()}
                </View>

            </ScrollView>

        </View>
    )
}

export default InfoTopicPage;