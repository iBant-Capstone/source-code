import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

import { containerStyles } from '../styles/containerStyles';
import { textStyles } from '../styles/textStyles';
import { drinkCardStyles } from '../styles/drinkCardStyles';

const AddDrinkCard = ({ option, handleAddDrinksInput }) => {

    const handlePress = () => {
        handleAddDrinksInput(option.value)
    }

    return (
        <Pressable
            style={[containerStyles.row, drinkCardStyles.addDrinkCard]}
            onPress={handlePress}
        >
            <View style={{display: "flex", flexDirection:"row", alignContent:'center'}} >
                <Image style={{height: 40, width: 40, marginLeft: 16}} source={require('../../assets/alcohol-icons/' + option.icon)} />
                <View style={{marginLeft: 28, display:"flex", justifyContent:"center"}} >
                    <Text style={[textStyles.boldText, textStyles.addDrinkCardTitle]}>{option.title}</Text>
                    <Text style={[textStyles.smallText, textStyles.addDrinkCardSubtitle]}>{option.subtitle}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default AddDrinkCard;