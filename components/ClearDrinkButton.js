import AsyncStorage from "@react-native-async-storage/async-storage"
import React from "react"
import { Pressable, Text } from 'react-native';

const ClearDrinksButton = () => {
    return (
        <Pressable
        onPress={() => {
            AsyncStorage.removeItem("drinks") 
        }}
        accessibilityLabel="Add a drink"
        style={styles.whiteButton}
        >
            <Text>Clear Drinks</Text>
        </Pressable>
    )
}

export default ClearDrinksButton