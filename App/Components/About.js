import React from 'react';
import { View,StyleSheet, Image, Text, ScrollView, TouchableOpacity, Alert, Dimensions } from 'react-native';


import Icon from 'react-native-vector-icons/AntDesign';
import Color from '../config/Color';

function About({image,name,rating,num,country,date,time,
    Lastdelivery,lastSeen,Languages1,language2,
    language3,level1,level2,level3,
    skill1 ,skill2, skill3, skill4,skill5,
    cerficate1,cerficate2,cerficate3,from1,from2,from3}) {
    return (
        <View>
              <ScrollView horizontal={false} indicatorStyle={false}>
           <View style={styles.profile}>
           <Image style={styles.pro} source={image}/>
           <View style={styles.Text}> 
               <Text style={styles.username}>{name}</Text>
                 <View style={{ flexDirection:'row',alignItems:'center'}}>
                     <Icon name="star" size={14} color='#FFD700'/>
                     <Text style={{fontSize:12,color:'#FFD700'}}>{rating}</Text>
                     <Text style={{fontSize:12,color:Color.darkgray}}>{num}</Text>
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

                  <Text style={styles.text1}>Recent delivery</Text>
                  <Text style={styles.text2}>{Lastdelivery}</Text>

                  <Text style={styles.text1}>Last active</Text>
                  <Text style={styles.text2}>{lastSeen}</Text>

                  <View style={styles.line}/>

                  <Text style={styles.head}>Languages</Text>

                  <Text style={styles.text1}>{Languages1}</Text>
                  <Text style={styles.text2}>{level1}</Text>

                  <Text style={styles.text1}>{language2}</Text>
                  <Text style={styles.text2}>{level2}</Text>

                  <Text style={styles.text1}>{language3}</Text>
                  <Text style={styles.text2}>{level3}</Text>
                  
                  <View style={styles.line}/>

                  <Text style={styles.head}>Description</Text>

                  <Text style={styles.head}>Skills</Text>
                  
                  <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:15}}>

                  <View style={{ alignItems: 'baseline',justifyContent:'center' }}>
                  <View style={styles.box}>
                      <Text style={styles.boxtext}>{skill1}</Text>
                  </View>
                  </View>

                  <View style={{ alignItems: 'baseline',justifyContent:'center' }}>
                  <View style={styles.box}>
                      <Text style={styles.boxtext}>{skill2}</Text>
                  </View>
                  </View>

                  <View style={{ alignItems: 'baseline',justifyContent:'center' }}>
                  <View style={styles.box}>
                      <Text style={styles.boxtext}>{skill3}</Text>
                  </View>
                  </View>

                  {skill4 &&<View style={{ alignItems: 'baseline',justifyContent:'center' }}>
                  <View style={styles.box}>
                      <Text style={styles.boxtext}>{skill4}</Text>
                  </View>
                  </View>}

                  {skill5 &&<View style={{ alignItems: 'baseline',justifyContent:'center' }}>
                  <View style={styles.box}>
                      <Text style={styles.boxtext}>{skill5}</Text>
                  </View>
                  </View>}

                  </View>

                  <Text style={styles.head}>Certification</Text>

                  <Text style={styles.text4}>{cerficate1}</Text>
                  <Text style={styles.text5}>{from1}</Text>

                  <Text style={styles.text4}>{cerficate2}</Text>
                  <Text style={styles.text5}>{from2}</Text>

                  <Text style={styles.text4}>{cerficate3}</Text>
                  <Text style={styles.text5}>{from3}</Text>

                  </ScrollView>
                  </View>
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
        marginLeft:10,

     },
     text2:{
        fontFamily:'Montserrat-Bold',
        fontSize:17,
        marginLeft:10,
        marginTop:5,
        color:Color.black,
        marginBottom:15,
    },
    text4:{
        fontFamily:'Montserrat-Regular',
        color:Color.black,
        fontSize:15,
        marginLeft:10,
        marginTop:20,
        marginBottom:8
        },
    text5:{
        fontFamily:'Montserrat-Regular',
        fontSize:12,
        color:Color.darkgray,
        marginLeft:10,
    },
     
     line:{
         borderWidth:0.5,
         backgroundColor:Color.darkgray,
         marginVertical:10

     },
     box:{
         backgroundColor:Color.lightgray,
         height:25,
         marginBottom:5,
         borderRadius:5,
         marginLeft:10,
         marginTop:5
        
         
     },
     boxtext:{
         fontFamily:'montserrat-semi-bold',
         fontSize:13,
         marginHorizontal:8,
         color: Color.white
         
     }
})

export default About;