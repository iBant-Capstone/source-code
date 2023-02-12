import { StyleSheet, Text, View } from 'react-native';


import Title from "../components/Title";
const headerTitle = 'Profile Page';


const Profile = () => {
    return (
        <View style={styles.centered}>
            <Title title={headerTitle} />
            <Text style={styles.centered}> This is the Profile: edit your information here!</Text>
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

export default Profile