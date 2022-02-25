import React, { useState } from 'react';
import { View,StyleSheet, Image, Text, ScrollView, TouchableOpacity, Alert, Button, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';

import Icon from 'react-native-vector-icons/Feather';
import Color from '../config/Color';




function GigView({props,navigation}) {
    
    return (
        <SafeAreaView style={{flex:1}}>
            <Swiper showsPagination={false}  horizontal={true} decelerationRate="fast">
           
           <Image style={styles.pic} source={require('../assets/yellow.png')}/>
           <Image style={styles.pic} source={require('../assets/red.png')}/>
           <Image style={styles.pic} source={require('../assets/green.png')}/>
           
           </Swiper>
           <Icon style={styles.back} name="arrow-left" size={30} onPress={()=>navigation.goBack()}/>
             <View style={styles.box}>
                <View style={styles.container}>
                 <Image style={styles.pro} source={require('../assets/picture1.jpg')}/>
                 <View style={styles.iconstyle}>
                 <View style={styles.set}>
                 <Text numberOfLines={1} style={styles.title}>JohnCarry</Text>
                  <Text style={styles.time}>Contact</Text>
                 </View>
                 <Text numberOfLines={2} style={styles.subtitle} >Level 1 Seller</Text>
                 </View>
                 </View>
                 <ScrollView horizontal={false}>
                 <View style={styles.textbox}>
                     <Text style={ styles.text1}>Design the best minimalist logo for Business </Text>
                     
                     <Text  style={styles.text2}> {`
Hello,
Are you looking for the best and Professional hand drawn logo design? Then welcome, you are in the right place, we are Quatorze company providing you the best handdrawn logos

Why choose us?

- Because Quatorze is in this field for about more than 4 years.
- Quatorze believes in complete customer satisfaction.
- Quick and positive responses
- 100% satisfaction guarantee.
- Unlimited revisions until your complete satisfaction`}</Text>
                 <View style={styles.Button} >
                     <Text style={styles.more} onPress={()=>navigation.navigate('BuyerInfo')}>more</Text>
                 </View>


                 </View>
                 </ScrollView>
             </View>
            </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    pic:{
        flex:0.5,
        width:'100%',
        height:'100%',
    },
    back:{
        position:'absolute',
        marginTop:20,
        marginLeft:10,
    },
    box:{
        backgroundColor:Color.white,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        width:'100%',
        height:'60%',
        position:'absolute',
        marginTop:'80%',
        flexDirection:'column'        

    },
    container:{
        flexDirection:'row',
        marginLeft:10,
        marginTop:17,
        backgroundColor: Color.white,
        alignItems:'center',
        marginRight:5
        },
        pro:{
            width:60,
            height:60,
            borderRadius:35,
            backgroundColor:Color.white
             
         }  ,
         iconstyle :{marginLeft:7,
            justifyContent:'center',
            flex:1 
        } ,
        set:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
        },
        
        title:{
            fontFamily:'montserrat-semi-bold',
            fontSize:20,
            color:Color.black
            
        },
        subtitle:{
            fontFamily:'Montserrat-Medium',
            fontSize:11,
            color:Color.lightgray,
            marginRight:20,
        },
        time:{
            fontSize:15,
            color:Color.primary,
            fontFamily:'montserrat-semi-bold',
            marginRight:30,
        },
        textbox:{
            flexDirection:'column',
            marginTop:15,
            marginHorizontal:10
        },
        text1:{
            fontFamily:'montserrat-semi-bold',
            fontSize:20
        },
        text2:{
            fontFamily:'Montserrat-Regular',
            fontSize:14,
        },
        Button:{
            marginBottom:40,
            backgroundColor:Color.primary,
            alignSelf:'flex-end',
            width:60,
            height:25,
            borderRadius:40,
            alignItems:'center',
            justifyContent:'center'
        },
        more:{
            fontSize:15,
            fontFamily:'montserrat-semi-bold',
            color:Color.white
        }
})

export default GigView;