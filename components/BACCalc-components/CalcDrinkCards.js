import React from 'react';
import { View, Text } from 'react-native';

// Import styles
import { styles } from '../styles';
import { containerStyles } from '../styles/containerStyles';

const CalcDrinkCards = ({ drinks }) => {
  return (
    <View style={{ width: '100%' }}>
      {drinks.length !== 0 ?
        <View style={containerStyles.row}>
          {drinks.map((drink, index) => (
            <View key={index} style={[styles.drinkCard, containerStyles.row]}>
              <Text style={[styles.drinkCardTimeContainer, styles.redBoldText, styles.smallText]}>{new Date(drink.timeOfDrink).getHours()}:{new Date(drink.timeOfDrink).getMinutes()}</Text>
              <View style={styles.drinkCardInfoContainer}>
                <Text style={styles.drinkCardNameText}>{drink.name} ({(drink.strength * 100).toFixed(1)}%)</Text>
                <Text style={styles.smallText}>{drink.size.value * 1e3} ml</Text>
              </View>
              {/* Commented out individual drink deletion for now: */}
              {/* <Pressable style={styles.drinkCardDeleteContainer}>
                <Ionicons name='close' style={styles.exIcon} />
              </Pressable> */}
            </View>
          ))}
        </View>
        :
        <Text style={{ color: 'white' }}>Add in drinks to see cards</Text>
      }
    </View>
  )
}

export default CalcDrinkCards;