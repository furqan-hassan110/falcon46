import React from 'react';
import { View,Image,Text,StyleSheet } from 'react-native';
import Color from '../config/Color';

function ServiceHeader({children,image,title,subtitle}) {
    return (
        <View style={styles.container}> 
                    <Image style={styles.logo} source={image}/>
                    <Text style={styles.text1}>{title}</Text>
                    <Text style={styles.text2}>{subtitle}</Text>
                </View>
    );
}
const styles = StyleSheet.create({
    container:{
        marginTop:5,
        alignItems:'center'
    },
    logo:{
        width:120,
        height:120
    },
    text1:{
        fontFamily:'montserrat-semi-bold',
        fontSize:18,
        color:Color.black
    },
    text2:{
        fontFamily:'Montserrat-Regular',
        fontSize:14,
        color:Color.black,
        marginBottom:10,
    
    }
})

export default ServiceHeader;