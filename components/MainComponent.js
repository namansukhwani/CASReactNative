import React,{useEffect} from 'react';
import {} from 'react-native';
import {NavigationContainer,DarkTheme,DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import {useColorScheme} from 'react-native-appearance';
import Login from './LoginComponent';
import Menu from './MenuComponent';
import Orders from './OrdersComponrnt';
import Account from './AccountComponent';
import {connect} from 'react-redux';
import {loginFunction} from '../redux/Actions';

const mapStateToProps=state=>({
    isUserLogin:state.user
});

const mapDispatchToProps=dispatch =>({
    loginFunction:()=>dispatch(loginFunction())
});

const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();

const myDarkTheme={
    ...DarkTheme,
    colors:{
        ...DarkTheme.colors,    
        text:"#fff",
        statusBarColor:"#000"
    }
};

const myLightTheme={
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        text:"#000",
        statusBarColor:"rgb(242, 242, 242)"
    }
};

function MenuNavigator()
{
    return(
        <Stack.Navigator initialRouteName="Menu">
            <Stack.Screen name="Menu" component={Menu} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

function TabNavigator()
{
    return(
            <Tab.Navigator initialRouteName="Menu"
                tabBarOptions={{
                    activeTintColor:'#147efb',
                    keyboardHidesTabBar:true
                }} 
            >
                <Tab.Screen name="Menu" component={MenuNavigator}
                    options={{
                        tabBarLabel:'Menu',
                        tabBarIcon:({color,size}) => <Icon name="cutlery" type="FontAwesome" style={{color:(color),fontSize:(size)}} />,
                    }}    
                />
                <Tab.Screen name="Orders" component={Orders}
                    options={{
                        tabBarLabel:'Orders',
                        tabBarIcon:({color,size}) => <Icon name="menu" style={{color:(color),fontSize:(size+7)}} />,
                    }}    
                />
                <Tab.Screen name="Settings" component={Account}
                    options={{
                        tabBarLabel:'Account',
                        tabBarIcon:({color,size}) => <Icon name="user-circle-o" type="FontAwesome" style={{color:(color),fontSize:(size)}} />,
                    }}    
                />

            </Tab.Navigator>
        )
}

function Main(props)
{   
    const colorMode=useColorScheme();

    const LoginScreen=()=>{
        return(
            <Login login={props.loginFunction}/>
        );
    }

    return(
        <NavigationContainer theme={colorMode === 'dark' ? myDarkTheme : myLightTheme}>
            <Stack.Navigator>
                {props.isUserLogin ? (
                    <Stack.Screen name="Home" component={TabNavigator}
                        options={{
                            headerShown:false
                        }} 
                    />
                ):(
                    <Stack.Screen 
                        name="Login" 
                        component={LoginScreen}
                        options={{
                            headerShown:false
                        }} 
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default  connect(mapStateToProps,mapDispatchToProps)(Main);