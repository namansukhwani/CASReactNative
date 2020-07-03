import React from 'react';
import { View,Text,StatusBar } from 'react-native';
import {useTheme} from '@react-navigation/native';

function Account()
{
    const {colors}=useTheme();
    
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <StatusBar barStyle={colors.statusBarColor==='#000' ? 'light-content':'dark-content'} backgroundColor={colors.statusBarColor} />
            <Text style={{fontSize:20,fontWeight:'bold',color:colors.text}}>Account Settings</Text>
        </View>
    )
}
export default Account;