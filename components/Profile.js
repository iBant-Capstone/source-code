import { StyleSheet, Text, View } from 'react-native';


const Profile = ({route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};

export default Profile
  
