import {
    Text,
    View,
    LayoutAnimation,
    ScrollView,
    UIManager,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { styles } from './styles';
import Title from './Title';
import data from '../json/topics.json'

// import React in our code
import React, { useState, useEffect } from 'react';

const ExpandableComponent = ({ item, onClickFunction }) => {
    //Custom Component for the Expandable List
    const [layoutHeight, setLayoutHeight] = useState(0);

    useEffect(() => {
        if (item.isExpanded) {
            setLayoutHeight(null);
        } else {
            setLayoutHeight(0);
        }
    }, [item.isExpanded]);

    return (
        <View>
            {/*Header of the Expandable List Item*/}
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onClickFunction}
                style={styles.topicQuestion}>
                <Text style={styles.topicQuestionText}>{item.question}</Text>
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

    return (
        <View style={styles.centered}>
            <Title title={route.params.title} />
            <View style={{ flexDirection: 'row', padding: 10 }}>
            </View>
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
            </ScrollView>

        </View>
    )
}

export default InfoTopicPage;