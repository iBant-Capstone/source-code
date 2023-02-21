import { Text, View } from 'react-native';
import * as StyleSheet from '../../components/styles';

let styles = StyleSheet.styles;
const headerTitle = 'About Us Page';

const OurMission = ({ navigation }) => {
    return (
        <View style={styles.centered}>
            <Text style={styles.centered}>Our goal is to increase the user's knowledge and understanding of safe alcohol consumption practices so you can be as informed as possible!</Text>
            <Text>This is an application built by young adults, for young adults! Drinking can be intimidating especially if you don't know how it affects you!</Text>
            <Text>We are a group of four undergraduate students at the University of Washington Information School. For our Capstone project, we decided to create a toolkit to help our fellow students with safe alcohol consumption practices.</Text>
            <Text>Overuse of alcohol and abuse that leads to unsafe drinking can be both dangerous in the moment and create unhealthy habits among young adults. Lack of alcohol knowledge, social pressures, and underdeveloped brains can lead to poor decision making contributing to these results. The information is out there. This generation needs an easy way to access it.</Text>
            <Text>Through this, we hope to fill the information gap and address dangerous misinformation regarding alcohol consumption and safety practices. Many aspects and information regarding alcohol consumption are available online, but difficult for young adults to access and remember. As a generation that has grown with technology and smartphones, through the creation of our mobile application, we hope to cater a solution to our specific audience.</Text>
        </View>
    );
};

export default OurMission