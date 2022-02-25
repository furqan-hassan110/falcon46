import React, { Component,useState } from 'react';
import { View,StyleSheet,Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Color from '../config/Color';

function DropBox(props) {

    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Monday', value: 'apple'},
    {label: 'Tuesday', value: 'banana'},
    {label: 'Wednesday', value: 'wrtie'},
    {label: 'Thusday', value: 'ball'},
    {label: 'Friday', value: 'short'},
    {label: 'Saturday', value: 'short2'},
    {label: 'Sunday', value: 'shortr'},
  ]);
  
 
  const [open1, setOpen1] = useState(false);
const [value1, setValue1] = useState(null);
const [items1, setItems1] = useState([
  {label: 'Monday', value: '1'},
  {label: 'Tuesday', value: '2'},
  {label: 'Wednesday', value: '3'},
  {label: 'Thusday', value: '4'},
  {label: 'Friday', value: '5'},
  {label: 'Saturday', value: '6'},
  {label: 'Sunday', value: '7'},
]);
    return (
        <View style={{flexDirection:"row",flex:1, }}>
           

    <DropDownPicker
      placeholder={"From"}
      style={pickerSelectStyles.inputAndroid}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    //   containerStyle={pickerSelectStyles.containerStyle}
      labelStyle={pickerSelectStyles.Selectedtext}
      textStyle={pickerSelectStyles.defaulttext}
      dropDownContainerStyle={{marginTop:10,width:'30%'}}
      dropDownDirection="BOTTOM"
     
    />
    <DropDownPicker
      placeholder={"To"}
      style={pickerSelectStyles.inputAndroid1}
      open={open1}
      value={value1}
      items={items1}
      setOpen={setOpen1}
      setValue={setValue1}
      setItems={setItems1}
    //   containerStyle={pickerSelectStyles.containerStyle}
      labelStyle={pickerSelectStyles.Selectedtext}
      textStyle={pickerSelectStyles.defaulttext}
      dropDownContainerStyle={{marginTop:10,width:'30%',marginLeft:-240}}
      dropDownDirection="BOTTOM"
     
    />
    
    </View>
    );
}
const styles = StyleSheet.create({
    box:{
        flex:1,
        backgroundColor:Color.white,
        justifyContent:'center',
        alignItems:'center'
      },
      down :{
          marginBottom:30,
      },
      title2:{
        fontFamily:'montserrat-semi-bold',
        fontSize:17,
        paddingBottom:10,
        marginLeft:10
    },
})
const pickerSelectStyles = StyleSheet.create({
  
    inputAndroid: {
      borderRadius: 15,
      borderWidth:0.8,
      width:'30%',
      borderColor:Color.primary,
      marginTop:10,
      },
      inputAndroid1: {
        borderRadius: 15,
        borderWidth:0.8,
        width:'30%',
        borderColor:Color.primary,
        marginTop:10,
        marginLeft:-240
        
        },
    containerStyle:{
      width:'40%',
      borderWidth:0, 
     },
      Selectedtext:{
        fontFamily:'montserrat-semi-bold',
        color:Color.primary,
        fontSize:13,
      },
      defaulttext:{
        fontFamily:'Montserrat-Regular',
        color:Color.lightgray
        
      },
      
  
   
  });
export default DropBox;