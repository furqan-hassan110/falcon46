import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Gigbox3 from '../App/Components/Gigbox3';
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
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Swiper from 'react-native-swiper';
import { Container, Header, Item, Input, Button, Tab, Tabs } from 'native-base';
import { List } from 'react-native-paper';
import GigBox2 from '../App/Components/GigBox2';
import GigBox from '../App/Components/GigBox';

const TimeLine = ({ navigation, route }) => {
    const [defaultRating, setDefaulRating] = useState(2)
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])
    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);

    const imageCorner = "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";
    const imageFilled = "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";
    const { item, data } = route.params
    console.log('--->', item)
    console.log('data ---->', data)

    const CustomRating = () => {
        return (
            <View style={styles.customStarRating}>
                {
                    maxRating.map((item, index) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.5}
                                key={item}
                                onPress={() => setDefaulRating(item)}
                            >
                                <Image
                                    style={styles.starImage}
                                    source={
                                        item <= defaultRating ?
                                            { uri: imageFilled }
                                            :
                                            { uri: imageCorner }
                                    }
                                />

                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

    return (
        <SafeAreaView style={{ width: '100%', height: 'auto' }}>
            <View style={styles.header}>
                <Icon name='arrow-left' style={styles.headerIcon} onPress={() => navigation.goBack()} />
                {/* <Text style={{ flex: 1, justifyContent: 'center', top: '38%', left: '15%', fontSize: 20 }}>Name</Text> */}
                <Text style={styles.headerText}>{item == null ? data[0].title : item.title}</Text>
            </View>
            <View style={styles.mainScrollViewStyle}>
                <Tabs tabContainerStyle={{ elevation: 0, width: '90%', alignSelf: 'center', marginTop: 5 }} tabBarUnderlineStyle={{ backgroundColor: '#0fd3bb', height: 3, width:'42%' }}>
                    <Tab
                        tabStyle={{ backgroundColor: '#f8f7f5' }}
                        activeTabStyle={{ backgroundColor: '#f8f7f5' }}
                        textStyle={{ color: '#030303', fontWeight: 'bold' }}
                        activeTextStyle={{ color: '#030303', fontWeight: 'bold', fontSize: 20 }}
                        heading="Timeline">
                        <ScrollView style={styles.box}>
                            <View style={styles.innerBox}>
                                <Image source={require('../App/assets/yellow.png')} style={styles.image} />
                                <Text style={styles.text}>{item == null ? data[0].title : item.title}</Text>
                            </View>
                            <View style={styles.innerBox2}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={{ color: 'black' }}>complete</Text>
                                </TouchableOpacity>
                                <Text style={styles.text2}>$10</Text>
                            </View>
                            {/* <ScrollView> */}
                            <List.Section style={{
                                marginTop:10,
                                backgroundColor:'white',
                                left:'-2%',
                                width:'100%'
                            }}
                            
                            >
                                <List.Accordion
                                style={{width:'70%',
                                height:40,
                                backgroundColor:'white',
                                width:'100%',
                                marginTop:-20,
                            }}
                                    theme={{ colors: { primary: '#0FD3BB' }}}
                                    title="My Review"
                                    left={props => <List.Icon {...props} icon="star" style={{marginTop:-5}} />}
                                    titleStyle={{
                                        fontFamily:'Montserrat-Regular',
                                        fontSize:12,
                                        marginLeft:-10,
                                        marginBottom:10,
                                        
                                    }}
                                    >
                                    <List.Item title={'Wonderfull Experience'} titleNumberOfLines={5} style={{fontFamily:'Montserrat-Regular',backgroundColor:'white', left:-30, height:45, marginTop:5,}}/>
                                    <List.Item title={'Overall Rating'} titleNumberOfLines={4} style={{fontFamily:'Montserrat-Regular',backgroundColor:'white', left:-30,height:45, marginTop:-14,}}/>
                                    <CustomRating />
                                </List.Accordion>
                            </List.Section>
                            
                            {/* <Text style={styles.reviewText}>My review</Text>
                            <Text style={styles.reviewText2}>wonderful experience</Text>
                            <Text style={[styles.reviewText2, { fontSize: 18, top: -10 }]}>Overall Rating</Text>
                            <CustomRating /> */}
                            {/* <ScrollView> */}
                            <List.Section style={{
                                marginTop:5,
                                backgroundColor:'white',
                                left:'-2%',
                                width:'100%'
                            
                               
                            }}
                            >
                                <List.Accordion
                                style={{width:'70%',
                                height:40,
                                backgroundColor:'white',
                                width:'100%'
                                
                            }}
                                    theme={{ colors: { primary: '#0FD3BB' }}}
                                    title="Revision Requested"
                                    left={props => <List.Icon {...props} icon="pen" style={{marginTop:-5}} />}
                                    titleStyle={{
                                        fontFamily:'Montserrat-Regular',
                                        fontSize:12,
                                        marginLeft:-10,
                                        marginBottom:10,
                                        
                                    }}
                                    >
                                        <View>
                                    <List.Item title={'Thanks again for your order! Your delivery is enclosed. If there are any problems, please let us know. we will get back to you as soon as we can'} titleNumberOfLines={5} style={{fontFamily:'Montserrat-Regular', borderRadius:5,width:'95%', left:-15, backgroundColor:'#D3D3D3', borderRadius:10, }}/>
                                    <Gigbox3 image={require('../App/assets/darkgreen.jpg')} text={"juaherdesign"} text2={'We Will paint your home'} text3={'5(25)                $100'}></Gigbox3>
                                 
                                 </View>
                                </List.Accordion>
                            </List.Section>
                            <List.Section style={{
                                marginTop:5,
                                backgroundColor:'white',
                                left:'-2%',
                                
                               
                            }}
                            >
                                <List.Accordion
                                style={{width:'70%',
                                height:40,
                                backgroundColor:'white',
                                width:'100%'
                            }}
                                    title="Here is your delivery"
                                    theme={{ colors: { primary: '#0FD3BB' }}}
                                    left={props => <List.Icon {...props} icon="box" style={{marginTop:-5}} />}
                                    titleStyle={{
                                        fontFamily:'Montserrat-Regular',
                                        fontSize:12,
                                        marginLeft:-10,
                                        marginBottom:10,
                                        
                                    }}
                                    >
                                         <GigBox2  image={require('../App/assets/white.jpg')} text={"juaherdesign"} text2={'We Will weld...!'} text3={'5(25)                $100'} onPress={() =>navigation.navigate('Gigswipper')}/>
                                  
                                </List.Accordion>
                            </List.Section>
                            <List.Section style={{
                                marginTop:5,
                                backgroundColor:'white',
                                left:'-2%',
                                
                               
                            }}
                            >
                                <List.Accordion
                                style={{width:'70%',
                                height:40,
                                backgroundColor:'white',
                                width:'100%'
                            }}
                                    theme={{ colors: { primary: '#0FD3BB' }}}
                                    title="Requirments Received"
                                    left={props => <List.Icon {...props} icon="pencil-box-multiple-outline" style={{marginTop:-5}} />}
                                    titleStyle={{
                                        fontFamily:'Montserrat-Regular',
                                        fontSize:12,
                                        marginLeft:-10,
                                        marginBottom:10,
                                        
                                    }}
                                    >
                                    <List.Item title={'All I need to get started'} titleNumberOfLines={4} style={{fontFamily:'Montserrat-Regular', fontWeight:'bold', marginTop:-10}}/>
                                    <List.Item title={'1. A brief discription of your bussines'} titleNumberOfLines={4} style={{fontFamily:'Montserrat-Regular', fontWeight:'bold', }}/>
                                    <List.Item title={'2. Nmae of the bussiness'} titleNumberOfLines={4} style={{fontFamily:'Montserrat-Regular', fontWeight:'bold', marginTop:-25}}/>
                                    <List.Item title={'3. Slogan/Tagline'} titleNumberOfLines={4} style={{fontFamily:'Montserrat-Regular', fontWeight:'bold', marginTop:-25}}/>
                                    <List.Item titleNumberOfLines={9} title={'4. I want Salubrious Microgreens tastefully around a nice hand drawn picture of a variety of microgreens in an arrangement of some sort. I will provide some photos for you to get an idea for colour ranges and visual dimensions etc for your artwork I need to get the colours of the microgreens incorporated into the design.'} style={{fontFamily:'Montserrat-Regular', fontWeight:'bold', marginTop:-25}}/>
                                </List.Accordion>
                            </List.Section>
                            <List.Section style={{
                                marginTop:5,
                                backgroundColor:'white',
                                left:'-2%',
                               
                               
                            }}
                            >
                                <List.Accordion
                                style={{width:'70%',
                                height:40,
                                backgroundColor:'white',
                                width:'100%'
                            }}
                                    theme={{ colors: { primary: '#0FD3BB' }}}
                                    title="Order Created"
                                    left={props => <List.Icon {...props} icon="paperclip" style={{marginTop:-5}} />}
                                    titleStyle={{
                                        fontFamily:'Montserrat-Regular',
                                        fontSize:12,
                                        marginLeft:-10,
                                        marginBottom:10,
                                        
                                    }}
                                    >
                                    <List.Item title={'september 4, 2021 - Oreder '} titleNumberOfLines={4} style={{fontFamily:'Montserrat-Regular'}}/>
                                    <List.Item title={ '#FO2897TXA12'} titleNumberOfLines={4} style={{fontFamily:'Montserrat-Regular', marginTop:-25}}/>
                                    <Divider orientation="vertical" width={5}  />
                                </List.Accordion>
                            </List.Section>
                            <List.Section style={{
                                marginTop:5,
                                backgroundColor:'white',
                                left:'-2%'
                               
                            }}
                            >
                                <Icon name="date-range" size={30} style={{marginLeft:27}}></Icon>
                                <Text style={{fontFamily:'Montserrat-Regular',
                                        fontSize:12,
                                        marginLeft:60,
                                        marginTop:-17}}>Your delivery date updated to 19/2/2022</Text>
                            {/* <List.Accordion
                                style={{width:'70%',
                                height:40,
                                backgroundColor:'white',
                                width:'100%'
                            }}
                                    theme={{ colors: { primary: '#0FD3BB' }}}                        
                                    title="Your delivery date updated to 19/2/2022"
                                   // left={props => <List.Icon {...props} icon="date-range" style={{marginTop:-5}} />}
                                    titleStyle={{
                                        fontFamily:'Montserrat-Regular',
                                        fontSize:12,
                                        marginLeft:-10,
                                        marginBottom:10,
                                        
                                    }}
                                    >
                                        <List.Item />
                                    
                                    </List.Accordion> */}
                                    </List.Section>
                                {/* </ScrollView> */}
                            </ScrollView>
                        {/* </ScrollView> */}
                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#f8f7f5' }}
                        activeTabStyle={{ backgroundColor: '#f8f7f5' }}
                        textStyle={{ color: '#030303', fontWeight: 'bold' }}
                        activeTextStyle={{ color: '#030303', fontWeight: 'bold', fontSize: 20 }}
                        heading="Chat">
                        {/* <Tab2 /> */}
                        <Text style={{alignSelf:'center', fontSize:30, fontWeight:'bold',color:'lightgrey', top:'10%'}}>Comming Soon</Text>
                    </Tab>
                </Tabs>
            </View>
        </SafeAreaView>
    )
}

export default TimeLine

const styles = StyleSheet.create({
    box1:{
        width:'90%',
        height:'10%',
        color:'grey'
    },
    pic:{
        flex:0.5,
        width:'100%',
        height:'50%',
    },
    header: {
        width: "100%",
        height: "19%",
        backgroundColor: '#0fd3bb',
    },
    searchBar: {
        flexDirection: 'row',
        width: '76%',
        marginLeft: '15%',
        backgroundColor: 'white',
        color: 'black',
        marginTop: '0%',
        borderRadius: 20
    },
    search: {
        paddingLeft: 10,
        
    },
    inputField: {
        paddingLeft: 10
    },
    mainScrollViewStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f7f5',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        bottom: 90
    },
    mainView: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        }
    },
    textData: {
        fontSize: 14,
        width: '50%',
        marginLeft: 10
    },
    search: {
        paddingLeft: 10
    },
    headerIcon: {
        marginBottom:35,
        position: 'absolute',
        bottom: '45%',
        fontSize: 25,
        marginLeft: 15,
        fontWeight: 'bold',
    },
    headerText: {
        position: 'absolute',
        color: 'black',
        bottom: '21%',
        top:'13%',
        fontSize: 18,
        top:'15%',
        marginLeft: '15%',
        fontWeight: '700',
    },
    box: {
        width: '100%',
        height:'100%',
        backgroundColor:'white'
    },
    innerBox: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor:'white'
    },
    image: {
        width: '50%',
        height: 100,
        borderRadius: 10
    },
    text: {
        fontFamily:'Montserrat-Regular',
        fontWeight:'900',
        color:'black',
        width: '50%',
        left: 10,
    },
    innerBox2: {
        flexDirection: 'row',
        width: '50%',
        marginLeft: '50%',
        justifyContent: 'space-between',
        bottom: 45
    },
    button: {
        backgroundColor: '#0fd3bb',
        padding: 3,
        borderRadius: 5,
        left: 10,
        top:'5%'
    },
    text2: {
        right: 10,
        top: 10,
        fontWeight: 'bold'
    },
    reviewText: {
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 18,
        bottom: 25
    },
    reviewText2: {
        bottom: 18,
        marginLeft: 15,
        // fontWeight: '500',
        fontSize: 13
    },
    customStarRating: {
        marginLeft: '12%',
        // alignSelf:'center',
        padding: 5,
        width: '46%',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 0,
        borderRadius: 15,
        borderWidth: 0,
        borderColor: 'grey'
    },
    starImage: {
        top:-10,
        width: 35,
        height: 34,
        resizeMode: 'cover'
    }
})