import { StackActions } from '@react-navigation/native';



const firstHowTo = (navigation) => {
    navigation.dispatch( StackActions.push('Profile') );
    navigation.navigate('HowToUse');
}

export default firstHowTo