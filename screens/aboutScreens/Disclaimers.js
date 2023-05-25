import { Text, View, Image, ScrollView } from 'react-native';

// Import components
import TitleText from '../../components/Title';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { imageStyles } from '../../components/styles/imageStyles';
import { textStyles } from '../../components/styles/textStyles';

const Disclaimers = () => {
    return (
        <ScrollView style={[containerStyles.phoneScreen, { backgroundColor: '#FFF' }]}>
            <View>
                <View style={[containerStyles.row, containerStyles.titleContainer]}>
                    <TitleText name={"Notes & disclaimers"} />
                    <Image style={imageStyles.rightImage} source={require('../../assets/avatars/Scientist_Rosie.png')} resizeMode='contain' />
                </View>
                <View style={[containerStyles.centerWhiteContainer, { marginTop: 10 }]}>
                    <Text style={[textStyles.redSemiBoldText, textStyles.size16]}>Data Privacy:</Text>
                    <Text style={containerStyles.centerContainer}>We want to protect the privacy of your information, so <Text style={textStyles.boldText}>all data is stored locally</Text>. {"\n"}{"\n"}If this app is deleted, your data will be lost.
                        We will only collect information on an as-needed basis!</Text>
                    <Text style={[textStyles.redSemiBoldText, textStyles.size16]}>Medical advice:</Text>
                    <Text style={containerStyles.centerContainer}>The alcohol-focused algorithms used in this application are based on currently available information. This means that they may <Text style={textStyles.boldText}>not</Text> be completely accurate and can change over time. {"\n"}{"\n"}
                    </Text>
                    <View style={containerStyles.horizontalPadding}>
                        <View style={{ backgroundColor: "#CF5260", opacity: 0.75, borderRadius: 5, padding: 8 }}>
                            <Text style={[textStyles.whiteText, containerStyles.alignTextLeft]}>This app is not meant to substitute the advice of a licensed medical professional. <Text style={textStyles.boldText}>Please use this resource with caution!</Text></Text>
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
};

export default Disclaimers;