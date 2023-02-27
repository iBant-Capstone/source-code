import React, { useRef } from 'react';
import { View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import Footer from '../../components/Footer';

import Login1 from './LoginScreen1';
import Login2 from './LoginScreen2';
import Login3 from './LoginScreen3';
import Login4 from './LoginScreen4';
import Login5 from './LoginScreen5';
import Login6 from './LoginScreen6';

const Onboarding = () => {
  const pagerRef = useRef(null);
  const handlePageChange = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };
  
  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }}>
        <View key="1">
          <Login1/>
          <Footer backgroundColor="#ffc93c" rightButtonLabel="Next" rightButtonPress={() => true} />
        </View>
        <View key="2">
          <Login2/>
          <Footer backgroundColor="#ffc93c" rightButtonLabel="Next" rightButtonPress={() => true} />
        </View>
        <View key="3">
          <Login3/>
          <Footer backgroundColor="#ffc93c" rightButtonLabel="Next" rightButtonPress={() => true} />
        </View>
        <View key="4">
          <Login4/>
          <Footer backgroundColor="#ffc93c" rightButtonLabel="Next" rightButtonPress={() => true} />
        </View>
        <View key="5">
          <Login5/>
          <Footer backgroundColor="#ffc93c" rightButtonLabel="Next" rightButtonPress={() => true} />
        </View>
        <View key="6">
          <Login6/>
          <Footer backgroundColor="#ffc93c" rightButtonLabel="Next" rightButtonPress={() => true} />
        </View>
      </ViewPager>
    </View>
  );
};

export default Onboarding;