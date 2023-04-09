import React from 'react';
import { View } from 'react-native';

import AddDrinkCard from './AddDrinkCard';

const AddDrinkCards = ({ data, handleAddDrinksInput }) => {
    return (
        <View>
            {data.map((option, index) => {
                return <AddDrinkCard key={index} option={option} handleAddDrinksInput={handleAddDrinksInput}/>
            })}
        </View>
    )
  }
  
  export default AddDrinkCards;