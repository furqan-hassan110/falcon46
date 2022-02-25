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
import SelectBox from 'react-native-multi-selectbox';
import Color from '../App/config/Color';
import CheckBox from '@react-native-community/checkbox';
import DropDownPicker from 'react-native-dropdown-picker'
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { color } from 'react-native-elements/dist/helpers';


const Ticket =[
    {
        item:'furqan',
        id:1
    },
    {
        item:'furqan2',
        id:2
    }
]


const MyTicket = ({navigation}) => {
    const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])
  
   return(
    <SafeAreaView>
        <View style={styles.header}>
            <Icon name='arrow-left' style={styles.headerIcon} onPress={() => navigation.goBack()}/>
            <Text style={styles.headerText}>Submit your Ticket </Text>
        </View>
        <View>
        <Text style={{fontFamily:'Montserrat-Regular',fontSize:18, top:'10%',  maxWidth:'90%', alignSelf:'center', color:'lightGrey'}}  numberOfLines={5}>We want your experience to be a perfect if you have any issue with the app or any technical problem, please submit your issues below </Text>
        </View>
        <View style={{top:'10%',borderRadius:1, borderColor:'black',width:'90%', alignSelf:'center'}}>
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
      options={Ticket}
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
</View>
           
         
<TextInput style={styles.Box} 
                    placeholder={"i will make your furniture new"}
                    placeholderTextColor={Color.lightgray}
                    textAlign={'left'}
                    textAlignVertical={'top'}
                    selectionColor={Color.primary}
                    maxLength={70}
                    numberOfLines={4}
                    multiline={true}
                    // onChangeText={text => setText(text)}
                    />
           
           
           <View onStartShouldSetResponder={() => navigation.goBack()} style={{backgroundColor:'#0fd3bb', width:'90%', height:'10%', alignSelf:'center', borderRadius:10, top:'40%'}}>
                <Text style={{alignSelf:'center', top:'20%', color:'white', fontSize:25, fontFamily:'Montserrat-Regular', }}>Submit</Text>
           </View>
           
    </SafeAreaView>
    )
}
function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }
function onChange() {
    return (val) => setSelectedTeam(val)
  }
export default MyTicket

const styles = StyleSheet.create({
    feild:{
    
        width:320,
        height:90,
        top:'20%',
        backgroundColor:'white',
        alignSelf:'center',
        borderWidth:1,
        padding:10,
        paddingVertical:-10,
        borderRadius:7,
        
        
       
      },
      Selected:{
        backgroundColor:Color.primary,
        color:Color.primary,
        
      },
      labeltext:{
        fontFamily:'Montserrat-Medium',
        paddingLeft:10
      },
      box:{
        width:'100%',
        borderTopWidth:0.5,
        height:65,
        fontFamily:'Montserrat-Medium',
        paddingTop:10,
        paddingBottom:15,
        paddingLeft:20,
        
      },
      Box:{
        width:'85%',
        height:100,
        borderWidth:1,
        borderColor:Color.primary,
        fontFamily:'Montserrat-Regular',
        color:Color.black,
        marginTop:90,
        left:'5%',
        borderRadius:10,
        fontSize:15,
        flexWrap:'wrap',
        alignItems:'flex-start'
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
    },
    
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
})