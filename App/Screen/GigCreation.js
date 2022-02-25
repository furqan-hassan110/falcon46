import React, { Component,useState } from 'react';
import { SafeAreaView,Text,View,StyleSheet, TextInput, ViewPropTypes } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import CategoryPicker from '../Components/CategoryPicker';
import DropBox from '../Components/DropBox';
import DropDown from '../Components/DropDown';
import PicturePicker from '../Components/PicturePicker';
import SubCategory from '../Components/SubCategory';
import Color from '../config/Color';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator, createAppContainer } from 'react-navigation';


function GigCreation ({props,navigation}) {

        return (
       <SafeAreaView style={{flex:1,backgroundColor:Color.white}}>
           <Icon name='arrow-left' 
           style={{fontSize:25,marginLeft:15,marginTop:30,}} 
           onPress={()=>navigation.goBack()} />

          <ProgressSteps 
          completedProgressBarColor={Color.primary}
          completedStepIconColor={Color.primary}
          activeStepIconBorderColor={Color.primary}
          activeLabelColor={Color.primary}
           >

        <ProgressStep
        
        nextBtnTextStyle={styles.textnext} 
        nextBtnStyle={styles.Next}
        label="OverView">
            
            
            <View style={styles.page1}>
                <View style={styles.container}>
                    <Text style={styles.title}>GIG TITTLE</Text>
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
                    <Text style={styles.Header} >Category</Text>
                    <Text style={styles.Header2} >SubCategory</Text>
                    
                    <SubCategory/>
                    
                    
                    <CategoryPicker/>
                    
                    </View>
                    
                    
            </View>
        </ProgressStep>

        <ProgressStep
        previousBtnTextStyle={styles.textnext}
        previousBtnStyle={styles.Previous}
        nextBtnTextStyle={styles.textnext} 
        nextBtnStyle={styles.Next} 
        label="Pricing">

                <View style={styles.page1}>
                <View style={styles.container}>
                    <Text style={styles.title1}>Add Discription About your Services</Text>
                    <TextInput style={styles.Box} 
                    placeholder={"Hello It's Abbas working in this feild for ...."}
                    placeholderTextColor={Color.lightgray}
                    textAlign={'left'}
                    textAlignVertical={'top'}
                    selectionColor={Color.primary}
                    maxLength={70}
                    numberOfLines={4}
                    multiline={true}
                    // onChangeText={text => setText(text)}
                    /></View>


                    <View style={styles.PriceBox}>
                        <Text style={styles.title2}>
                            Working Prices
                        </Text>
                        <View style={{flexDirection:'column'}}>
                        <TextInput
                        placeholder={"From  $"}
                        placeholderTextColor={Color.lightgray}
                        style={styles.shortBox}
                        keyboardType="numeric"
                        />
                        <TextInput
                        placeholder={"To $"}
                        placeholderTextColor={Color.lightgray}
                        style={styles.shortBox}
                        keyboardType="numeric"
                        />

                        </View>

                        </View >
                        
                        <View style={{marginTop:20,}} >
                        <Text style={styles.title2}>Working Days </Text>
                        <DropBox/>
                        </View>

                        
                        
                    
                    
            </View>
            
        </ProgressStep>

        <ProgressStep
        previousBtnTextStyle={styles.textnext}
        previousBtnStyle={styles.Previous}
        nextBtnTextStyle={styles.textnext} 
        nextBtnStyle={styles.Next} 
        label="Requirement">
            <View style={styles.container}>
            <Text style={styles.title}>Add Requirment</Text>
                    <TextInput style={styles.Box1} 
                    placeholder={"Hello ! All i need some basic information to get started ....."}
                    placeholderTextColor={Color.lightgray}
                    textAlign={'left'}
                    textAlignVertical={'top'}
                    selectionColor={Color.primary}
                    maxLength={70}
                    numberOfLines={4}
                    multiline={true}
                    // onChangeText={text => setText(text)}
                    />
                    </View>
        </ProgressStep>

        <ProgressStep
        onSubmit={()=>{navigation.goBack();
        }}
        previousBtnTextStyle={styles.textnext}
        previousBtnStyle={styles.Previous}
        nextBtnTextStyle={styles.textnext} 
        nextBtnStyle={styles.Previous} 
        
        label="Gallery">
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title2}>Add Picture of your previous work</Text>

                <View style={{flexDirection:'row'}}>
                    <PicturePicker/>
                    <PicturePicker/>
                    <PicturePicker/>

                </View>
            </View>
        </ProgressStep>

    </ProgressSteps>
       </SafeAreaView>
    );

   }

const styles = StyleSheet.create({
    Next:{
        backgroundColor:Color.primary,
        padding:7,
        width:60,
        borderRadius:10,
        marginRight:-20
    },
    textnext:{
        color:Color.white,
        alignSelf:'center',
        fontFamily:'Montserrat-Regular',
        
    },
    Previous:{
        backgroundColor:Color.primary,
        padding:7,
        width:100,
        borderRadius:10,
        
    },
    Previous:{
        backgroundColor:Color.primary,
        padding:7,
        width:100,
        borderRadius:10,
        marginRight:-20
    },
    page1:{
        flexDirection:'column',
        flex:1,
        height:800,
        
        
    
    },
    container:{
        alignItems:'flex-start',
        marginLeft:10,
        marginVertical:10,
        

            
    },
    title:{
        fontFamily:'Montserrat-Bold',
        fontSize:25,
        paddingBottom:10,
    },
    Box:{
        width:'90%',
        height:100,
        borderWidth:0.5,
        borderColor:Color.lightgray,
        fontFamily:'Montserrat-Regular',
        color:Color.black,
        borderRadius:10,
        fontSize:15,
        flexWrap:'wrap',
        alignItems:'flex-start'
    },
    Header:{
        fontFamily:'Montserrat-Bold',
        fontSize:20,
        marginTop:20,
    
      },
      Header2:{
        fontFamily:'Montserrat-Bold',
        fontSize:20,
        marginTop:80,
      },
      title1:{
        fontFamily:'montserrat-semi-bold',
        fontSize:17,
        paddingBottom:10,
    },
    title2:{
        fontFamily:'montserrat-semi-bold',
        fontSize:17,
        paddingBottom:10,
        marginLeft:10
    },
    shortBox:{
        width:70,
        height:35,
        borderRadius:5,
        borderWidth:0.5,
        marginRight:35,
        borderColor:Color.lightgray,
        marginVertical:5,
        fontFamily:'Montserrat-Regular',
        color:Color.primary


        
    },
    PriceBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,

    },
    Box1:{
        width:'90%',
        height:300,
        borderWidth:0.5,
        borderColor:Color.lightgray,
        fontFamily:'Montserrat-Regular',
        color:Color.black,
        borderRadius:10,
        fontSize:15,
        flexWrap:'wrap',
        alignItems:'flex-start'
    },
})


export default GigCreation;