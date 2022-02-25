import React from 'react';
import {Text, View,StyleSheet, SafeAreaView, Image, ImageBackground, ScrollView,TouchableWithoutFeedback} from 'react-native'
import HeadingSeeAll from '../Components/styles/HeadingSeeAll';
import MainScreen from '../Components/MainScreen';
import PopupScreen from '../Components/PopupScreen';
import SearchBox from '../Components/SearchBox';
import ServicesBox from '../Components/ServicesBox';
import Color from '../config/Color';
import GigBox from '../Components/GigBox';
import { useSelector } from 'react-redux';
import Dashboard from '../../InnerScreens/dashboard';
import { Dimensions } from 'react-native';

const screenwidth = Dimensions.get('window').width;
var Gigwidth=screenwidth/0.5;

function BuyerDash({props, navigation}) {
    const cartItem = useSelector(state => state)
    console.log("cartItem", cartItem)

    const CheckMode = () => {
        if(cartItem == 0){
            return(
                <MainScreen>
                <View style={styles.header}>
               <Image style={styles.logo} source={require("../assets/gigfalcon.png")} />
               </View>
               
               <PopupScreen>
                   <View style={{marginTop:'3%'}}></View>
                   
                   <ScrollView  showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
           
                   <SearchBox ></SearchBox>
                   
                   <View style={styles.textview}>
                        <Text style={styles.text1} >Popular Services </Text>
                        
                        {/* <TouchableWithoutFeedback  >
                        <Text style={styles.text2} >Seemore</Text>
                        </TouchableWithoutFeedback> */}
                    </View>
          
                   <View style={{height:140,}}>
                   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                   <ServicesBox image={require("../assets/logoDesign.png")}
                   text={"logo Design"} onPress={() =>navigation.navigate('ResultPage')}/>
                   <ServicesBox image={require("../assets/MediaMarketing.png")}
                   text={"Media Marketing"} onPress={() => alert('tap')}/>
                   <ServicesBox image={require("../assets/AnimationService.png")}
                   text={"Animation"} onPress={() => alert('tap')}/>
                   <ServicesBox image={require("../assets/Video.png")}
                   text={"Video"} onPress={() => alert('tap')}/>
                   <ServicesBox image={require("../assets/SeoService.png")}
                   text={"SeoService.png"} onPress={() => alert('tap')}/>
                   </ScrollView>
                   </View>
          
                   
                   <View style={styles.textview}>
                        <Text style={styles.text1}>Recently Viewed & More </Text>
                        
                        <TouchableWithoutFeedback onPress={() =>navigation.navigate('RecentlyView')}  >
                        <Text style={styles.text2} >See more</Text>
                        </TouchableWithoutFeedback>
                    </View>
          
                   <View style={{height:300, top:'2%'}}>
                   <ScrollView horizontal={true}  showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false} >
                   <View style={{flexDirection:'row'}}>
                      <GigBox image={require('../assets/yellow.png')} text={"flexdesigns"} text2={'We Will paint your home'}  text3={'5(25)              $100'} onPress={() =>navigation.navigate('GigView')}/>
                      <GigBox image={require('../assets/green.png')} text={"juaherdesign"} text2={'We Will paint your home'}  text3={'5(25)              $100'}/>
                      <GigBox image={require('../assets/red.png')} text={"juaherdesign"} text2={'We Will paint your home'} text3={'5(25)              $100'}/>
                      <GigBox image={require('../assets/yellow.png')} text={"juaherdesign"} text2={'We Will paint your home'} text3={'5(25)              $100'}/>
                   </View>
                   
                   </ScrollView>
                   </View>
                   
          
                   
                   <View style={styles.textview}>
                        <Text style={styles.text1}>Most relevent and Treading </Text>
                        
                        <TouchableWithoutFeedback onPress={() =>navigation.navigate('MostRelevent')}  >
                        <Text style={styles.text2} >See more</Text>
                        </TouchableWithoutFeedback>
                    </View>
          
                  <View style={{height:300, top:'2%'}}>
                  <ScrollView horizontal={true}  showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
                  <View style={{flexDirection:'row', }}>
                     <GigBox image={require('../assets/yellow.png')} text={"flexdesigns"} text2={'We Will paint your home'}  text3={'5(25)              $100'} onPress={() =>navigation.navigate('GigView')}/>
                     <GigBox image={require('../assets/green.png')} text={"juaherdesign"} text2={'We Will paint your home'}  text3={'5(25)              $100'}/>
                     <GigBox image={require('../assets/red.png')} text={"juaherdesign"} text2={'We Will paint your home'} text3={'5(25)              $100'}/>
                     <GigBox image={require('../assets/yellow.png')} text={"juaherdesign"} text2={'We Will paint your home'} text3={'5(25)              $100'}/>
                  </View>
                  </ScrollView>
                  </View>
                   
                  </ScrollView>
                  </PopupScreen>
                  </MainScreen>
            )
        }
        else if (cartItem == 1)
        {
            return(
                <Dashboard />
            )
        }
    }

    return (
            <CheckMode />
    );
            }


const styles = StyleSheet.create({
    
    header:{
        backgroundColor:'#ffff',
        width:'90%',
        height:50,
        borderRadius:50,
        marginTop:20,
        alignSelf:'center',
        justifyContent:'center'
        },
        logo:{
          width:'60%',
          height:40,
          alignSelf:'center'
         },

         
             
        tabbar:{
        width:'100%',
        height:90,
        backgroundColor:Color.white,
        elevation:50,
        marginTop:30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderWidth:0.5,
        borderColor:Color.lightgray
        },
        
                textview:{
                    flexDirection:'row',
                    marginTop:15,
                    alignItems:'center'
                    },
                    text1:{
                    fontSize:19,
                    textAlign:'left',
                    marginLeft:8,
                    fontFamily:'Montserrat-Regular',
                    color: Color.black
                    
                       
                    },
                    text2:{
                    fontSize:12,
                    color: Color.black,
                    position:'absolute',
                    marginLeft:'82%',
                    fontFamily:'Montserrat-Light', 
                    }

         
         
})
export default BuyerDash ;