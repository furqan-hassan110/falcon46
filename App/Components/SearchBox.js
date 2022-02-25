import React from 'react';
import { View,Text,StyleSheet, Image, TextInput } from 'react-native';
import Color from '../config/Color';

function SearchBox({children,style}) {
    return (
        <View style={styles.searchbox}>
         <View style={ styles.View}>
         </View>
         <Image style={styles.Iconsearch} source={require("../assets/SearchIcon.png")} ></Image>
         <TextInput style={styles.Searchtext}  placeholder="Search" placeholderTextColor="#cdd1ce" ></TextInput>
        </View>
    );
}
const styles = StyleSheet.create({
    searchbox:{
        backgroundColor:Color.white,
        width:'90%',
        height:50,
        borderRadius:50,
        marginTop:20,
        alignSelf:'center',
        borderColor:'#e3e3e3',
        borderWidth:1,
        elevation:3,
        flexDirection:'row'
        },
        
        Searchtext:{
            color:Color.lightgray,
            fontSize:17,
            textAlignVertical:'center',
            flex:1,
            fontFamily:'Montserrat-Medium',
            left:'-100%'
        },
        Iconsearch:{
            width:100,
            height:100,
            top:'-7.5%',
            left:'-50%'
            

            
        }
        

})
export default SearchBox;