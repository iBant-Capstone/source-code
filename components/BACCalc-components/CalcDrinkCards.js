import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import styles
import { containerStyles } from '../styles/containerStyles';
import { imageStyles } from '../styles/imageStyles';
import { textStyles } from '../styles/textStyles';
import { drinkCardStyles } from '../styles/drinkCardStyles';

const CalcDrinkCards = ({ drinks, setBAC, changeDrinksReady } ) => {

  const handleDelete = async (drink) => {
    try {
      let drinksDelete = drinks.filter(obj => !Object.entries(drink).every(([key, value]) => obj[key] === value));
      let drinksToSend = JSON.stringify(drinksDelete)
      await AsyncStorage.setItem('drinks', drinksToSend)
      changeDrinksReady(false)

      // makes sure we set the BAC to zero if we're at the last one
      if (drinksToSend == "[]") {
        setBAC(0)
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  const mlToOz = (valueInMl) => {
    let valueInOz = (valueInMl * 1e3 / 29.5735296875).toFixed(1)
    return valueInOz
  }

  const mlToFixed = (valueInMl) => {
    let mlFixed = (valueInMl * 1e3).toFixed(1)
    return mlFixed
  }

  return (
    <View style={{ width: '100%' , marginTop:32}}>
      {drinks.length !== 0 ?
        <View style={containerStyles.row}>
          {drinks.map((drink, index) => (
            <View key={index} style={[drinkCardStyles.drinkCard, containerStyles.row, {display: "flex", justifyContent:"space-between"}]}>
              <View style={{display:"flex", flexDirection:"row"}}>
                <View style={{display: "flex", alignItems: 'center', flexDirection:'column', justifyContent:'center'}}>
                  <Text style={[textStyles.redSemiBoldText, textStyles.smallText]}>{new Date(drink.timeOfDrink).toLocaleString('en-US', { month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }).split(', ')[0]}</Text>
                  <Text style={[textStyles.redSemiBoldText, textStyles.smallText]}>{new Date(drink.timeOfDrink).toLocaleString('en-US', { month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }).split(', ')[1]}</Text>
                </View>
                <View style={{display: "flex", justifyContent:'center', marginLeft: 10}}>
                  <Text style={textStyles.boldText}>{drink.name} ({(drink.strength * 100).toFixed(1)}%) - {drink.emotion}</Text>
                  <Text style={[textStyles.text, textStyles.smallText]}>{mlToOz(drink.size.value)}oz / {mlToFixed(drink.size.value)}ml</Text>
                </View>
              </View>
              <Pressable onPress={() => handleDelete(drink)}>
                <Ionicons name='close' style={imageStyles.deleteIcon}  />
              </Pressable>
            </View>
          ))}
        </View>
        :
        <Text style={{ color: 'white' }}></Text>
      }
    </View>
  )
}

export default CalcDrinkCards;