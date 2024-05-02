import React from 'react';
import { View } from 'react-native';

import AddEmotionCard from './AddEmotionCard';

const AddEmotionCards = ({ data, handleAddDrinksInput }) => {
    return (
        <View style={{paddingTop: 10}}>
            {data.map((option, index) => {
                return <AddEmotionCard key={index} option={option} handleAddDrinksInput={handleAddDrinksInput}/>
            })}
        </View>
    )
  }
  
  export default AddEmotionCards;