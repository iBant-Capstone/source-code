import { Text, View } from 'react-native';
import { styles } from './styles';
import Title from './Title';
import Collapsible from 'react-native-collapsible'
import Accordion from 'react-native-collapsible/Accordion';
import data from '../json/topics/alcoholphysicaleffects.json'

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {

  TouchableOpacity,
} from 'react-native';

// import for the animation of Collapse and Expand
import * as Animatable from 'react-native-animatable';


const InfoTopicPage = ({ route }) => {
    const topicData = data.find(object => {
        return object.topicid === route.params.title
    })
    const CONTENT = topicData.qa

    // const AccordionView = () => {
    //     const state = {
    //         activeSections: [],
    //     };

    //     const _renderSectionTitle = (section) => {
    //         return (
    //           <View>
    //             <Text>{section.answer}</Text>
    //           </View>
    //         );
    //       };

    //     const _renderHeader = (section) => {
    //         return (
    //             <View>
    //                 <Text>{section.question}</Text>
    //             </View>
    //         );
    //     };

    //     const _renderContent = (section) => {
    //         return (
    //             <View>
    //                 <Text>{section.answer}</Text>
    //             </View>
    //         );
    //     };

    //     const _updateSections = (activeSections) => {
    //         this.setState({ activeSections });
    //     };

    //     return (
    //         <Accordion
    //             activeSections={[0]}
    //             sections={CONTENT}
    //             renderSectionTitle={_renderSectionTitle(CONTENT)}
    //             renderHeader={_renderHeader(CONTENT)}
    //             renderContent={_renderContent(CONTENT)}
    //             onChange={_updateSections(CONTENT)}
    //             expandMultiple={true}
    //         />
    //     );
    // }

    // Default active selector
    const [activeSections, setActiveSections] = useState([]);
    // Collapsed condition for the single collapsible
    const [collapsed, setCollapsed] = useState(true);

    const toggleExpanded = () => {
        // Toggling the state of single Collapsible
        setCollapsed(!collapsed);
    };

    const setSections = (sections) => {
        // Setting up a active section state
        setActiveSections(
            sections.includes(undefined) ? [] : sections
        );
    };

    const renderHeader = (section, _, isActive) => {
        // Accordion header view
        return (
            <Animatable.View
                duration={400}
                // style={[
                //     styles.header,
                //     isActive ? styles.active : styles.inactive
                // ]}
                transition="backgroundColor">
                <Text 
                // style={styles.headerText}
                >
                    {section.question}
                </Text>
            </Animatable.View>
        );
    };

    const renderContent = (section, _, isActive) => {
        // Accordion Content view
        return (
            <Animatable.View
                duration={400}
                // style={[
                //     styles.content,
                //     isActive ? styles.active : styles.inactive
                // ]}
                transition="backgroundColor">
                <Animatable.Text
                    animation={isActive ? 'bounceIn' : undefined}
                    style={{ textAlign: 'center' }}
                    >
                    {section.answer}
                </Animatable.Text>
            </Animatable.View>
        );
    };

    return (
        <View style={styles.centered}>
            <Title title={route.params.title} />
            <Collapsible collapsed={true}>
                {/* <AccordionView /> */}
                <Accordion
                    activeSections={activeSections}
                    // For any default active section
                    sections={CONTENT}
                    // Title and content of accordion
                    touchableComponent={TouchableOpacity}
                    // Which type of touchable component you want
                    // It can be the following Touchables
                    // TouchableHighlight, TouchableNativeFeedback
                    // TouchableOpacity , TouchableWithoutFeedback
                    expandMultiple={true}
                    // If you want to expand multiple at a time
                    renderHeader={renderHeader}
                    // Header Component(View) to render
                    renderContent={renderContent}
                    // Content Component(View) to render
                    onChange={setSections}
                // Setting the state of active sections
                />
            </Collapsible>
            {/* <Text>On page {JSON.stringify(CONTENT)}</Text> */}
        </View>
    )
}






export default InfoTopicPage;