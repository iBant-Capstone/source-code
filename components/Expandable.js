import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity,  FlatList } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

// Import icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import components
import SuperscriptText from './Superscript';

// Import styles
import { styles } from './styles';
import { containerStyles } from './styles/containerStyles';
import { imageStyles } from './styles/imageStyles';

// Creates an expandable component
const Expandable = ({ item, onClickFunction }) => {
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

    let keyCount = 1;

    // Function to detect and create clickable hyperlinks in topic answers
    // NEED TO ADD SOME FORMATTING
    const hyperlink = (itemText) => {
        return ( // linkStyle={{color: '#CF5361', fontSize: 14}}
            <Hyperlink linkDefault={true} linkStyle={styles.link}>
                <Text style={styles.topicAnswer}>{itemText}</Text>
            </Hyperlink>
        );
    }

    return (
        <View>
            {/*Header of the Expandable List Item*/}
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onClickFunction}
                style={item.isExpanded ? styles.expandedQuestion : styles.topicQuestion}>
                <View style={containerStyles.row}>
                    <Text style={styles.topicQuestionText}>{item.question}</Text>
                    <Ionicons name={iconName} style={imageStyles.dropdownIcon} />
                </View>
            </TouchableOpacity>
            <View
                style={{
                    height: layoutHeight,
                    overflow: 'hidden',
                }}>
                {/*Content under the header of the Expandable List Item*/}
                <FlatList data={item.answerArr} renderItem={({ item }) => hyperlink(item.key)}>
                </FlatList>

                {/* TO-DO: add conditioning so superscripts only appear if item.sources is not empty */}
                <Text style={styles.topicAnswer}>
                    <Text style={{ fontSize: 8, lineHeight: 4 }}>Source(s): </Text>
                    {item.sources.map((source) => {
                        keyCount++;
                        return (
                            <SuperscriptText sourceId={source} key={keyCount} />
                        )
                    })}
                </Text>
            </View>
        </View>
    );
};

export default Expandable;