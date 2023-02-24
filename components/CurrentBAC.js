import React, {useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text } from 'react-native';
import * as StyleSheet from './styles';
import { useFocusEffect } from '@react-navigation/native'

let styles = StyleSheet.styles;

const CurrentBAC = () => {

    return (
        <Text>Current BAC: 0.00%</Text>
    )
}

export default CurrentBAC