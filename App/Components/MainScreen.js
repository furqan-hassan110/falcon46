import React from 'react';
import {Text, View,StyleSheet, SafeAreaView, Image } from 'react-native'

function MainScreen({children,style}) {
    return (
        <SafeAreaView style={styles.background}>
        <View style={[style,styles.View]}>{children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:'#0FD3BB',
        flexDirection:'row',
        justifyContent:'center'
      },
      View:{
        flex:1,
        
    },
})
export default MainScreen;