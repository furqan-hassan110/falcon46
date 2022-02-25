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
import CheckBox from '@react-native-community/checkbox';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { color } from 'react-native-elements/dist/helpers';

const Report = ({navigation}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
   return(
    <SafeAreaView>
        <View style={styles.header}>
            <Icon name='arrow-left' style={styles.headerIcon} onPress={() => navigation.goBack()}/>
            <Text style={styles.headerText}>Report </Text>
        </View>
        <View>
        <Text style={{fontFamily:'Montserrat-Regular',fontSize:18, top:'10%',  maxWidth:'90%', alignSelf:'center', color:'lightGrey'}}  numberOfLines={5}>We want your experience to be a perfect if you have any issue with the app or any technical problem, please submit your issues below </Text>
        </View>
        <View style={styles.today}>
                <CheckBox
            style={{left:'85%', top:'60%'}}
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
                <Text style={styles.todayText}>App is not working</Text>
            </View>
          
           <View style={{backgroundColor:'grey', height:1, width:310, alignSelf:'center', top:'3%'}}></View>
           <View style={styles.today}>
                <CheckBox
            style={{left:'85%', top:'60%'}}
    disabled={false}
    value={toggleCheckBox1}
    onValueChange={(newValue) => setToggleCheckBox1(newValue)}
  />
                <Text style={styles.todayText}>Issues with category or product</Text>
            </View>
           <View style={{backgroundColor:'grey', height:1, width:310, alignSelf:'center', top:'3%'}}></View>
           <View style={styles.today}>
                <CheckBox
            style={{left:'85%', top:'60%'}}
    disabled={false}
    value={toggleCheckBox2}
    onValueChange={(newValue) => setToggleCheckBox2(newValue)}
  />
                <Text style={styles.todayText}>Other</Text>
            </View>
           <View style={{backgroundColor:'grey', height:1, width:310, alignSelf:'center', top:'3%'}}></View>
           <TextInput style={styles.feild} underlineColor={{color:'white'}} placeholder='Describe Your Issue' pla placeholderTextColor={'black'}/>
           
           <View onStartShouldSetResponder={()=>navigation.goBack()} style={{backgroundColor:'#0fd3bb',justifyContent:'center',alignItems:'center', width:'65%', height:'10%', alignSelf:'center', borderRadius:10, top:'20%'}}>
                <Text style={{  color:'white', fontSize:25, fontFamily:'Montserrat-Regular', }}>Submit</Text>
           </View>
           
    </SafeAreaView>
    )
}

export default Report

const styles = StyleSheet.create({
    feild:{
    
        width:320,
        height:90,
        top:'10%',
        alignSelf:'center',
        borderWidth:1,
        padding:10,
        paddingVertical:-10,
        borderRadius:7,
        
       
      },
    todayText:{
        marginLeft:20,
        marginTop:20,
        fontSize:15,
        fontFamily:'Montserrat-Regular',
        color:'grey',
    },
    header:{
        width:"100%",
        height:"10%",
        backgroundColor:'#0fd3bb'
    },
    headerText:{
        position:'absolute',
        bottom:'30%',
        fontSize:20,
        marginLeft:'12%',
        fontWeight:'bold',
        
    },
    headerIcon:{
        position:'absolute',
        bottom:'32%',
        fontSize:20,
        marginLeft:15,
        fontWeight:'bold',
    }
}
)