import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import Color from '../config/Color';

function ServiceMenu({text,onPress}) {
    return (
    <View style={styles.Container}>
        <Text style={styles.Option}>{text}</Text>
        <Icon name="chevron-right" size={18} onPress={onPress} />
    </View>
    );
}
const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:18,
        marginRight:18,
        marginBottom:25,

    },
    Option:{
        fontFamily:'Montserrat-Medium',
        fontSize:17,
        color:Color.black
    }
})

export default ServiceMenu;