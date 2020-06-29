import React from 'react';
import { View,Text } from 'react-native';
import {useTheme} from '@react-navigation/native';


function Menu()
{
    const {colors}=useTheme();

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,fontWeight:'bold',color:colors.text}}>Menu Component</Text>
        </View>
    )
}
export default Menu;