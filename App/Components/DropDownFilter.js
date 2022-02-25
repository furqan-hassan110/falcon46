import React, { useState } from 'react';
import { Text, View,StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';
import Color from '../config/Color';
import { TextInput } from 'react-native-paper';
import { white } from 'react-native-paper/lib/typescript/styles/colors';

// Options data must contain 'item' & 'id' keys

const Service = [
  {
    item:'Flat minimalistic',
    id: '1',
  },
  {
    item:'Hand Drawn',
    id: '2',
  },
  {
    item:'Vintage',
    id: '3',
  },
  {
    item: '3D',
    id: '4',
  },
  
]

const Delivery  = [
  {
    item: '1 Day',
    id: 'one',
  },
  {
    item: '2 Day',
    id: 'two',
  },
  {
    item: '3 Day',
    id: 'three',
  },
  {
    item: '4 Day',
    id: 'four',
  },
  
]

const SellerLevel  = [
  {
    item: 'Beginner',
    id: 'new',
  },
  {
    item: 'Intermediate',
    id: 'two',
  },
  {
    item: 'Expert',
    id: 'three',
  },
  {
    item: 'Professional',
    id: 'four',
  },
  {
    item: 'Gig Falcon Nominated',
    id: 'five',
  },
  
]

const Country  = [
  {
    item: 'Pakistan',
    id: 'new',
  },
  {
    item: 'United State of America (USA)',
    id: 'two',
  },
  {
    item: 'United Kingdom (UK)',
    id: 'three',
  },
  {
    item: 'Germany',
    id: 'four',
  },
  
]
function DropDownFilter() {
  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])

  const [selectedTeam1, setSelectedTeam1] = useState({})
  const [selectedTeams1, setSelectedTeams1] = useState([])

  const [selectedTeam2, setSelectedTeam2] = useState({})
  const [selectedTeams2, setSelectedTeams2] = useState([])

  const [selectedTeam3, setSelectedTeam3] = useState({})
  const [selectedTeams3, setSelectedTeams3] = useState([])
  return (
    <SafeAreaView style={{flex:1,}}>
    <ScrollView>
    
    <SelectBox
      label={false}
      labelStyle={styles.labeltext}
      optionsLabelStyle={styles.labeltext}
      inputFilterContainerStyle={styles.labeltext}
      inputFilterStyle={styles.labeltext}
      optionContainerStyle={styles.labeltext}
      multiOptionsLabelStyle={styles.labeltext}
      listEmptyLabelStyle={styles.labeltext}
      containerStyle={styles.box}

      inputPlaceholder="Service Type"
      options={Service}
      selectedValues={selectedTeams}
      onMultiSelect={onMultiChange()}
      onTapClose={onMultiChange()}
      isMulti

      toggleIconColor={Color.primary}//plus ke colors
      selectedItemStyle={styles.Selected}
      arrowIconColor={Color.primary}
      searchIconColor={Color.primary}
      multiOptionContainerStyle={styles.Selected}
    />

<SelectBox
      label={false}
      labelStyle={styles.labeltext}
      optionsLabelStyle={styles.labeltext}
      inputFilterContainerStyle={styles.labeltext}
      inputFilterStyle={styles.labeltext}
      optionContainerStyle={styles.labeltext}
      multiOptionsLabelStyle={styles.labeltext}
      listEmptyLabelStyle={styles.labeltext}
      containerStyle={styles.box}

      inputPlaceholder="Delivery Time"
      options={Delivery}
      selectedValues={selectedTeams1}
      onMultiSelect={onMultiChange1()}
      onTapClose={onMultiChange1()}
      isMulti
      
      toggleIconColor={Color.primary}//plus ke colors
      selectedItemStyle={styles.Selected}
      arrowIconColor={Color.primary}
      searchIconColor={Color.primary}
      multiOptionContainerStyle={styles.Selected}
    />

<SelectBox
      label={false}
      labelStyle={styles.labeltext}
      optionsLabelStyle={styles.labeltext}
      inputFilterContainerStyle={styles.labeltext}
      inputFilterStyle={styles.labeltext}
      optionContainerStyle={styles.labeltext}
      multiOptionsLabelStyle={styles.labeltext}
      listEmptyLabelStyle={styles.labeltext}
      containerStyle={styles.box}

      inputPlaceholder="Seller Level"
      options={SellerLevel}
      selectedValues={selectedTeams2}
      onMultiSelect={onMultiChange2()}
      onTapClose={onMultiChange2()}
      isMulti
      
      toggleIconColor={Color.primary}//plus ke colors
      selectedItemStyle={styles.Selected}
      arrowIconColor={Color.primary}
      searchIconColor={Color.primary}
      multiOptionContainerStyle={styles.Selected}
    />

<SelectBox
      label={false}
      labelStyle={styles.labeltext}
      optionsLabelStyle={styles.labeltext}
      inputFilterContainerStyle={styles.labeltext}
      inputFilterStyle={styles.labeltext}
      optionContainerStyle={styles.labeltext}
      multiOptionsLabelStyle={styles.labeltext}
      listEmptyLabelStyle={styles.labeltext}
      containerStyle={styles.box}

      inputPlaceholder="Country"
      options={Country}
      selectedValues={selectedTeams3}
      onMultiSelect={onMultiChange3()}
      onTapClose={onMultiChange3()}
      isMulti
      
      toggleIconColor={Color.primary}//plus ke colors
      selectedItemStyle={styles.Selected}
      arrowIconColor={Color.primary}
      searchIconColor={Color.primary}
      multiOptionContainerStyle={styles.Selected}
    />

    <View style={styles.show}>
      <Text style={styles.text1}>Budget</Text>
      <View>

        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={styles.text2I}>Min</Text>
      <TextInput style={styles.feildI} underlineColor={{color:'white'}} placeholder='$'/>
      </View>

      <View  style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={styles.text2}>Max</Text>
      <TextInput style={styles.feild} underlineColor={{color:'white'}} placeholder='$'/>
      </View>
      </View>
    </View>

    </ScrollView>
 
  </SafeAreaView>
)

function onMultiChange() {
  return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
}
function onChange() {
  return (val) => setSelectedTeam(val)
}

function onMultiChange1() {
  return (item) => setSelectedTeams1(xorBy(selectedTeams1, [item], 'id'))
}
function onChange1() {
  return (val) => setSelectedTeam1(val)
}

function onMultiChange2() {
  return (item) => setSelectedTeams2(xorBy(selectedTeams2, [item], 'id'))
}
function onChange2() {
  return (val) => setSelectedTeam2(val)
}

function onMultiChange3() {
  return (item) => setSelectedTeams3(xorBy(selectedTeams3, [item], 'id'))
}
function onChange3() {
  return (val) => setSelectedTeam3(val)
}

}

const styles = StyleSheet.create({
  box:{
    width:'100%',
    borderTopWidth:0.5,
    height:65,
    fontFamily:'Montserrat-Medium',
    paddingTop:10,
    paddingBottom:15,
    paddingLeft:20,
    
  },
  Selected:{
    backgroundColor:Color.primary,
    color:Color.primary,
    
  },
  labeltext:{
    fontFamily:'Montserrat-Medium',
    paddingLeft:10
  },
  show:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:10,
  },
  feild:{
    width:60,
    height:30,
    top:'-30%',
    borderWidth:0.3,
    borderColor:Color.shadegray,
    borderRadius:7,
    backgroundColor:Color.white,
    marginVertical:10,
  },
  feildI:{
    width:60,
    left:'-220%',
    top:'30%',
    height:30,
    borderWidth:0.3,
    borderColor:Color.shadegray,
    borderRadius:7,
    backgroundColor:Color.white,
    marginVertical:10,
  },
  text1:{
    fontFamily:'Montserrat-Bold',
    color:Color.shadegray,
    fontSize:15,
  },
  text2:{
    fontFamily:'Montserrat-Medium',
    top:'-30%',
    left:'-15%',
    fontSize:12,
    color:Color.shadegray,
    marginRight:0,
  },
  text2I:{
    fontFamily:'Montserrat-Medium',
    left:'-230%',
    top:'30%',
    fontSize:12,
    color:Color.shadegray,
    marginRight:0,
  
  }
      

})

export default DropDownFilter;