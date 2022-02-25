import React , { useState }from 'react';
import { View,StyleSheet, Image, Text, ScrollView, TouchableOpacity, Alert, Dimensions } from 'react-native';


import MainScreen from '../Components/MainScreen';
import PopupScreen from '../Components/PopupScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import Color from '../config/Color';

function AboutPage(props) {
    return (
        <MainScreen> 
           <View style={styles.container}>
           <Icon name="arrowleft" size={25} color={Color.black}/>
           <Text style={styles.header}>JohnCarry</Text>
           </View>
           <PopupScreen>
           <Text style={styles.title}>About</Text>
           <View style={styles.profile}>
           <Image style={styles.pro} source={require('../assets/picture1.jpg')}/>
           <View style={styles.Text}> 
               <Text style={styles.username}>JohnCarry</Text>
                 <View style={{ flexDirection:'row',alignItems:'center'}}>
                     <Icon name="star" size={14} color='#FFD700'/>
                     <Text style={{fontSize:12,color:'#FFD700'}}>5.0</Text>
                     <Text style={{fontSize:12,color:Color.darkgray}}>(2)</Text>
                 </View>
                 </View>
                 </View>
                 
                 <ScrollView horizontal={false} indicatorStyle={false}>

                 <Text style={styles.head}>User information</Text>
                  <Text style={styles.text1}>From</Text>
                  <Text style={styles.text2}>United Kingdom</Text>

                  <Text style={styles.text1}>Member since</Text>
                  <Text style={styles.text2}>Aug 2020</Text>

                  <Text style={styles.text1}>Avg, response time</Text>
                  <Text style={styles.text2}>1 hour</Text>

                  <Text style={styles.text1}>Recent delivery</Text>
                  <Text style={styles.text2}>About 5 days</Text>

                  <Text style={styles.text1}>Last active</Text>
                  <Text style={styles.text2}>Online</Text>

                  <View style={styles.line}/>

                  <Text style={styles.head}>Languages</Text>

                  <Text style={styles.text1}>English</Text>
                  <Text style={styles.text2}>Fluent</Text>

                  <Text style={styles.text1}>Spanish</Text>
                  <Text style={styles.text2}>Fluent</Text>

                  <Text style={styles.text1}>French(francais</Text>
                  <Text style={styles.text2}>Conversational</Text>
                  
                  <View style={styles.line}/>

                  <Text style={styles.head}>Description</Text>

                  </ScrollView>

           </PopupScreen>
       </MainScreen>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginLeft:10,
        marginTop:30
    },
    back:{
        
    },
    header:{
        fontFamily:'montserrat-semi-bold',
        fontSize:23,
        color:Color.black,
        marginLeft:10
    },
    title:{
        fontFamily:'Montserrat-Bold',
        fontSize:20,
        marginTop:15,
        marginHorizontal:15
    },
    profile:{
        flexDirection:'row',
        marginLeft:20,
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
        marginTop:15,
        marginLeft:10
     },
     text1:{
        fontFamily:'Montserrat-Regular',
        fontSize:15,
        color:Color.lightgray,
        marginTop:20,
        marginLeft:20,

     },
     text2:{
        fontFamily:'Montserrat-Bold',
        fontSize:17,
        marginLeft:20,
        marginTop:5,
        color:Color.black,
        marginBottom:15
     },
     line:{
         borderWidth:0.5,
         backgroundColor:Color.darkgray,
         marginVertical:10

     },
})

export default AboutPage;