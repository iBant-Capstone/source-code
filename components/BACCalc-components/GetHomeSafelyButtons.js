import React from 'react';
import { View } from 'react-native';

import GetHomeSafelyButton from './GetHomeSafelyButton';

import * as StyleSheet from '../styles'
let styles = StyleSheet.styles;

const GetHomeSafelyButtons = () => {

    let data = [
        {
            url: "https://www.uber.com/",
            title: "Call an Uber"
        },
        {
            url: "https://vaden.stanford.edu/super/learn/alcohol-drug-info/reduce-your-risk/what-blood-alcohol-concentration-bac",
            title: "BAC Resource"
        },
        {
            url: "https://www.google.com/maps",
            title: "Find public transit"
        },
        {
            url: "https://www.findlaw.com/dui/laws-resources/comparing-state-dui-laws.html",
            title: "DUI Laws Resource"
        }
    ]

    return (
        <View style={[styles.row, styles.centered]}>
            {data.map((button, index) => {
                return <GetHomeSafelyButton url={button.url} title={button.title} key={index} />
            })}
         </View>
    )
  }
  
  export default GetHomeSafelyButtons;