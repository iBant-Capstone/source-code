import { Text, View, Image, ScrollView, Pressable, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';

// Import icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import components
import TitleText from '../../components/Title';

// Import styles
import { containerStyles } from '../../components/styles/containerStyles';
import { buttonStyles } from '../../components/styles/buttonStyles';
import { imageStyles } from '../../components/styles/imageStyles';
import { textStyles } from '../../components/styles/textStyles';

// Create a how to use page with informaiton on how the different nav bar icons leads to different pages
const HowToUse = ({ navigation }) => {
    const route = useRoute();

    return (
        <View  style={[
          containerStyles.centerWhiteContainer,
          containerStyles.phoneScreen,
        ]}
      >
      <ScrollView style={{ minWidth: "100%"}}>
        <ImageBackground
        source={require("../../assets/images/Frame.png")}
       style={{ width: "375", height: "163" }}
        resizeMode='cover'
        >
            <View style={[containerStyles.row]}>
                <TitleText name={"How to Use"} ></TitleText>
                <Image
                style={imageStyles.rightImage}
                source={require("../../assets/avatars/Curious_Rosie.png")}
                resizeMode="contain"
                />
            </View>
        </ImageBackground>

          <View style={[containerStyles.centerWhiteContainer]}>
            <Text style={[textStyles.text, { marginVertical: 15 }]}>
              Wondering how to use the app? See below!
            </Text>
            <View style={containerStyles.row}>
              <Pressable
                onPress={() => navigation.navigate("InformationHub")}
                style={containerStyles.howToIconContainer}
              >
                <Ionicons
                  name={"ios-book-outline"}
                  style={imageStyles.howToIcon}
                />
              </Pressable>
              <Text style={[textStyles.text, textStyles.iconExplanationText]}>
                This leads to our home page, the{" "}
                <Text style={textStyles.redSemiBoldText}>Information Hub</Text>,
                where you can find easy-to-access information about alcohol and
                answers to commonly asked questions about drinking and safety
                measures.
              </Text>
            </View>
            <View style={containerStyles.row}>
              <Pressable
                onPress={() => navigation.navigate("BAC Calc")}
                style={containerStyles.howToIconContainer}
              >
                <Ionicons
                  name={"ios-calculator-outline"}
                  style={imageStyles.howToIcon}
                />
              </Pressable>
              <Text style={[textStyles.text, textStyles.iconExplanationText]}>
                This leads to the{" "}
                <Text style={textStyles.redSemiBoldText}>
                  Blood Alcohol Content (BAC) Calculator
                </Text>
                , which is personalized based on your inputted information.
                Here, you can either insert drinks in real-time or experiment
                with how consuming different drinks will impact your BAC level.
                This page also provides indicators of how you will feel at
                different BAC levels and offers safety resources.{" "}
              </Text>
            </View>
            <View style={containerStyles.row}>
              <Pressable
                onPress={() => navigation.navigate("Profile")}
                style={containerStyles.howToIconContainer}
              >
                <Ionicons
                  name={"ios-person-outline"}
                  style={imageStyles.howToIcon}
                />
              </Pressable>
              <Text style={[textStyles.text, textStyles.iconExplanationText]}>
                This leads to your{" "}
                <Text style={textStyles.redSemiBoldText}>
                  profile information
                </Text>
                , which is used to calculate your BAC. You can edit this
                information as needed. In this page, you can also find more
                information about how to use our app, our mission, the team
                behind this app, and our sources.
              </Text>
            </View>
            <View style={containerStyles.centerWhiteContainer}>
              {route.name == "Welcome" ? (
                <Pressable
                  onPress={() => navigation.navigate("InformationHub")}
                  style={[
                    buttonStyles.alignCenter,
                    buttonStyles.redButton,
                    buttonStyles.defaultButton,
                    buttonStyles.largeButton,
                  ]}
                >
                  <Text style={textStyles.whiteSemiBoldText}>
                    Click here to get started!
                  </Text>
                </Pressable>
              ) : (
                <View></View>
              )}
            </View>
          </View>
      </ScrollView>
      </View>
    );
};

export default HowToUse