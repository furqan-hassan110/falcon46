import React , { useState }from 'react';
import { SafeAreaView,View,StyleSheet, Image, Text, ScrollView, TouchableOpacity, Alert, Dimensions } from 'react-native';

import MainScreen from '../Components/MainScreen';
import PopupScreen from '../Components/PopupScreen';
import Color from '../config/Color';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, Item, Input, Button, Tab, Tabs } from 'native-base';
import About from '../Components/About';
import GigsAbout from '../Components/GigAbout';
import ReviewSection from '../Components/ReviewSection';
import ReviewBox from '../Components/ReviewBox';
import GigsBoxes from '../Components/GigsBoxes';
import Gigboxes2 from '../Components/Gigboxes2';
import ResultGig from '../Components/ResultGig';

function BuyerInfo({ navigation,props}) {
    return (
        <>
        <MainScreen>
        <View style={styles.header}>
            <Icon name='arrow-left' size={20} style={styles.headerIcon} onPress={()=>navigation.goBack()}  />
            <Text style={styles.title}>JohnCarry</Text>
            
        </View>

        <PopupScreen>
            <Tabs tabContainerStyle={{ elevation: 0, width:'90%', alignSelf:'center',marginTop:5,alignContent:'center' }} 
                  tabBarUnderlineStyle={{ backgroundColor: '#0fd3bb', height: 0,width:50,marginLeft:30,}}>
                <Tab
                    tabStyle={{ backgroundColor:Color.white, }}
                    activeTabStyle={{ backgroundColor: Color.white, }}
                    textStyle={{ color: '#030303', fontWeight: 'bold' }}
                    activeTextStyle={{ color: '#030303', fontWeight: 'bold', fontSize: 20 }}
                    heading="About">
                    
                        
                            <About
                            image={require('../assets/picture1.jpg')} name='JohnCarry' rating="5" num='(2)'
                            country='USA' date='27 april, 2021' time='1 hour' Lastdelivery=' About 2 days' lastSeen='Online' 
                            Languages1='English' level1='fluent' language2='spanish(espanol)' level2='fluent' language3='French(francias)' level3='conversational'
                            skill1='Abode illustrator' skill2='abode photoshop' skill3='logo desigin'
                            cerficate1='logo designing' from1='arina multi-mdeia 2017' />
                        
                        
                    
                </Tab>
                <Tab
                    tabStyle={{ backgroundColor: Color.white , }}
                    activeTabStyle={{ backgroundColor: Color.white , }}
                    textStyle={{ color: '#030303', fontWeight: 'bold',alignSelf:'center' }}
                    activeTextStyle={{ color: '#030303', fontWeight: 'bold', fontSize: 20,alignSelf:'center' }}
                    heading="Gigs">
                    {/* <Tab2 /> */}
                    
                    <ScrollView horizontal={false} showsVerticalScrollIndicator={false} >
              <View style={{flexDirection:'row', flexWrap:'wrap', alignItems:'flex-start'}}>
                
                

                <GigsBoxes image={require('../assets/red.png')} text={"jauher designs"}
                text2={'I will design best handdrawn logo from your bussiness'}/>
                <Gigboxes2 image={require('../assets/red.png')} text={"flexdesigns"}
                text2={'I will design best handdrawn logo from your bussiness'}/>
                
               

              </View>
              </ScrollView>

                    
                    

                </Tab>
                <Tab
                    tabStyle={{ backgroundColor: Color.white, }}
                    activeTabStyle={{ backgroundColor: Color.white, }}
                    textStyle={{ color: '#030303', fontWeight: 'bold',alignItems:"center",justifyContent:'center' }}
                    activeTextStyle={{ color: '#030303', fontWeight: 'bold', fontSize: 20,alignItems:"center",justifyContent:'center' }}
                    heading="Review">
                    {/* <Tab2 /> */}
                    
                    <ReviewSection 
                    rating1='5.0'
                    rating2='4.9'
                    rating3='4.8'>
                    <ReviewBox
                    userImage={require('../assets/picture2.jpg')}
                    Username='Gelkos'
                    CountryFlag={require('../assets/flag.png')}
                    CountryName='United Kingdom'
                    Ratings='5.0'
                    DeliveryTime='2 days ago'
                    Review='Great! i love the design and services. I would used their serv again for sure.'/>

                    <ReviewBox 
                    userImage={require('../assets/picture3.jpg')}
                    Username='Anna'
                    CountryFlag={require('../assets/flag.png')}
                    CountryName='United Kingdom'
                    Ratings='4.9'
                    DeliveryTime='4 days ago'
                    Review='it was great to work  with them '/>

                    <ReviewBox 
                    userImage={require('../assets/picture4.jpg')}
                    Username='Mark'
                    CountryFlag={require('../assets/flag.png')}
                    CountryName='United Kingdom'
                    Ratings='5.0'
                    DeliveryTime='4 days ago'
                    Review='always great to work with them ,I;m using their servce third time'/>

                    <ReviewBox 
                    userImage={require('../assets/picture5.jpg')}
                    Username='Harry'
                    CountryFlag={require('../assets/flag.png')}
                    CountryName='United Kingdom'
                    Ratings='4.7'
                    DeliveryTime='4 days ago'
                    Review='I think the logo can be better  '/>

                    </ReviewSection>
                    
                </Tab>
            </Tabs>
            </PopupScreen> 
        </MainScreen> 
        </>
    );
}
const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "18%",
        backgroundColor: '#0fd3bb',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },

    title:{
        flex: 1, 
        fontSize: 20,
        fontFamily:'Montserrat-Regular',
        marginLeft:20,
        marginBottom:15

    },
    headerIcon: {
        marginLeft: 15,
        marginBottom:15
    },
})

export default BuyerInfo;