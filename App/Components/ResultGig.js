import React, {useState} from 'react';
import {View,Text,Image,StyleSheet,  TouchableWithoutFeedback,Pressable, Alert, ImageBackground} from 'react-native'
import Color from '../config/Color';
import LinearGradient from 'react-native-linear-gradient';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


const screenwidth = Dimensions.get('window').width;
var Gigwidth=screenwidth/1.2;



function ResultGig({text,text2,text3,image,style,onPress,nafvigation, width}) {
    const [liked, setLiked] = useState(false);
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.gigsbox}>
        <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
                        <MaterialCommunityIcons
                            name={liked ? "heart" : "heart-outline"}
                            size={30}
                            color={liked ? "red" : "white"}
                            style={{ left:'45%'}}
                        />
                        </Pressable>
        
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
        marginTop:-22,
        marginLeft:40,
        color:Color.white,
        fontWeight:'bold',
        fontSize:16,
    },
    gigsbox:{
        width:Gigwidth,
        height:250,
        backgroundColor:Color.white,
        elevation:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomRightRadius:17,
        borderBottomLeftRadius:17,
        marginLeft:30,
        marginRight:4,
        marginHorizontal:5,
        marginVertical:20
        },
        gigpic:{
            width:"100%",
            height:"100%",
            borderRadius:10,
            top:'-13%'
        },
        servicetext:{
            color:Color.white,
            //fontWeight:'bold',
            fontSize:14,
            marginTop:-20,
            marginLeft:45
        },
        star:{
        width:"10%",
        height:'10%',
        marginTop:14,
        marginLeft:10,
        fontSize:25
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
            marginVertical:-120,
            marginHorizontal:5
        },
        gigtext:{
            height:100,
            fontSize:18,
            fontWeight:'bold',
            fontFamily:'Montserrat-Regular',
            color:'white',
            marginVertical:-55,
            marginLeft:45
        },
        line:{
            width:"100%",
            height:2,
            backgroundColor:Color.darkgray,
            marginTop:138,
        },
})

export default ResultGig;