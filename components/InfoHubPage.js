import { Text, View } from 'react-native';
import { styles } from './styles';

const InfoHubPage = (props) => {
    return (
        <View style={styles.centered}>
            <Text>On page {props.title}</Text>
        </View>
    )
}


export default InfoHubPage;