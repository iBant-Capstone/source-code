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
// Import styles
import { styles } from './styles';
// Import json data of topic q and as
import data from '../json/topics.json'
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

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        // Allow multiple select
        array[index]['isExpanded'] = !array[index]['isExpanded'];

        setListDataSource(array);
    };

    const showImage = () => {
        if (topicData.topicid === "Standard Drink Sizes") {
            const imageUrl = require('../assets/images/Standard_Drink_Sizes.png')
            return (
                <View style={styles.container}>
                    <Text style={styles.topicQuestionText}>Standard Drink Sizes Table</Text>
                    <Image
                        source={imageUrl}
                        style={styles.standardDrinkImg}
                        resizeMode='cover'
                    />
                </View>
            )
        }
    }

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
                </View>

            </ScrollView>

        </View>
    )
}

export default InfoTopicPage;