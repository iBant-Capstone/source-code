import React from 'react';
import { View } from 'react-native';

import AddDrinkCard from './AddDrinkCard';

const AddDrinkCards = ({ data, drinks, newDrink, newKey, nextPage, navigation }) => {
    return (
        <View>
            {data.map((option, index) => {
                return <AddDrinkCard key={index} option={option} drinks={drinks} newDrink={newDrink} newKey={newKey} nextPage={nextPage} navigation={navigation}/>
            })}
        </View>
    )
  }
  
  export default AddDrinkCards;