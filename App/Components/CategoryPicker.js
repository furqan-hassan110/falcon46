import React, { Component,useState } from 'react';
import { View,StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Color from '../config/Color';
 
function CategoryPicker({props,marginTop}){
  
    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Graphics Desgning', value: 'apple'},
    {label: 'Wood Work', value: 'banana'},
    {label: 'Writing tranlation', value: 'wrtie'},
    {label: 'teaching', value: 'ball'},
  ]);

  return (
    <>
    
    <DropDownPicker
      placeholder={"Select Category"}
      style={
          {
              borderRadius: 15,
              borderWidth:0.8,
              width:'100%',
              borderColor:Color.primary,
              position:'absolute',
              
              
            }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerStyle={pickerSelectStyles.containerStyle}
      labelStyle={pickerSelectStyles.Selectedtext}
      textStyle={pickerSelectStyles.defaulttext}
      dropDownStyle={pickerSelectStyles.drop}
    //   dropDownContainerStyle={{marginLeft:160}}
      dropDownDirection="BOTTOM"
      
    />
    
    </>
    );
  }


 
const styles = StyleSheet.create({
  box:{
    flex:1,
    backgroundColor:Color.white,
    justifyContent:'center',
    alignItems:'center'
  },
  
})
const pickerSelectStyles = StyleSheet.create({
  
  inputAndroid: {
    borderRadius: 15,
    borderWidth:0.8,
    width:'100%',
    borderColor:Color.primary,
    position:'absolute'
    
    
    },
  containerStyle:{
    width:'90%',
    borderWidth:0, 
    marginTop:190,
   position:'absolute',
   
    
    

    },
    Selectedtext:{
      fontFamily:'montserrat-semi-bold',
      color:Color.primary
    },
    defaulttext:{
      fontFamily:'Montserrat-Regular',
    },
    drop:{
        position:'absolute',
        backgroundColor:Color.lightgray,
        marginLeft:157
    },

 
});

export default CategoryPicker;
