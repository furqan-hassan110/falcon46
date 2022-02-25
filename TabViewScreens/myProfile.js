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
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, Item, Input, ScrollableTab, Button, Tab, Tabs } from 'native-base';
import { Divider } from 'react-native-elements';
import BuyerInfo from '../App/Screen/BuyerInfo';
import ReviewSection from '../App/Components/ReviewSection';
import ReviewBox from '../App/Components/ReviewBox';
import GigsBoxes from '../App/Components/GigsBoxes';
import Gigboxes2 from '../App/Components/GigsBoxes';
import GigView from '../App/Screen/GigView';
import GigBox from '../App/Components/GigsBoxes';
import GigBoxforPro from '../App/Components/GigBoxforPro';
import GigBoxforPro2 from '../App/Components/GigBoxforPro2';


const MyProfile = ({ navigation, route }) => {
    const imageCorner = "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";
    const imageFilled = "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";
    const AboutProfile = () => {
        return (
            <View>
                <View style={styles.nameInfo}>
                    <View style={styles.nameCircle}>
                        <Text style={styles.textA}>A</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{color:'black', fontWeight:'400', marginLeft:5,fontFamily:'Montserrat-Regular'}}>alyzaidy10</Text>
                        <View style={{ flexDirection: 'row', padding:5 }}>
                            <Image
                                style={styles.starImage}
                                source={
                                    { uri: imageFilled }
                                }
                            />
                            <Text style={styles.colorRating}> 5.0 <Text style={{color:'grey'}}>(2)</Text> </Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.userInfo}>User Information</Text>
                <View style={styles.cityUser}>
                <Text style={[styles.userInfo,{color:'grey', fontWeight:'400'}]}>From</Text>
                <Text style={[styles.userInfo,{color:'black', fontWeight:'500'}]}>United Kingdom (8:04 AM)</Text>                        
                </View>
                <View style={[styles.cityUser]}>
                <Text style={[styles.userInfo,{color:'grey', fontWeight:'400'}]}>Member since</Text>
                <Text style={[styles.userInfo,{color:'black', fontWeight:'500'}]}>Aug 2022</Text>                        
                </View>
                <View style={[styles.cityUser]}>
                <Text style={[styles.userInfo,{color:'grey', fontWeight:'400'}]}>Avg. response time</Text>
                <Text style={[styles.userInfo,{color:'black', fontWeight:'500'}]}>1 hour</Text>                        
                </View>
                <View style={[styles.cityUser]}>
                <Text style={[styles.userInfo,{color:'grey', fontWeight:'400'}]}>Recent delivery</Text>
                <Text style={[styles.userInfo,{color:'black', fontWeight:'500'}]}>about 5 days</Text>                        
                </View>
                <View style={[styles.cityUser]}>
                <Text style={[styles.userInfo,{color:'grey', fontWeight:'400'}]}>last active</Text>
                <Text style={[styles.userInfo,{color:'black', fontWeight:'500'}]}>online</Text>                        
                </View>
                <Divider orientation="vertical" width={50} style={{ width: '100%' }} />
                <Text style={styles.userInfo}>Language</Text>
                <View style={[styles.cityUser]}>
                <Text style={[styles.userInfo,{color:'grey', fontWeight:'400'}]}>English</Text>
                <Text style={[styles.userInfo,{color:'black', fontWeight:'500'}]}>Fluent</Text>                        
                </View>                    
            </View>
        )
    }


    return (
        <SafeAreaView style={{ width: '100%', height:"auto" }}>
            <View style={styles.header}>
                <Icon name='arrow-left' style={styles.headerIcon} onPress={() => navigation.goBack()} />
                <Text style={{ flex: 1,justifyContent: 'center', top: '38%', left: '15%', fontSize: 20,fontFamily:'Montserrat-Regular' }}>alyzaidy10</Text>
            </View>
            <View style={styles.mainScrollViewStyle}>
            
                <Tabs tabContainerStyle={{ elevation: 0, width: '100%', alignSelf: 'center', marginTop: 5 }} tabBarUnderlineStyle={{ backgroundColor: '#0fd3bb', height: 3,marginLeft:20, width:80 }}>
                    <Tab
                        tabStyle={{ backgroundColor: '#f8f7f5' }}
                        activeTabStyle={{ backgroundColor: '#f8f7f5' }}
                        textStyle={{ color: '#030303', fontWeight: 'bold' }}
                        activeTextStyle={{ color: '#030303', fontWeight: 'bold', fontSize: 16 }}
                        
                        heading="About">
                        <AboutProfile />
                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#f8f7f5' }}
                        activeTabStyle={{ backgroundColor: '#f8f7f5' }}
                        textStyle={{ color: '#030303', fontWeight: 'bold' }}
                        activeTextStyle={{ color: '#030303', fontWeight: 'bold', fontSize: 16 }}
                        heading="Gigs">
                        <ScrollView>
                       <GigBoxforPro image={require('../assets/yellow.png')} text={"flexdesigns"} text2={'We Will paint your home'}  text3={'5(25)                                                  $100'} onPress={() =>navigation.navigate('GigView')}/>
                      
                      </ScrollView>
                    </Tab>
                    
                    <Tab
                        tabStyle={{ backgroundColor: '#f8f7f5' }}
                        activeTabStyle={{ backgroundColor: '#f8f7f5' }}
                        textStyle={{ color: '#030303', fontWeight: 'bold' }}
                        activeTextStyle={{ color: '#030303', fontWeight: 'bold', fontSize: 16 }}
                        heading="Reviews">
                        {/* <Tab2 /> */}
                        <ReviewSection 
                    rating1='5.0'
                    rating2='4.9'
                    rating3='4.8'>
                    <ReviewBox
                    userImage={require('../App/assets/picture2.jpg')}
                    Username='Gelkos'
                    CountryFlag={require('../App/assets/flag.png')}
                    CountryName='United Kingdom'
                    Ratings='5.0'
                    DeliveryTime='2 days ago'
                    Review='Great! i love the design and services. I would used their serv again for sure.'/>

                    <ReviewBox 
                    userImage={require('../App/assets/picture3.jpg')}
                    Username='Anna'
                    CountryFlag={require('../App/assets/flag.png')}
                    CountryName='United Kingdom'
                    Ratings='4.9'
                    DeliveryTime='4 days ago'
                    Review='it was great to work  with them '/>

                    <ReviewBox 
                    userImage={require('../App/assets/picture4.jpg')}
                    Username='Mark'
                    CountryFlag={require('../App/assets/flag.png')}
                    CountryName='United Kingdom'
                    Ratings='5.0'
                    DeliveryTime='4 days ago'
                    Review='always great to work with them ,I;m using their servce third time'/>

                    <ReviewBox 
                    userImage={require('../App/assets/picture5.jpg')}
                    Username='Harry'
                    CountryFlag={require('../App/assets/flag.png')}
                    CountryName='United Kingdom'
                    Ratings='4.7'
                    DeliveryTime='4 days ago'
                    Review='I think the logo can be better  '/>

                    </ReviewSection>
                    </Tab>
                </Tabs>
            
            </View>
        </SafeAreaView>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "10%",
        
        backgroundColor: '#0fd3bb',
    },

    mainScrollViewStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f7f5',
        
        top:-10,
        
    },
    headerIcon: {
        position: 'absolute',
        bottom: '28%',
        fontSize: 25,
        marginLeft: 15,
        fontWeight: 'bold',
    },
    headerText: {
        position: 'absolute',
        color: 'grey',
        bottom: '21%',
        fontSize: 16,
        marginLeft: '15%',
        fontWeight: '700',
    },
    nameInfo: {
        flexDirection: 'row',
        padding: 20
    },
    nameCircle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#f2f2f2'
    },
    textA: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 30,
        marginTop: '10%',
        fontWeight: '300',
        fontFamily:'Montserrat-Regular'
    },
    starImage:{
        width:20,
        height:20,
        resizeMode:'cover'
    },
    colorRating:{
        color:'#fabf0b',
        marginLeft:5
    },
    userInfo:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:24,
        fontFamily:'Montserrat-Regular'
    },
    cityUser:{
        padding:5
    }
})