import React from 'react';
import { Image, View,StyleSheet,Text, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Color from '../config/Color';

function ReviewBox({userImage,Username,CountryFlag,CountryName,Ratings,DeliveryTime,Review}) {
    return (
       <SafeAreaView style={{marginVertical:15,}}>

       <View style={styles.container}>
           <View >
           <Image style={styles.pic} source={userImage}/>
           </View>

           <View style={{marginHorizontal:10}}>
           <Text style={styles.nametext}>{Username}</Text>
             <View style={{flexDirection:'row',marginTop:5,}}>
              <Image style={styles.flagsize} source={CountryFlag}/>
              <Text style={{fontSize:11,fontFamily:'Montserrat-Light',color:Color.darkgray,}}>
                  {CountryName}
               </Text>
             </View>
           </View>
           
           
           <View style={{flexDirection:'column',alignItems:'flex-end',marginLeft:100,}}>
             <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon name="star" size={13} style={{right:'100%'}} color='#FFD700'/>
                 <Text style={{fontSize:13,color:'#FFD700',right:'100%'}}>{Ratings}</Text>
             </View>
              <Text style={styles.timetext}>{DeliveryTime}</Text>
            </View>
       
       </View>
       <Text style={styles.reviewtext}>{Review}</Text>

       </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'flex-start',
        marginLeft:15,
        marginTop:20,
        
        
    },
    pic:{
        width:60,
        height:60,
        borderRadius:35,
         
     },
     nametext:{
         fontFamily:'montserrat-semi-bold',
         fontSize:15,
     },
     flagsize:{
         width:25,
         height:15,
    },
    reviewtext:{
        fontSize:13,
        fontFamily:'Montserrat-Regular',
        flexDirection:'column',
        marginLeft:84,
        marginRight:25,
        
    },
    timetext:{
        fontFamily:'Montserrat-Light', 
        color:Color.darkgray,
         fontSize:11,
         right:'30%'
    },
})
export default ReviewBox;