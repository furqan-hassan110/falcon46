import React from 'react';
import { View,StyleSheet, Image,  TouchableHighlight,Text, TouchableOpacity } from 'react-native';
import Color from '../config/Color';



import Colors from '../config/Color';
import MainScreen from './MainScreen';
import PopupScreen from './PopupScreen';



function ChatBox({tittle,subtittle,image,onPress,date}) {
    return (<>
        
        <TouchableOpacity
        onPress={onPress}
        underlayColor={Colors.lightgray}>
        
        <View style={styles.container}>
           
             {image && <Image style={[styles.pro]} source={image}></Image>}
             <View style={styles.iconstyle}>
                 <View style={styles.set}>
                 <Text numberOfLines={1} style={styles.title}>{tittle}</Text>
                 {date &&<Text style={styles.time}>{date}</Text>}
                 </View>
                 {subtittle &&<Text numberOfLines={2} style={styles.subtitle} >{subtittle}</Text>}
             </View>  
             
        </View>
        </TouchableOpacity>
        </>
       
    );
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginLeft:10,
        marginTop:17,
        backgroundColor: Colors.white,
        alignItems:'center',
        marginRight:5,
        
        },

    pro:{
        width:60,
        height:60,
        borderRadius:35,
        backgroundColor:Color.white
         
     }  ,
     set:{
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-between'
     },
     iconstyle :{marginLeft:7,
        justifyContent:'center',
        flex:1 
    } ,
    title:{
        fontFamily:'Montserrat-Medium',
        fontSize:16,
        color:Color.black
        
    },
    subtitle:{
        fontFamily:'Montserrat-Medium',
        fontSize:11,
        color:Color.lightgray,
        marginRight:20,
    },
    time:{
        fontSize:12,
        color:Color.darkgray,
        marginRight:5,
    }

})

export default ChatBox;