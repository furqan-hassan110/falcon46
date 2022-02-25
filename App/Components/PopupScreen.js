import React from 'react';
import { View, StyleSheet,Platform } from 'react-native';
import Color from '../config/Color';

function PopupScreen({children,style}) {
    return (
        <View style={styles.body}>{children}</View>
    );
}
const styles = StyleSheet.create({
    body:{
        width:'100%',
        height:'90%',
        backgroundColor:Color.white,
        flexDirection:'column',
        justifyContent:'flex-start',
        // alignItems:'center',
        // borderTopLeftRadius:12,
        // borderTopRightRadius:12,
        position:'absolute',
        marginTop:80,
        // paddingTop:7,
       
    
        
        
            
       
       }
})
export default PopupScreen;