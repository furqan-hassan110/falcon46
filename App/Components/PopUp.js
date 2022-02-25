import React, { Component } from "react";
import { Image,View, Button,Text,StyleSheet, ScrollView } from "react-native";
import Color from "../config/Color";
import Icon from 'react-native-vector-icons/AntDesign';
 
function PopUp({image,name,rating,num,country,date,time,
    }) {
    return (
        <View style={styles.box}>
         <View style={styles.profile}>
           <Image style={styles.pro} source={image}/>
           <View style={styles.Text}> 
               <Text style={styles.username}>{name}</Text>
                 <View style={{ flexDirection:'row',alignItems:'center'}}>
                     <Icon name="star" size={14} color='#FFD700'/>
                     <Text style={{fontSize:12,color:'#FFD700'}}>{rating}</Text>
                     <Text style={{fontSize:12,color:Color.darkgray}}>{num}</Text>
                     <Text style={styles.text4}>Contact</Text>
                 </View>
                 
                 </View>
                 </View>
                 
                 

                 <Text style={styles.head}>User information</Text>
                  <Text style={styles.text1}>From</Text>
                  <Text style={styles.text2}>{country}</Text>

                  <Text style={styles.text1}>Member since</Text>
                  <Text style={styles.text2}>{date}</Text>

                  <Text style={styles.text1}>Avg, response time</Text>
                  <Text style={styles.text2}>{time}</Text>
         </View>
         
       
      
    );
  
}

const styles = StyleSheet.create({
    box:{
     flexDirection:'column',
    },
    profile:{
        flexDirection:'row',
        marginLeft:10,
        marginTop:15,
        alignItems:'center'
    },
    pro:{
        width:60,
        height:60,
        borderRadius:35,
        backgroundColor:Color.white
         
     },
     Text:{
         flexDirection:'column',
         marginLeft:10,
         
     },
     username:{ 
         fontFamily:'Montserrat-Regular',
         fontSize:15,
         marginBottom:8
     },
     head:{
        fontFamily:'Montserrat-Bold',
        fontSize:18,
        marginTop:12,
        marginLeft:10
     },
     text1:{
        fontFamily:'Montserrat-Regular',
        fontSize:15,
        color:Color.lightgray,
        marginTop:10,
        marginLeft:10,

     },
     text2:{
        fontFamily:'Montserrat-Bold',
        fontSize:17,
        marginLeft:10,
        marginTop:2,
        color:Color.black,
        marginBottom:15,
    },
    text4:{
        fontFamily:'Montserrat-Bold',
        fontSize:15,
        color:Color.primary,
        marginLeft:160,
    }
})

export default PopUp;