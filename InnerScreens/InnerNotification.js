import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Divider } from 'react-native-elements';

function InnerNotification({navigation}) {
    return (<>
        <View style={styles.header}>
            <Icon name='arrow-left' style={styles.headerIcon} onPress={() => navigation.goBack()}/>
            <Text style={styles.HText}>Push Notification</Text>
        </View>
        <View style={styles.notification}>
        <View style={styles.today}>
            <TouchableOpacity>
            <Text style={styles.todayText}>Push Notifications</Text>
            </TouchableOpacity>
        </View>
        <Divider orientation="vertical" width={5} />
        <View style={styles.today}>
            <TouchableOpacity>
            <Text style={styles.todayText}>Email Notification</Text>
            </TouchableOpacity>
        </View>
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'11%',
        backgroundColor:'#0fd3bb'
    },
    headerIcon:{
        position:'absolute',
        bottom:'32%',
        fontSize:20,
        marginLeft:15,
        fontWeight:'bold',
    },
    HText:{
        fontSize:20,
        fontFamily:'Montserrat-Regular',
        left:'12%',
        top:'37%'
    },
    todayText:{
        // marginLeft:33,
        marginTop:10,
        padding:10,
        fontSize:15,
        fontFamily:'Montserrat-Regular',
        color:'grey',
    },
    
})
export default InnerNotification;