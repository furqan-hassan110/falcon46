import { NavigationContainer } from '@react-navigation/native';
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



const Notification = ({navigation}) => {
    const [data,setData] = useState([])

    const dummydata=[
        {
          "Id":1, 
          pic:require('../App/assets/picture2.jpg'),
          gigpic:require('../App/assets/yellow.png'),
          description:'            left 5 star feedback',
          title:' Adam'
        },
        {
            "Id":2, 
            pic:require('../App/assets/picture3.jpg'),
            gigpic:require('../App/assets/red.png'),
            description:'          opened a dispute on your order',
            title:' Sara'
          },
          {
            "Id":3, 
            pic:require('../App/assets/picture4.jpg'),
            gigpic:require('../App/assets/green.png'),
            description:'             mark your order as complete',
            title:' Arthur'
          },
          {
            "Id":4, 
            pic:require('../App/assets/picture5.jpg'),
            gigpic:require('../App/assets/black.jpg'),
            description:'          left 5 star feedback',
            title:'  jack'
          },
          {
            "Id":5, 
            pic:require('../App/assets/picture6.jpg'),
            gigpic:require('../App/assets/white.jpg'),
            description:'                 opened a dispute on your order',
            title:' Isabella',
          },
          {
            "Id":6, 
            pic:require('../App/assets/picture3.jpg'),
            gigpic:require('../App/assets/darkgreen.jpg'),
            description:'          left 5 star feedback',
            title:' Sara',
          },{
            "Id":7, 
            pic:require('../App/assets/picture4.jpg'),
            gigpic:require('../App/assets/handdrawn.png'),
            description:'               left 4.9 star feedback',
            title:' Arthur'
          },{
            "Id":8, 
            pic:require('../App/assets/picture6.jpg'),
            gigpic:require('../App/assets/car.jpg'),
            description:'                 you have a new order from ',
            title:' isabella'
          },{
            "Id":9, 
            pic:require('../App/assets/picture3.jpg'),
            gigpic:require('../App/assets/purple.jpg'),
            description:'          left 3.8 star feedback',
            title:' Sara',

          },{
            "Id":10, 
            pic:require('../App/assets/picture5.jpg'),
            gigpic:require('../App/assets/rock.png'),
            description:'               left 5 star feedback',
            title:' Sara',
          }
    
    ];

    useEffect(() => {
        getData()
    },[])

    const getData = () => {
        axios.get(dummydata,{
            params: {
              _limit: 10
             }
          })
        .then((res) => {
        // console.log(res.data)
            setData(res.data)
    })
        .catch((err) => console.log(err.message))
    }
    const renderItem = ({item,index}) => {
        console.log('asdasdasd', item)
        return(
            <TouchableOpacity style={styles.mainView} onPress={() => navigation.navigate('TimeLine',{
                item:item
            })}>
                <Image source={item.pic} style={styles.thumbnail}/>
                <Text style={styles.textData}>{item.description} </Text>
                <Text style={styles.name}>{item.title} </Text>
               <Image source={item.gigpic} style={styles.url}/>
            </TouchableOpacity>
        )
    }
    return(
    <SafeAreaView style={styles.scrollview}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Notifications</Text>
        </View>
        <View style={styles.notification}>
            <View style={styles.today}>
                <Text style={styles.todayText}>TODAY</Text>
            </View>
            <FlatList 
            showsVerticalScrollIndicator={false}
                data ={dummydata}
                renderItem ={renderItem}
                keyExtractor = {item => `key-${item.Id}`}
            />
        </View>
    </SafeAreaView>
    )
}

export default Notification

const styles = StyleSheet.create({
    
    scrollview:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
    },
    header:{
        width:"100%",
        height:"17%",
        backgroundColor:'#0fd3bb',
        // top:-30
    },
    headerText:{
        position:'absolute',
        // bottom:'30%',
        top:23,
        fontSize:25,
        marginLeft:10,
        fontWeight:'bold',
        fontFamily:'Montserrat-Bold'
        
    },
    notification:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        bottom:40
    },
    today:{
        width:'100%',
        alignSelf:'center',
        height:40,
        backgroundColor:'white',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        // top:-35
    },
    todayText:{
        marginLeft:30,
        marginTop:10,
        fontSize:20,
        fontFamily:'montserrat-semi-bold'
    },
    mainView:{
        width:'100%',
        height:'auto',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        padding:5,
        borderRadius:10,
        marginBottom:5,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
}
    },
    thumbnail:{
        width:75,
        height:75,
        borderRadius:10,
        marginLeft:2,
    },
    textData:{
        fontSize:13,
        width:'45%',
        marginLeft:10,
        fontFamily:'Montserrat-Regular'
    },
    name:{
        fontSize:14,
        width:'50%',
        marginLeft:-160,
        top:'-2.5%',
        fontFamily:'montserrat-Regular',
        fontWeight:'bold'
    },
    url:{
        width:75,
        height:75,
        borderRadius:500,
        marginLeft:10,
    }
})