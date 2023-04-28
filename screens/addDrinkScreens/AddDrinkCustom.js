import React from 'react';
import { ScrollView } from 'react-native';

import AddDrinkCards from '../../components/addDrink-components/AddDrinkCards';

import types from "../../json/AddDrink-pages/drinkTypes.json"

import handleInput from '../../components/addDrink-components/handleInput';

const AddDrinkType = ({ route, navigation }) => {
    let drinks = route.params.drinks
    let newDrink = route.parasms.newDrink

    let nextPage = "AddDrinkStrength"

    let [sizeUnitChecked, setSizeUnitChecked] = useState('ml')
    let [sizeInputValue, setSizeInputValue] = useState('')
    let [strengthInputValue, setStrengthInputValue] = useState('')

    const handleAddDrinksInput = () => {
        // assemble name, size, and strenght

        handleInput(drinks, newDrink, newKey, newValue, nextPage, navigation)
    }

    return (
        <ScrollView>
            <SectionHeaderWithRadioButtons
                headerText={"Custom Size"}
                unitValueChecked={sizeUnitChecked}
                setUnitValue={setSizeUnitChecked}
                unitOption1={"oz"}
                unitOption2={"ml"}
            />
            <TextInput
                style={[textInputStyles.textInput, textInputStyles.largeTextInput, {marginTop: 8, marginBottom: 8}]}
                value={sizeInputValue}
                onChangeText={setSizeInputValue}
                placeholder={"eg. 12, 65, ..."}
                placeholderTextColor={'grey'}
            />
            <View style={[containerStyles.row, containerStyles.leftTopPadding, {display: "flex", justifyContent: "space-between", paddingHorizontal:24, alignItems: "center"}]}>
                <Text style={textStyles.boldText}>{"Custom Strength"}</Text>
            </View>
            <TextInput
                style={[textInputStyles.textInput, textInputStyles.largeTextInput, {marginTop: 8, marginBottom: 8}]}
                value={sizeInputValue}
                onChangeText={setSizeInputValue}
                placeholder={"eg. 12, 65, ..."}
                placeholderTextColor={'grey'}
            />
        </ScrollView>
    )
}

export default AddDrinkType