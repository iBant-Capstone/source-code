import React from 'react';
import { View, Text, Pressable } from 'react-native';

// Import styles
import * as StyleSheet from './styles';
let styles = StyleSheet.styles;

const AddDrinkCard = ({ index, selector, handleInput }) => {
    return (
        <Pressable 
        key={index} 
        style={[styles.drinkCard, styles.row]}
        onPress={() => {handleInput(selector.value)}}
        >
            <View style={styles.drinkCardInfoContainer}>
                <Text style={styles.drinkCardNameText}>{selector.title}</Text>
                <Text style={styles.smallText}>{selector.subtitle}</Text>
            </View>
        </Pressable>
    )
  }
  
  export default AddDrinkCard;