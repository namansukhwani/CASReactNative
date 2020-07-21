import React,{useState} from 'react';
import { View,StatusBar,StyleSheet,Platform,Alert,Image} from 'react-native';
import { Card, Item, Input, Icon, Text,CardItem,Right,List,ListItem,Label,Body} from 'native-base';
import {useTheme} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import CartButton from './CartComponent';

const HEADER_HIGHT=Platform.OS==='ios'?75:50+StatusBar.currentHeight;

const SearchBar=({headerY})=>{
    const {colors}=useTheme();
    const [search,setSearch]=useState('');

    const newAlert=()=>{
        Alert.alert('User Icon Is Pressed!!')
    }

    return(
        <>
        {/*<Header style={styles.header} iosBarStyle={colors.statusBarColor==='#000' ? 'light-content':'dark-content'} rounded searchBar transparent androidStatusBarColor={colors.background}>*/}
                <Item style={{...styles.searchBar,backgroundColor:colors.card,borderColor:colors.border,shadowColor:colors.border}} regular>
                    <Icon style={{color:colors.text}} name="ios-search" />
                    <Input onChangeText={(text)=>setSearch(text)} placeholderTextColor={colors.text} style={{color:colors.text}} value={search} placeholder="Search" onFocus={()=>console.log("search")}/>
                    <Icon style={{color:colors.text}} name="user-circle" type="FontAwesome" onPress={()=>newAlert()} />
                </Item>
        {/*</Header>*/}
        </>
    )
}

function DishCard(){
    const {colors}=useTheme();
    return(
        <Card style={{borderRadius:8,backgroundColor:colors.card,borderColor:colors.border}}>
            <CardItem header style={{height:65,borderRadius:8,backgroundColor:colors.card,borderColor:colors.border}}>
                <Text style={{color:colors.text,fontSize:18}}>Dish Name</Text>
                <Right style={{flex:1,justifyContent:'flex-end',flexDirection:'row'}}>
                    <Text style={{color:colors.text,fontSize:18,marginRight:30}}>$45</Text>
                    <Icon name="arrow-forward" style={{color:colors.border}}/>
                </Right>
            </CardItem>
        </Card>
    );
}

function DishList(){
    const {colors}=useTheme();
    return(
        <List style={{backgroundColor:colors.card}} >
            <ListItem itemDivider>
                <Text>POPULAR</Text>
            </ListItem>
            <ListItem>
                <Body>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Dish Name</Text>
                    <Text>Description of the dish will be shown here with incridents methods and much more things about the dish.</Text>
                    <Text style={{fontWeight:'bold'}}>$44.3</Text>
                </Body>
                <Right>
                    <Icon name="arrow-forward" style={{color:colors.border}}/>
                </Right>
            </ListItem>
            <ListItem >
                <Body>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Dish Name</Text>
                    <Text>Description of the dish will be shown here with incridents methods and much more things about the dish.</Text>
                    <Text style={{fontWeight:'bold'}}>$44.3</Text>
                </Body>
                <Right>
                    <Icon name="arrow-forward" style={{color:colors.border}}/>
                </Right>
            </ListItem>
            <ListItem itemDivider>
                <Text>BREAKFAST</Text>
            </ListItem>
            <ListItem >
                <Body>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Dish Name</Text>
                    <Text>Description of the dish will be shown here with incridents methods and much more things about the dish.</Text>
                    <Text style={{fontWeight:'bold'}}>$44.3</Text>
                </Body>
                <Right>
                    <Icon name="arrow-forward" style={{color:colors.border}}/>
                </Right>
            </ListItem><ListItem >
                <Body>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Dish Name</Text>
                    <Text>Description of the dish will be shown here with incridents methods and much more things about the dish.</Text>
                    <Text style={{fontWeight:'bold'}}>$44.3</Text>
                </Body>
                <Right>
                    <Icon name="arrow-forward" style={{color:colors.border}}/>
                </Right>
            </ListItem>
            <ListItem itemDivider>
                <Text>SNACKS</Text>
            </ListItem>
            <ListItem >
                <Body>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Dish Name</Text>
                    <Text>Description of the dish will be shown here with incridents methods and much more things about the dish.</Text>
                    <Text style={{fontWeight:'bold'}}>$44.3</Text>
                </Body>
                <Right>
                    <Icon name="arrow-forward" style={{color:colors.border}}/>
                </Right>
            </ListItem><ListItem >
                <Body>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Dish Name</Text>
                    <Text>Description of the dish will be shown here with incridents methods and much more things about the dish.</Text>
                    <Text style={{fontWeight:'bold'}}>$44.3</Text>
                </Body>
                <Right>
                    <Icon name="arrow-forward" style={{color:colors.border}}/>
                </Right>
            </ListItem>
        </List>
    );
}

function Menu()
{   
    const scrollY=new Animated.Value(0);
    const diffClampScrollY=Animated.diffClamp(scrollY,0,HEADER_HIGHT)
    const headerY=Animated.interpolate(diffClampScrollY,{
        inputRange:[0,HEADER_HIGHT],
        outputRange:[0,-HEADER_HIGHT]
    })

    const {colors}=useTheme();

    return(
            <View style={{flex:1}}>    
                <StatusBar barStyle={colors.statusBarColor==='#000' ? 'light-content':'dark-content'} backgroundColor={colors.statusBarColor} />
                <Animated.View style={{...styles.header,
                    transform:[{translateY:headerY}]
                }}>
                    <SearchBar headerY={headerY}/>
                </Animated.View>
                <Animated.ScrollView  
                    onScroll={Animated.event([
                        {
                            nativeEvent:{contentOffset:{y:scrollY}}
                        }
                    ])}
                    scrollEventThrottle={16}
                   
                    style={{paddingTop:HEADER_HIGHT-10}}
                >
                    <View style={styles.view}>
                        <Card style={{...styles.headerCard}}>
                            <CardItem cardBody style={{...styles.headerCard,justifyContent:'center',backgroundColor:colors.card,borderColor:colors.border}}>
                                <Image source={require('../shared/canteenPic.png')} style={styles.headerImage} />    
                                <Text style={styles.headerText}>Canteen Name</Text>
                            </CardItem>
                        </Card>
                        <DishList/>
                    </View>
                </Animated.ScrollView>
                <CartButton/>
            </View>
       
    )
}

const styles=StyleSheet.create({
    searchBar:{
        borderRadius:8,
        shadowOpacity:0.4,
        elevation:2
    },
    header:{
        height:HEADER_HIGHT,
        position:'absolute',
        zIndex:1000,
        elevation:1000,
        top:0,
        left:0,
        right:0,
        margin:10
    },
    view:{
        justifyContent:'center',
        margin:10
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    },
    headerCard:{
        borderRadius:8,
    },
    headerText:{
        position:'absolute',
        zIndex:10,
        elevation:2,
        fontWeight:'bold',
        fontSize:20
    },
    headerImage:{
        height: 200,
        width: null,
        flex: 1,
        borderRadius:8
    },
    dishCard:{

    },   
});

export default Menu;