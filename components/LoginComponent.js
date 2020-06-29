import React from 'react';
import { View,StyleSheet,StatusBar,Image} from 'react-native';
import {Button,Text, Item, Icon, Input} from 'native-base';


function Login(props)
{  
    return(
        <View style={{flex:1}}>
            <StatusBar barStyle="default" />
            <View style={styles.container}>
                <Image style={styles.title} source={require('../shared/logoCAS.png')}/>
                <Item rounded style={styles.inputBox} >
                    <Icon  active type="FontAwesome" name="mobile" fontSize={50}/>
                    <Input  placeholder="Phone Number"/>
                </Item>
                <Item rounded style={styles.inputBox}>
                    <Icon active type="FontAwesome" name="lock"/>
                    <Input secureTextEntry placeholder="Password"/>
                </Item>
                <Button light transparent style={styles.forgetPass}><Text style={{fontSize:11}}>Forget Password?</Text></Button>
                <Button rounded light style={styles.buttons} block primary onPress={()=>props.login()}><Text style={{fontSize:16}}>LOGIN</Text></Button>
                <Button light transparent ><Text style={{fontSize:16}}>SIGN UP</Text></Button>
            </View>
        </View>
    )
}
export default Login;

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        margin:20,
        alignItems:'center',

    },
    buttons:{
        backgroundColor:'#147efb',
        marginBottom:10,
    },
    inputBox:{
        backgroundColor:'#cfcfcf',
        marginBottom:30,
    },
    title:{
        height:70,
        width:160,
        marginBottom:60,
    },
    forgetPass:{
        marginBottom:50
    }
});