import { Text, View } from 'react-native';
import * as StyleSheet from '../../components/styles';

let styles = StyleSheet.styles;
const headerTitle = 'About Us Page';

const HowToUse = ({ navigation }) => {
    return (
        <View style={styles.centered}>
            <Text style={styles.centered}>- [insert icon here] - This leads to our home page, the information hub where you can find general information and common questions surrounding several alcohol consumption topics including drink types and safety measures.
                - [insert icon here] - This leads to the Blood Alcohol Content (BAC) Calculator. Here, you can either insert drinks in real-time or experiment with how consuming different drinks will impact your BAC level. This page will also suggest how you may feel internally and display externally based on your BAC level.
                - [insert icon here] - This leads to the information about you that is used to calculate your BAC. You can change this information if need be! Here you can also find information about the team behind this app, how to use it, and our sources.</Text>
        </View>
    );
};

export default HowToUse