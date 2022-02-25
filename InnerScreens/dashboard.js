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
import * as Progress from 'react-native-progress';


const Dashboard = () => {
    const Beginner = require("../App/assets/Beginner.png")
    const Intermediate = require("../App/assets/Intermediate.png") 
    const Expert = require("../App/assets/Expert.png")
    const Bonded = require("../App/assets/Bonded.png")
    const Recommended = require("../App/assets/Recommended.png")
    const Professional = require("../App/assets/Professional.png")
    return(
        <>
    <ScrollView contentContainerStyle={{width:'100%', height:'100%'}}>
        <View style={styles.header}>
           <View style={{flexDirection:'row', justifyContent:'space-between',padding:30}}>
               <Text style={{fontSize:16,fontWeight:'800',fontFamily:'Montserrat-Bold'}}>Alyzaidy10</Text>
               <View style={styles.nameCircle}>
                        <Text style={[styles.textA,{fontFamily:'Montserrat-Regular'}]}>A</Text>
                    </View>
               </View>
        </View>
        <View style={styles.notification}>
            <View style={styles.text_01}>
                    <Text style={styles.text_inner01}>Here's how you're doing</Text>
                    <Icon name='question-circle' size={20}/>
            </View>
            <View style={styles.text_01}>
                    <Text style={styles.text_inner01}>Response rate</Text>
                    <Progress.Bar progress={0.5} width={100} color='black' height={5} style={{height:5, top:10,right:10}} />
                    <Progress.Circle progress={0.5} showsText={true} thickness={2} direction='clockwise' textStyle={{fontSize:7}} size={30} color='black'/>
            </View>
            <View style={styles.text_01}>
                    <Text style={styles.text_inner01}>Order completion</Text>
                    <Progress.Bar progress={0.8} width={100} color='black' height={5} style={{height:5, top:10,right:10}} />
                    <Progress.Circle progress={0.8} showsText={true} textStyle={{fontSize:7}} size={30} color='black'/>
            </View>
            <View style={styles.text_01}>
                    <Text style={styles.text_inner01}>On-time delivery</Text>
                    <Progress.Bar progress={0.2} width={100} color='black' height={5} style={{height:5, top:10,right:10}} />
                    <Progress.Circle progress={0.2} showsText={true} textStyle={{fontSize:7}} size={30} color='black'/>
            </View>
            <View style={styles.text_01}>
                    <Text style={styles.text_inner01}>Positive Rating</Text>
                    <Progress.Bar progress={0.4} width={100} color='black' height={5} style={{height:5, top:10,right:10}} />
                    <Progress.Circle progress={0.4} showsText={true} textStyle={{fontSize:7}} size={30} color='black'/>
            </View>
            <View style={[styles.text_01,{bottom:5}]}>
                    <Text style={styles.text_inner01}>Seller level</Text>
                    {/* <Text>
                        <Text style={{fontSize:15, color:'blue'}}>Level1</Text>
                        <Text> Level2</Text>
                        <Text> top rated</Text>
                       </Text> */}
                       <View style={{flexDirection:'row', bottom:12}}>
                        <TouchableOpacity>
                               <Image source={Beginner} style={{width:30,height:30, resizeMode:'contain'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                               <Image source={Intermediate} style={{width:30,height:30, resizeMode:'contain'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                               <Image source={Expert} style={{width:30,height:30, resizeMode:'contain'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                               <Image source={Bonded} style={{width:30,height:30, resizeMode:'contain'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                               <Image source={Recommended} style={{width:30,height:30, resizeMode:'contain'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                               <Image source={Professional} style={{width:30,height:30, resizeMode:'contain'}}/>
                        </TouchableOpacity>
                       </View>
            </View>
            {/* <View style={[styles.text_01,{bottom:40}]}>
                    <Text style={styles.text_inner01}>Earnings</Text>
                    <Text style={[styles.text_inner01,{fontWeight:'400'}]}>Details</Text>
            </View>   */}
            <View style={styles.box}>
            <View style={[styles.text_01,{padding:0,bottom:10, justifyContent:'space-around'}]}>
                    <Text style={[styles.text_inner01,{fontSize:14, fontWeight:'400'}]}>Personal balance</Text>
                    <Text style={[styles.text_inner01,{fontSize:14, fontWeight:'400'}]}>Earnings in July</Text>
            </View>  
            <View style={[styles.text_01,{padding:0, justifyContent:'space-around'}]}>
                    <Text style={[styles.text_inner01,{fontSize:14, fontWeight:'600'}]}>$16</Text>
                    <Text style={[styles.text_inner01,{fontSize:14, fontWeight:'600'}]}>$4</Text>
            </View> 
            <View style={[styles.text_01,{padding:0, justifyContent:'space-around',marginTop:10}]}>
                    <Text style={[styles.text_inner01,{fontSize:14, fontWeight:'400'}]}>Avg. selling price</Text>
                    <Text style={[styles.text_inner01,{fontSize:14, fontWeight:'400'}]}>Active orders</Text>
            </View>    
            <View style={[styles.text_01,{padding:0, justifyContent:'space-around',marginTop:10}]}>
                    <Text style={[styles.text_inner01,{fontSize:14, fontWeight:'600'}]}>$17.01</Text>
                    <Text style={[styles.text_inner01,{fontSize:14, fontWeight:'600'}]}>1 <Text style={{color:'grey'}}>($5)</Text></Text>
            </View> 
            <View style={[styles.text_01,{padding:0, justifyContent:'space-around',marginTop:10}]}>
                    <Text style={[styles.text_inner01,{fontSize:14, fontWeight:'400'}]}>Pending clearance</Text>
                    <Text style={[styles.text_inner01,{fontSize:14, fontWeight:'400'}]}>Cancelled orders</Text>
            </View>    
            </View>  
        </View>
        </ScrollView>
        </>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:"15%",
        backgroundColor:'#0fd3bb',
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
        backgroundColor:'white',
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
    text_01:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20
    },
    text_inner01:{
        fontSize:18,
        fontWeight:'600',
        fontFamily:'Montserrat-Regular'
    },
    box:{
        width:'95%',
        height:160,
        padding:30,
        marginLeft:'2.5%',
        bottom:10,
        backgroundColor:'white',
        shadowColor: "#000",
        borderRadius:10,
      
    
shadowOffset: {
            width: 0,
            height: 1,
        },
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,
    },
    nameCircle: {
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: '#f2f2f2'
    },
    textA: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 20,
        marginTop: '10%',
        fontWeight: '300',
        fontFamily:'Montserrat-Regular'
    }
})