import { StyleSheet, Text, View } from 'react-native';


import Title from "../components/Title";
const headerTitle = 'BAC Calculator';


const BACCalc = () => {
    return (
        <View style={styles.centered}>
            <Title title={headerTitle} />
            <Text style={styles.centered}> This is the BAC Calculator: find out how what your BAC is!</Text>
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

export default BACCalc