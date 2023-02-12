import { StyleSheet, Text, View } from 'react-native';


import Title from "../components/Title";
const headerTitle = 'About Us Page';


const AboutUs = () => {
    return (
        <View style={styles.centered}>
            <Title title={headerTitle} />
            <Text style={styles.centered}> Learn more about us!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    centered: {
      alignItems: 'center',
      padding: "15px",
    }
  });

export default AboutUs