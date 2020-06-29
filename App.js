import React,{ useEffect, useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Main from './components/MainComponent';
import {AppearanceProvider} from 'react-native-appearance';

export default function App(props) {
  
  const [isReady,setIsReady]=useState(false)

  const getFont= async()=>{
    
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    
    setIsReady(true);
  };

  useEffect(()=>{getFont()});
  
  if(!isReady)
  {
    return <AppLoading/>;
  }
  
  return (
    <AppearanceProvider>
      <Main/>
    </AppearanceProvider>
  );
}

