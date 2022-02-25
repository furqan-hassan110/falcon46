import React from 'react';
import {View,Text,StyleSheet, TouchableWithoutFeedback} from 'react-native'
import Color from "../../config/Color"


function HeadingSeeAll({text,text2,onPress}) {
    return (
        <View style={styles.textview}>
              <Text style={styles.text1}>{text}</Text>
              
              <TouchableWithoutFeedback onPress={onPress} >
              <Text style={styles.text2} >{text2}</Text>
              </TouchableWithoutFeedback>
          </View>
    );
}
const styles = StyleSheet.create({
    textview:{
        flexDirection:'row',
        marginTop:15,
        alignItems:'center'
        },
        text1:{
        fontSize:19,
        textAlign:'left',
        marginLeft:8,
        fontFamily:'Montserrat-Regular',
        color: Color.black
        
           
        },
        text2:{
        fontSize:15,
        color: Color.black,
        position:'absolute',
        marginLeft:'80%',
        fontFamily:'Montserrat-Light', 
        }
})

export default HeadingSeeAll;