import React,{useState} from 'react';
import { View,StatusBar,StyleSheet } from 'react-native';
import {Container, Header, Item, Input, Icon, Button, Text, Content} from 'native-base';
import {useTheme} from '@react-navigation/native';


function Menu()
{
    const {colors}=useTheme();
    const [search,setSearch]=useState('');

    return(
        <Container style={{backgroundColor:colors.background}}>
            <StatusBar barStyle={colors.statusBarColor==='#000' ? 'light-content':'dark-content'} backgroundColor={colors.statusBarColor} />
            <Header iosBarStyle={colors.statusBarColor==='#000' ? 'light-content':'dark-content'} rounded searchBar transparent androidStatusBarColor={colors.statusBarColor}>
                <Item style={{...styles.searchBar,backgroundColor:colors.card,borderColor:colors.border}} regular>
                    <Icon active  name="ios-search" />
                    <Input onChangeText={(text)=>setSearch(text)} value={search} placeholder="Search" onFocus={()=>console.log("search")}/>
                    <Icon name="user-circle" type="FontAwesome"  />
                </Item>
            </Header>
            <Content>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:colors.text}}>Menu Component</Text>
                </View>
            </Content>
        </Container>
       
    )
}

const styles=StyleSheet.create({
    searchBar:{
        borderRadius:8,
    }
});

export default Menu;