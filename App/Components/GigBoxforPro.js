import React from 'react';
import {View,Text,Image,StyleSheet,  TouchableWithoutFeedback, Alert, ImageBackground} from 'react-native'
import Color from '../config/Color';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';


import { Dimensions } from 'react-native';

const screenwidth = Dimensions.get('window').width;
var Gigwidth=screenwidth/2;



function GigBoxforPro({text,text2,text3,image,style,onPress,navigation, width}) {
    return (
        <TouchableWithoutFeedback  onPress={onPress}>
        <View style={styles.gigsbox}>
        
             <Image style={styles.gigpic} source={(image)}></Image>
             <LinearGradient 
                  colors={['transparent','black']}
                  style={{
                    height: 250,
                    borderRadius:10,
                    width: '100%',
                    position: 'absolute',
                    opacity: 0.9,
                    top: 0,
                    bottom: 30,
                  }}></LinearGradient>
             {/* <View style={styles.gigbody}> */}
                 <View style={styles.gigicon}/>
                 <View style={styles.line}></View>
                 <Text style={styles.gigtext} numberOfLines={1}>{text}</Text>
                 <Text style={styles.servicetext} numberOfLines={2}>{text2}</Text>
                 <Icon name='star' color={'yellow'} style={styles.star}></Icon>
                 <Text style={styles.order} numberOfLines={1}>{text3}</Text>
                 
             {/* </View> */}
             
         </View>
         </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    order:{
        marginTop:-30,
        marginLeft:40,
        color:Color.white,
        fontWeight:'bold',
        fontSize:16,
    },
    gigsbox:{
        top:10,
        flex:1,
        width:"90%",
        height:250,
        backgroundColor:Color.white,
        elevation:7,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomRightRadius:17,
        borderBottomLeftRadius:17,
        marginLeft:18,
        // marginHorizontal:5,
        // marginVertical:20
        },
        gigpic:{
            width:"100%",
            height:"100%",
            borderRadius:10,
        },
        servicetext:{
            color:Color.white,
            //fontWeight:'bold',
            fontSize:14,
            marginTop:-8,
            marginLeft:10,
            
        },
        star:{
        width:"12%",
        height:'12%',
        marginTop:10,
        marginLeft:10,
        fontSize:21,
        },
        gigbody:{
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center',
            
            
            
         } ,
        gigicon:{
            width:35, 
            height:35,
            borderRadius:50, 
            backgroundColor:Color.lightwhite,
            elevation:3,
            marginVertical:-100,
            marginHorizontal:5
        },
        gigtext:{
            height:100,
            fontSize:16,
            fontWeight:'bold',
            fontFamily:'Montserrat-Regular',
            color:'white',
            marginVertical:-60,
            marginLeft:45
        },
        line:{
            width:"100%",
            height:2,
            backgroundColor:Color.darkgray,
            marginTop:128,
        },
})

export default GigBoxforPro;