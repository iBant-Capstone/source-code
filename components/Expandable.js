import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import Markdown, { MarkdownIt } from 'react-native-markdown-display';

// Import icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import components
import SuperscriptText from './Superscript';

// Import styles
import { containerStyles } from './styles/containerStyles';
import { imageStyles } from './styles/imageStyles';
import { textStyles } from './styles/textStyles';
import { expandableStyles } from './styles/expandableStyles';

// Creates an expandable component
const Expandable = ({ item, onClickFunction }) => {
    const markdownItInstance = MarkdownIt({ typographer: true });


    // Custom Component for the Expandable List
    const [layoutHeight, setLayoutHeight] = useState(0);
    const Md = (itemText) => {
        return (
            <Markdown style={textStyles.answerText}>
                {itemText.itemText}
            </Markdown>

        );
    };

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
    const hyperlink = (itemText) => {
        return (
            <Hyperlink linkDefault={true} linkStyle={[textStyles.text, textStyles.link]}>
                <Md itemText={itemText} />
            </Hyperlink>
        );
    }

    return (
        <View style={{ width: 327 }}>
            {/*Header of the Expandable List Item*/}
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onClickFunction}
                style={item.isExpanded ? expandableStyles.expanded : expandableStyles.closed}>
                <View style={containerStyles.row}>
                    <Text style={[textStyles.text, textStyles.questionText]}>{item.question}</Text>
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

                <Text style={[textStyles.text, textStyles.answerText.paragraph]}>
                    {item.sources.length == 0 ? "" : <Text style={{ fontSize: 10, lineHeight: 4 }}>Source(s): </Text>}

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