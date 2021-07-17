import React from 'react';
import { SafeAreaView } from 'react-native';
import SafeViewAndroid from "./app/common/GlobalStyles";

import Icon from './app/components/Icon';

export default function App() {
  return (
  <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
    <Icon name="email" size={50} backgroundColor='red' iconColor='blue'/>
  </SafeAreaView>
  );
}
