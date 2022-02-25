import React,{useState} from 'react';
import {View, StyleSheet, SafeAreaView, Image, Text, TextInput} from 'react-native';
import { Divider } from 'react-native-elements';
import Color from '../config/Color';
import { List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import  Entypo  from 'react-native-vector-icons/Entypo';
import {Picker} from '@react-native-picker/picker';

function Postrequest({navigation}) {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
    <SafeAreaView>
            <View style={styles.header}>
                <Icon name='arrow-left' style={styles.headerIcon} onPress={() => navigation.goBack()}/>
            <Text style={styles.headerText}>Post a request/Job </Text>
        </View>
        <View>
            <Text style={styles.Money}>Add a description</Text>
            <TextInput
            style={styles.Boxin}
            placeholder={"max 300 words"}
            placeholderTextColor={Color.lightgray}
            textAlign={'left'}
            maxLength={70}
             numberOfLines={2}
            multiline={true}
            />
            <View style={{flexDirection:'column', top:10}}>
            <Text style={styles.Text}>
                Chose a Category      
            </Text>  
            <Picker style={{backgroundColor:'transparent', width:'100%', bottom:7}}
            
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Chose Category" value="def" />
  <Picker.Item label="Digital MArketing" value="java" />
  <Picker.Item label="App Development" value="App" />
  <Picker.Item label="Video Animation" value="Ani" />
  <Picker.Item label="Web Development" value="Web" />
  <Picker.Item label="Content Writing" value="wri" />
</Picker> 
<Divider style={{top:'-20%'}} orientation="vertical" width={5} />
            </View>
            <View>
            <Text style={styles.Text}>
                Chose a Sub-Category      
            </Text>
            <Picker style={{backgroundColor:'transparent', width:'100%', bottom:7}}
            
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Chose Subcateory" value="Def" />
            <Picker.Item label="Digital MArketing" value="java" />
            <Picker.Item label="App Development" value="App" />
            <Picker.Item label="Video Animation" value="Ani" />
            <Picker.Item label="Web Development" value="Web" />
            <Picker.Item label="Content Writing" value="wri" />
          </Picker> 
          <Divider style={{top:'-20%'}} orientation="vertical" width={5} />
          </View>
          <View>
          <Text style={styles.Text1}>
                when would you like your service deliver?     
            </Text>
            <Picker style={{backgroundColor:'transparent', width:'100%', bottom:15}}
            
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="1 Day" value="first" />
            <Picker.Item label="2 Days" value="second" />
            <Picker.Item label="3 Days" value="third" />
            <Picker.Item label="4 Days" value="fourth" />
            <Picker.Item label="5 Days" value="five" />
            <Picker.Item label="6 Days" value="six" />
            <Picker.Item label="7 Days" value="seven" />
            <Picker.Item label="8 Days" value="eight" />
            <Picker.Item label="7 Days" value="nine" />
            <Picker.Item label="8 Days" value="ten" />
          </Picker>
          <Divider style={{top:'-25%'}} orientation="vertical" width={5} />
          </View>
          <View>
          <Text style={styles.Text1}>
                whats your budget?    
            </Text>
            <TextInput
            style={styles.Budget}
            placeholder={"min $5"}
            placeholderTextColor={Color.lightgray}
            textAlign={'left'}
            keyboardType='number-pad'
            maxLength={10}
             numberOfLines={1}
            multiline={true}
            />
            <Text style={styles.Text2}>Budget</Text>
          </View>
        </View>
        
        </SafeAreaView>
    
    );
}
const styles = StyleSheet.create({
    Text2:{
        left:10,
        bottom:35,
        fontSize:15,
        color:'black',
        fontFamily:'Montserrat-Medium',
    },
    Budget:{
        width:"74%",
        left:90,
        borderWidth:1,
        borderTopWidth:1,
        borderColor:'#D3D3D3'
    },
    Text1:{
        left:5,
        bottom:10,
        fontSize:15,
        color:Color.lightgray,
        fontFamily:'Montserrat-Medium',

    },
    header:{
        width:"100%",
        height:"12%",
        backgroundColor:'#0fd3bb'
    },
    headerIcon:{
        position:'absolute',
        bottom:'32%',
        fontSize:20,
        marginLeft:15,
        fontWeight:'bold',
    },
    Boxin:{
        width:'110%',
        height:100,
        borderWidth:1,
        borderColor:Color.lightgray,
        fontFamily:'Montserrat-Regular',
        color:Color.black,
        borderRadius:1,
        padding:7,
        fontSize:15,
        // flexWrap:'wrap',
        // alignItems:'flex-start'
    },
    headerText:{
        position:'absolute',
        bottom:'30%',
        fontSize:20,
        marginLeft:'12%',
        fontWeight:'bold',
        
    },
    Money:{
        marginTop:10,
        left:15,
        fontFamily:'Montserrat-Medium',
        fontSize:20,
        fontWeight:'bold',
        // color:'#0fd3bb'
    },
    title:{
        
        fontFamily:'Montserrat-Regular',
        fontSize:16,
        left:5
    },
    analytic:{
        marginLeft:3,
        fontFamily:'Montserrat-Medium',
        top:20,
        left:5

    },
    
    box2:{
        flexDirection:'row',
        marginTop:95
    },
    box2a:{
        flexDirection:'row',
        marginTop:35
    },
    Text:{
        fontSize:15,
        color:Color.lightgray,
        fontFamily:'Montserrat-Medium',
        left:5
    }
})
export default Postrequest;