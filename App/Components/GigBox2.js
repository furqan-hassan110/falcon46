import React from 'react';
import {View,Text,Image,StyleSheet,  TouchableWithoutFeedback, Alert, ImageBackground} from 'react-native'
import Color from '../config/Color';
import LinearGradient from 'react-native-linear-gradient';
import  Icon  from 'react-native-vector-icons/AntDesign';

function GigBox2({text,text2,text3,image,style,onPress,navigation}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.gigsbox}>
       
             <Image style={styles.gigpic} source={(image)} /> 
             
             <LinearGradient
                  colors={['transparent','black']}
                  style={{
                    height: 250,
                    borderRadius:10,
                    width: '100%',
                    position: 'absolute',
                    opacity: 0.2,
                    top: 0,
                    bottom: 30,
                  }}></LinearGradient>
                  
                  <View style={{width:250,
                     height:30, 
                     backgroundColor:'white', 
                     top:-30,
                     borderBottomLeftRadius:10,
                     borderBottomRightRadius:10
                     }}>
                         <Text style={{top:5, left:110}}> 1 of 3</Text>
                     </View>
             {/* <View style={styles.gigbody}> */}
                <Icon name='sharealt' size={20} style={{top:-55, left:10}}></Icon>
                <Icon name='download' size={20} style={{top:-77, left:220}}></Icon>
                
                 
               
                 
               
                 
             {/* </View> */}
             
         </View>
         </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    order:{
        marginTop:-22,
        marginLeft:20,
        color:Color.white,
        fontWeight:'bold',
        fontSize:16,
    },
    gigsbox:{
        width:250,
        height:250,
        backgroundColor:Color.white,
        elevation:10,
        
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomRightRadius:17,
        borderBottomLeftRadius:17,
        marginLeft:50,
        marginHorizontal:5,
        marginVertical:20
        },
        gigpic:{
            width:"100%",
            height:"100%",
            borderRadius:10,
        },
        servicetext:{
            color:Color.white,
            //fontWeight:'bold',
            fontSize:16,
            marginTop:-8,
            marginLeft:10
        },
        star:{
        width:"10%",
        height:'10%',
        marginTop:12,
        marginLeft:10,
        },
        gigbody:{
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center',
            
        },
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
            fontSize:18,
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

export default GigBox2;