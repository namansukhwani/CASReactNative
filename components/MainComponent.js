import React,{useState} from 'react';
import {} from 'react-native';
import {NavigationContainer,DarkTheme,DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import {useColorScheme} from 'react-native-appearance';
import Home from './HomeComponent';
import Login from './LoginComponent';
import Menu from './MenuComponent';

const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();

const myDarkTheme={
    ...DarkTheme,
    colors:{
        ...DarkTheme.colors,    
        text:"#fff"
    }
};

const myLightTheme={
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        text:"#000"
    }
};

function HomeNavigator()
{
    return(
            <Tab.Navigator initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor:'#147efb',
                   
                }} 
            >
                <Tab.Screen 
                    name="Home" 
                    component={Home}
                    options={{
                        tabBarLabel:'Home',
                        tabBarIcon:({color,size}) => <Icon name="home" style={{color:(color),fontSize:(size)}} />,
                    }} 
                />
                <Tab.Screen name="Menu" component={Menu}
                    options={{
                        tabBarLabel:'Menu',
                        tabBarIcon:({color,size}) => <Icon name="menu" style={{color:(color),fontSize:(size)}} />,
                    }}    
                />
            </Tab.Navigator>
        )
}

function Main(props)
{   
    const colorMode=useColorScheme();
    const [isUserLogin,setIsUserLogin]=useState(false);

    const login=()=>{
        setIsUserLogin(true);
    }

    const LoginScreen=()=>{
        return(
            <Login login={login}/>
        );
    }

    return(
        <NavigationContainer theme={colorMode === 'dark' ? myDarkTheme : myLightTheme}>
            <Stack.Navigator>
                {isUserLogin ? (
                    <Stack.Screen name="Home" component={HomeNavigator}
                        options={{
                            headerTitleAlign:'center',
                            headerTransparent:true,
                            headerShown:false
                        }} 
                    />
                ):(
                    <Stack.Screen 
                        name="Login" 
                        component={LoginScreen}
                        options={{
                            headerShown:false,
                        }} 
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Main;