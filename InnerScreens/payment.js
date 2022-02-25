import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    useColorScheme,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    BackHandler,
    KeyboardAvoidingView,
    FlatList,
} from 'react-native';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MyTabs from '../Route/tabNavigation';




const Payment = ({navigation}) => {

    return(
    <>
    <SafeAreaView style={{width:'100%', height:'100%'}}>
        <View style={styles.header}>
            <Icon name='arrow-left' style={styles.headerIcon} onPress={() => navigation.goBack()}/>
            <Text style={styles.headerText}>Payment</Text>
        </View>
        <View style={styles.notification}>
            <View style={[styles.today,{flexDirection:'row', justifyContent:'space-between'}]}>
                <Text style={styles.todayText}>Currency</Text>
                <Text style={[styles.todayText, {marginRight:'10%', fontWeight:'bold', color:'#0fd3bb',fontFamily:'Montserrat-Regular'}]}>$USD</Text>
            </View>
            <Divider orientation="vertical" width={5} />
            <View style={styles.today}>
                <Text style={styles.todayText}>Paypal single click</Text>
            </View>
            <Divider orientation="vertical" width={5} />
            <View style={styles.today}>
                <Text style={styles.todayText}>Personal balance</Text>
            </View>
            <Divider orientation="vertical" width={5} />
        </View>

    </SafeAreaView>
</>
    )
    
}

export default Payment

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:"15%",
        backgroundColor:'#0fd3bb'
    },
    headerText:{
        position:'absolute',
        bottom:'40%',
        fontSize:25,
        marginLeft:'15%',
        fontFamily:'montserrat-semi-bold'
    },
    notification:{
        width:'100%',
        height:'100%',
        backgroundColor:'#f8f7f5',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        bottom:20
    },
    today:{
        width:'100%',
        height:80,
        backgroundColor:'#f8f7f5',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
    },
    todayText:{
        marginLeft:30,
        marginTop:30,
        fontSize:20,
        fontFamily:'Montserrat-Regular'
    },
    headerIcon:{
        position:'absolute',
        bottom:'45%',
        fontSize:25,
        marginLeft:15,
        fontWeight:'bold',
    }
}
)