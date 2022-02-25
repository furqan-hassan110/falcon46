import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import  AntDesign  from 'react-native-vector-icons/AntDesign';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

function ShareIcon(props) {
    return (
       <SafeAreaView style={{top:13}}>
        <View style={{flexDirection:'row',}}>
        <View style={{backgroundColor:'white', width:30, height:30, borderRadius:15,left:130, marginTop:-10, position:'relative'}}>
         <AntDesign color={'#0fd3bb'} name='sharealt' size={20} style={{ marginTop:3, marginLeft:4}}/>
        {/* <View style={{backgroundColor:'white', width:30, height:30, borderRadius:15,left:-125, marginTop:-25, position:'relative'}}>
        <MaterialCommunityIcons color={'#0fd3bb'} name='dots-horizontal' size={25} style={{ marginTop:1, marginLeft:2.5}}/>
        </View> */}
        </View>
        </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    
})
export default ShareIcon;