import { Text, View, Image } from 'react-native';
import * as StyleSheet from '../../components/styles';

let styles = StyleSheet.styles;

const OurMission = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image style={styles.rosieLeftImage} source={require('../../assets/avatars/Casual_Rosie_shadow.png')} resizeMode='contain' />
                <Text style={styles.rosieSpeechRight}>Our goal is to increase the user's knowledge and understanding of safe alcohol consumption practices so you can be as informed as possible!</Text>
            </View>
            <Text style={styles.centered}>This is an application built by young adults, for young adults! Drinking can be intimidating especially if you don't know how it affects you!</Text>
            <Text style={styles.aboutSubtitle}>About the Creators:</Text>
            <Text style={styles.centered}>We are a group of four undergraduate students at the University of Washington Information School. For our Capstone project, we decided to create a toolkit to help our fellow students with safe alcohol consumption practices.</Text>
            <Text style={styles.aboutSubtitle}>Our Findings and Goals:</Text>
            <Text style={styles.centered}>Overuse of alcohol and abuse that leads to unsafe drinking can be both dangerous in the moment and create unhealthy habits among young adults. Lack of alcohol knowledge, social pressures, and underdeveloped brains can lead to poor decision making contributing to these results. The information is out there. This generation needs an easy way to access it.</Text>
            <Text style={styles.centered}>Through this, we hope to fill the information gap and address dangerous misinformation regarding alcohol consumption and safety practices. Many aspects and information regarding alcohol consumption are available online, but difficult for young adults to access and remember. As a generation that has grown with technology and smartphones, through the creation of our mobile application, we hope to cater a solution to our specific audience.</Text>
        </View>
    );
};

export default OurMission