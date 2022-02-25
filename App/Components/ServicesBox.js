import React from 'react';
import { View,Text,Image,StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Color from '../config/Color';
import { Dimensions } from 'react-native';


const screenwidth = Dimensions.get('window').width;
var width=screenwidth/5;


function ServicesBox({view,text,image,onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.Servicesbox}>
             <View style={styles.Services}>
                 <Image style={styles.logoimage} source={(image)} />
             </View>
             <Text style={styles.Text} >{text}</Text>
        </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    Servicesbox:{
        flexDirection:'column',
        alignItems:'center',
        marginTop:25,
        left:-5,
        marginHorizontal:10,
        marginBottom:30,    
        width:width,

        },

    Services:{
        width:60,
        height:60,
        backgroundColor:Color.lightwhite,
        borderRadius:50,
        elevation:5,
        marginBottom:7
        
       },
    logoimage:{
     width:60,
     height:60,
     alignSelf:'center',
    },
    
    Text:{
        
        textAlign:'center',
        fontSize:10,
        fontFamily:'Montserrat-Regular',
        maxWidth:60,
        
        }
})

export default ServicesBox;