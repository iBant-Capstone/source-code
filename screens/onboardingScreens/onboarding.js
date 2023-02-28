import React, { useRef } from 'react';
import { View } from 'react-native';
//import PagerView from 'react-native-pager-view';
import Footer from '../../components/Footer';
import { useNavigation } from '@react-navigation/native';

import Login1 from './LoginScreen1';
import Login2 from './LoginScreen2';
import Login3 from './LoginScreen3';
import Login4 from './LoginScreen4';
import Login5 from './LoginScreen5';
import Login6 from './LoginScreen6';

const Onboarding = ({navigation}) => {
  const pagerRef = useRef(null);
  const handlePageChange = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };

  return (
    <View style={{ flex: 1 }}>
       <PagerView style={{ flex: 1 }} initialPage={1} ref={pagerRef}>
         {/* <View key="1">
          <Login1/>
          <Footer backgroundColor="#ffc93c" rightButtonLabel="Next" rightButtonPress={() => {handlePageChange(2);}}/>
        </View>
        <View key="2">
          <Login2/>
          <Footer backgroundColor="#ffc93c" rightButtonLabel="Next" rightButtonPress={() => {handlePageChange(3);}}  leftButtonLabel="Back" leftButtonPress={() => { handlePageChange(1); }}/>
        </View>
        <View key="3">
          <Login3/>
          <Footer backgroundColor="#ffc93c" rightButtonLabel="Next" rightButtonPress={() => {handlePageChange(4);}} leftButtonLabel="Back" leftButtonPress={() => { handlePageChange(2); }}/>
        </View>
        <View key="4">
          <Login4/>
          <Footer backgroundColor="#ffc93c" rightButtonLabel="Next" rightButtonPress={() => {handlePageChange(5);}} leftButtonLabel="Back" leftButtonPress={() => { handlePageChange(3); }}/>
        </View>
        <View key="5">
          <Login5/>
          <Footer backgroundColor="#ffc93c" rightButtonLabel="Next" rightButtonPress={() => {handlePageChange(6);}} leftButtonLabel="Back" leftButtonPress={() => { handlePageChange(4); }}/>
        </View>
        <View key="6">
          <Login6/>
          <Footer backgroundColor="#ffc93c" rightButtonLabel="Next" rightButtonPress={() => {handlePageChange(7);}} leftButtonLabel="Back" leftButtonPress={() => { handlePageChange(5); }}/>
        </View>
        <View key="7">
          <HeightInput/>
          <Footer backgroundColor="#ffc93c" rightButtonLabel="Next" rightButtonPress={() => {handlePageChange(8);}} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('InformationHub');}}/>
        </View>
        */}
        <View key="8">
          <WeightInput/>
          <Footer backgroundColor="#ffc93c" rightButtonLabel="Next" rightButtonPress={() => {navigation.navigate('InformationHub');}} leftButtonLabel="Skip" leftButtonPress={() => { navigation.navigate('InformationHub');}}/>
        </View>  
      </PagerView> 
    </View>
  );
};

export default Onboarding;