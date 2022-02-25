import React, { Component,useState } from 'react';
import { View,StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Color from '../config/Color';
 
function SubCategory(props){
  
    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Logo Design', value: 'apple'},
    {label: 'Door repair', value: 'banana'},
    {label: 'Eassy Writer', value: 'wrtie'},
    {label: 'flyer design', value: 'ball'},
    {label: 'School Teaching', value: 'short'},
  ]);
  


  return (
    <View>
    <DropDownPicker
      placeholder={"Select SubCategory"}
      style={pickerSelectStyles.inputAndroid}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerStyle={pickerSelectStyles.containerStyle}
      labelStyle={pickerSelectStyles.Selectedtext}
      textStyle={pickerSelectStyles.defaulttext}
      dropDownContainerStyle={{marginTop:10,width:'95%'}}
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
  }
})
const pickerSelectStyles = StyleSheet.create({
  
  inputAndroid: {
    borderRadius: 15,
    borderWidth:0.8,
    width:'95%',
    borderColor:Color.primary,
    marginTop:10,
    
    
    
    
    
    },
  containerStyle:{
    width:'95%',
    borderWidth:0,  
    },
    Selectedtext:{
      fontFamily:'montserrat-semi-bold',
      color:Color.primary
    },
    defaulttext:{
      fontFamily:'Montserrat-Regular',
    },

 
});

export default SubCategory;
