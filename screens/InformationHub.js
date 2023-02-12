import { StyleSheet, Text, View } from 'react-native';


import Title from "../components/Title";
const headerTitle = 'Information Hub';


const InformationHub = () => {
    return (
        <View style={styles.centered}>
            <Title title={headerTitle} />
            <Text style={styles.centered}> This is the Information Hub: Learn about alcohol and its effects on you!</Text>
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

export default InformationHub