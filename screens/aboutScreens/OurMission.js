import { Text, View, Image, ScrollView } from 'react-native';

// import components
import TitleText from '../../components/Title';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { imageStyles } from '../../components/styles/imageStyles';
import { textStyles } from '../../components/styles/textStyles';

// Create and return page that displays mission and about team
const OurMission = () => {
    return (
        <ScrollView>
            <View style={[containerStyles.row, containerStyles.titleContainer]}>
                <TitleText name={"Our Mission"} />
                <Image style={imageStyles.rightImage} source={require('../../assets/avatars/Casual_Rosie.png')} resizeMode='contain' />
            </View>
            <View style={[containerStyles.centerWhiteContainer, { justifyContent: 'flex-start' }]}>
                <Text style={containerStyles.centerContainer}>Our goal is to increase the user's knowledge and understanding of safe alcohol consumption practices so you can be as informed as possible!</Text>
                <Text style={containerStyles.centerContainer}>This is an application built by young adults, for young adults! Drinking can be intimidating especially if you don't know how it affects you!</Text>
                <Text style={[textStyles.redSemiBoldText, textStyles.size16]}>About the Creators:</Text>
                <Text style={containerStyles.centerContainer}>We are a group of four undergraduate students at the University of Washington Information School. For our Capstone project, we decided to create a toolkit to help our fellow students with safe alcohol consumption practices.</Text>
                <View style={[containerStyles.row, { width: '100%', height: '125px' }]}>
                    <Image style={containerStyles.fourColumnContainer} source={require('../../assets/avatars/iBant/Melina avatar.png')} />
                    <Image style={containerStyles.fourColumnContainer} source={require('../../assets/avatars/iBant/Emiri avatar.png')} />
                    <Image style={containerStyles.fourColumnContainer} source={require('../../assets/avatars/iBant/Roshni avatar.png')} />
                    <Image style={containerStyles.fourColumnContainer} source={require('../../assets/avatars/iBant/Gisele avatar.png')} />
                </View>
                <Text style={[textStyles.redSemiBoldText, textStyles.size16]}>Our Findings and Goals:</Text>
                <Text style={containerStyles.centerContainer}>Overuse of alcohol and abuse that leads to unsafe drinking can be both dangerous in the moment and create unhealthy habits among young adults. Lack of alcohol knowledge, social pressures, and underdeveloped brains can lead to poor decision making contributing to these results. The information is out there. This generation needs an easy way to access it.</Text>
                <Text style={containerStyles.centerContainer}>Through this, we hope to fill the information gap and address dangerous misinformation regarding alcohol consumption and safety practices. Many aspects and information regarding alcohol consumption are available online, but difficult for young adults to access and remember. As a generation that has grown with technology and smartphones, through the creation of our mobile application, we hope to cater a solution to our specific audience.</Text>
            </View>
        </ScrollView>
    );
};

export default OurMission