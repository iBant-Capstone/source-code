import { Text, View, Pressable } from 'react-native';
import * as StyleSheet from '../components/styles';

let styles = StyleSheet.styles;

const CommonAlcoholTypes = ({ navigation }) => {
    return (
        <View style={styles.centered}>
            <Text style={styles.centered}>Alcohol Types</Text>
            <View style={styles.twoButtonRow}>
                <Pressable
                    style={styles.alcoholTypesButton}
                    // onPress={() => props.navigation.navigate('')}
                    >
                    <Text style={styles.alcoholTypesButtonText}>Beer</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    // onPress={() => props.navigation.navigate('')}
                    >
                    <Text style={styles.alcoholTypesButtonText}>Wine</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    // onPress={() => props.navigation.navigate('')}
                    >
                    <Text style={styles.alcoholTypesButtonText}>Champagne</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    // onPress={() => props.navigation.navigate('')}
                    >
                    <Text style={styles.alcoholTypesButtonText}>Hard Cider</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    // onPress={() => props.navigation.navigate('')}
                    >
                    <Text style={styles.alcoholTypesButtonText}>Mead</Text>
                </Pressable>
                <Pressable
                    style={styles.alcoholTypesButton}
                    // onPress={() => props.navigation.navigate('')}
                    >
                    <Text style={styles.alcoholTypesButtonText}>Saké</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default CommonAlcoholTypes