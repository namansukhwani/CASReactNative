import React from 'react';
import { View,Text,StatusBar } from 'react-native';
import {useTheme} from '@react-navigation/native';

function Home()
{
    const {colors}=useTheme();
    
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <StatusBar barStyle="default"  />
            <Text style={{fontSize:20,fontWeight:'bold',color:colors.text}}>Home Component</Text>
        </View>
    )
}
export default Home;