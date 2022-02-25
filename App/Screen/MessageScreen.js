import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View,} from 'react-native';

import ChatBox from '../Components/ChatBox';
import MainScreen from '../Components/MainScreen';
import PopupScreen from '../Components/PopupScreen';
import SearchBox from '../Components/SearchBox';
import Color from '../config/Color';
import Searchmessae from '../Components/Searchmessae';


const message =[
    {
        id:1,
        title:'JohnCarry',
        description:'hey there, I was wondering if you can help you in my logo ',
        Image:require('../assets/picture1.jpg'),
        date:'Friday'
    },
    {
        id:2,
        title:'harry',
        description:'hey, hope you doing well i was wondering if you can show me some samples of your design so i can decide rather you would be the best option or not ',
        Image:require('../assets/picture2.jpg'),
        date:'Monday'
    },
    {
        id:3,
        title:'Lissa',
        description:'hey? ',
        Image:require('../assets/picture3.jpg'),
        date:'Sep-15'
    },
    {
        id:4,
        title:'Wise',
        description:'hey there, I was wondering if you can help you in my logo ',
        Image:require('../assets/picture4.jpg'),
        date:'Sunday'
    },
    {
        id:5,
        title:'Jame',
        description:'hey,I need some help',
        Image:require('../assets/picture5.jpg'),
        date:'Sunday'
    },
    {
        id:6,
        title:'Anna',
        description:'Are we good to go?',
        Image:require('../assets/picture6.jpg'),
        date:'Sunday'
    },
    {
        id:7,
        title:'Kail',
        description:'OK good! i will talk you later',
        Image:require('../assets/picture1.jpg'),
        date:'Sunday'
    },
    {
        id:8,
        title:'Sam',
        description:'hey, hope you doing well i was wondering if you can show me some samples of your design so i can decide rather you would be the best option or not ',
        Image:require('../assets/picture2.jpg'),
        date:'Sunday'
    },
    {
        id:9,
        title:'Lilly',
        description:'hey, hope you doing well i was wondering if you can show me some samples of your design so i can decide rather you would be the best option or not ',
        Image:require('../assets/picture3.jpg'),
        date:'Sunday'
    },
]

function MessageScreen({props, navigation}) {
    return (
        <>
        <MainScreen >
            <View style={ styles.body}>
                <Text style={styles.text}>Inbox</Text>
                <Text style={styles.filterText} onPress={() => navigation.navigate('FilterInbox')}>Filter</Text>
            </View>
            
             <PopupScreen>
            <ScrollView >
                <View style={{marginTop:70, }}></View>
            </ScrollView>   
                <Searchmessae style={styles.search}></Searchmessae>
               
                <FlatList 
            data={message}
            keyExtractor={message=> message.id.toString ()}
            renderItem={({ item }) => <ChatBox 
            tittle={item.title}
            subtittle={item.description}
            image={item.Image}
            date={item.date}/>}  />
            
            
            
            {/* <View style={styles.tabbar}/> */}
            
            </PopupScreen>
        </MainScreen>
        </>
    );
}
const styles = StyleSheet.create({
    body:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:23,
        alignItems:'center'
        

    },
    text:{
        fontFamily:'montserrat-semi-bold',
        fontSize:27,
        top:10,
        marginLeft:15
    },
    icon:{
        width:70,
        height:70,
        },
    search:{
            height:45,
        },
    tabbar:{
            width:'100%',
            height:90,
            position:'absolute',
            backgroundColor:Color.white,
            elevation:50,
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            borderWidth:0.5,
            borderColor:Color.lightgray
           },
    filterText:{
            fontFamily:'montserrat-semi-bold',
            color:Color.white,
            fontSize:15,
            marginTop:25,
           left:-10
        },
    
})

export default MessageScreen;