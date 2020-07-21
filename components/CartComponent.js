import React,{useState} from 'react';
import { View,StatusBar,StyleSheet, Modal} from 'react-native';
import {Fab,Icon,Text} from 'native-base';
import {useTheme} from '@react-navigation/native';


function CartButton(props)
{   
    const {colors}=useTheme();
    const [isModalVisible,setIsModalVisible]=useState(false)

    return(
        <View style={{flex:1}}>
        
            <Modal
                animationType="fade"
                visible={isModalVisible}
                onRequestClose={()=>setIsModalVisible(!isModalVisible)}
                transparent={true}
                statusBarTranslucent={true}
            >
                <View style={{flex:1,backgroundColor:(colors.statusBarColor==='#000' ? "rgba(5,5,5,0.6)":"rgba(255,255,255,0.6)")}} >
                <View style={{flex:1,justifyContent:'center',alignItems:'center',margin:30,backgroundColor:colors.card,borderColor:colors.border,elevation:2,shadowColor:colors.border,borderWidth:4,borderRadius:8}}>
                    <StatusBar barStyle={colors.statusBarColor==='#000' ? 'light-content':'dark-content'} backgroundColor={colors.background} />
                    <Text style={{fontSize:20,fontWeight:'bold',color:colors.text}}>No Orders Yet</Text>
                </View>
                </View>
            </Modal>
            
            <Fab
                style={{backgroundColor:'#512da8'}}
                position="bottomRight"
                onPress={()=>setIsModalVisible(!isModalVisible)}
            >
                <Icon name="shopping-basket" type="FontAwesome" style={{color:"#fff"}} />
            </Fab>
        </View>
    );
}
export default CartButton;