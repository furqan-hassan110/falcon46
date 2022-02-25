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

const WritingTranslation = ({navigation}) => {

    const image = require('../assets/logoDesign.png')

    return(
        <SafeAreaView style={{width:'100%', height:'100%'}}>
        <View style={styles.header}>
            <Icon name='arrow-left' style={styles.headerIcon} onPress={() => navigation.goBack()}/>
            </View>
        <View style={styles.notification}>
            <Image source={image} style={styles.imageLogo}/>
            <Text style={styles.headOne}>Writing & Translation</Text>
            <Text style={styles.headTwo}>Have a way with words, get copy translation {"\n"} & editional work from freelancers</Text>
            <TouchableOpacity style={styles.sellerMode_1}>
                        <Text style={styles.sellerMode_Text}> Active and blog posts </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sellerMode_1}>
                        <Text style={styles.sellerMode_Text}> Translation </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sellerMode_1}>
                        <Text style={styles.sellerMode_Text}> Proofreading and Editing </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sellerMode_1}>
                        <Text style={styles.sellerMode_Text}> Resume Writing </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sellerMode_1}>
                        <Text style={styles.sellerMode_Text}> Cover Letters </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sellerMode_1}>
                        <Text style={styles.sellerMode_Text}> LinkedIn profiles </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sellerMode_1}>
                        <Text style={styles.sellerMode_Text}> Social Media Copy </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sellerMode_1}>
                        <Text style={styles.sellerMode_Text}> Email Copy </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sellerMode_1}>
                        <Text style={styles.sellerMode_Text}> Case Studies </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
    
}

export default WritingTranslation

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:"15%",
        backgroundColor:'#0fd3bb'
    },
    headerText:{
        position:'absolute',
        bottom:'45%',
        fontSize:25,
        marginLeft:'15%',
        fontWeight:'bold',
        
    },
    notification:{
        width:'100%',
        height:'100%',
        backgroundColor:'#f8f7f5',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        bottom:20
    },
    headerIcon:{
        position:'absolute',
        bottom:'45%',
        fontSize:25,
        marginLeft:15,
        fontWeight:'bold',
    },
    imageLogo:{
        width:100,
        height:100,
        alignSelf:'center'
    },
    headOne:{
        textAlign:'center',
        fontSize:22,
        fontFamily:'Montserrat-Regular',
    },
    headTwo:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'400'
    },
    sellerMode_1:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        padding:7.5
    },
    sellerMode_Text:{
        fontSize:18,
        marginTop:'4%',
        fontFamily:'Montserrat-Regular'
    },
    sellerMode_Icon:{
       fontSize:20,
       marginTop:'5%',
       color:'grey'
    }
}
)