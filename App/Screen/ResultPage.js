import React from 'react';
import { StyleSheet,Image,Text, ScrollView,View } from 'react-native';

import {  Tab, Tabs,Header } from 'native-base';
import CategoryBox from '../Components/CategoryBox'
import MainScreen from '../Components/MainScreen';
import PopupScreen from '../Components/PopupScreen';
import Color from '../config/Color';
import GigsAbout from '../Components/GigAbout';
import ResultGig from '../Components/ResultGig';
import Icon from 'react-native-vector-icons/Feather';

function ResultPage({props,navigation}) {
    return (
       <MainScreen>
           
            <Icon name='arrow-left' size={25} style={styles.headerIcon} onPress={()=>navigation.goBack()} />

           <PopupScreen>

               <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{marginBottom:20}}>

               <Text style={styles.firsttext}>Win at social media by hiring a consultant or a
hands-on social media manager and grow your
Facebook, Twitter or Instagram following.</Text>

           <Text style={styles.text2}>Shop By</Text>
              
           <Tabs tabContainerStyle={{ elevation: 0, width:'100%', alignSelf:'center',marginTop:'5%', backgroundColor:Color.white,marginBottom:5,}} 
                  tabBarUnderlineStyle={{ backgroundColor: '#0fd3bb', height: 0,width:50,alignSelf:'center' }}
                  locked={true}>
                <Tab
                    tabStyle={{ backgroundColor:Color.white,borderWidth:0.5,borderColor:Color.lightwhite,borderRadius:10,marginHorizontal:12,elevation:4 }}
                    activeTabStyle={{ backgroundColor: Color.primary,alignItems:'center',borderRadius:12,marginHorizontal:12,elevation:4  }}
                    textStyle={{ color:Color.black, fontFamily:'Montserrat-Regular',fontSize:14 }}
                    activeTextStyle={{ color:Color.white,fontFamily:'montserrat-semi-bold',fontSize:14   }}
                    heading="Service Type">
                    
                    <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.scrollbox}>
                      <CategoryBox>
                       <Image style={styles.icon} source={require('../assets/flaticon.png')}/>
                       <Text style={styles.text}>Flat</Text>
                       </CategoryBox> 
                    
                      <CategoryBox> 
                      <Image style={styles.icon} source={require('../assets/handdrawn.png')}/>
                       <Text style={styles.text}>Hand Drawn</Text>
                      </CategoryBox> 
                     
                      <CategoryBox>
                      <Image style={styles.icon} source={require('../assets/vintage.png')}/>
                      <Text style={styles.text}>Vintage</Text>
                      </CategoryBox> 
                    
                      <CategoryBox>
                      <Image style={styles.icon} source={require('../assets/signature.png')}/>
                      <Text style={styles.text}>Signature</Text>
                      </CategoryBox> 
                     </ScrollView>       
                        
                    
                </Tab>
                <Tab
                    tabStyle={{ backgroundColor: Color.white ,borderWidth:0.5,borderColor:Color.lightwhite,borderRadius:10,elevation:4 }}
                    activeTabStyle={{ backgroundColor: Color.primary ,alignItems:'center',borderRadius:10,elevation:4  }}
                    textStyle={{ color:Color.black, fontFamily:'Montserrat-Regular',fontSize:14 }}
                    activeTextStyle={{  color:Color.white,fontFamily:'montserrat-semi-bold',fontSize:14  }}
                    heading="Delivery Time">
                    {/* <Tab2 /> */}
                   
                    <ScrollView horizontal={true} style={styles.scrollbox}>
                      <CategoryBox>
                       <Image style={styles.icon} source={require('../assets/24hour.png')}/>
                       <Text style={styles.text}>24 Hour</Text>
                       </CategoryBox> 
                    
                      <CategoryBox> 
                      <Image style={styles.icon} source={require('../assets/3days.png')}/>
                       <Text style={styles.text}>3 Days</Text>
                      </CategoryBox> 
                     
                      <CategoryBox>
                      <Image style={styles.icon} source={require('../assets/7days.png')}/>
                      <Text style={styles.text}>7 Days</Text>
                      </CategoryBox> 
                    
                       
                     </ScrollView>  
                    

                </Tab>
                <Tab
                    tabStyle={{ backgroundColor: Color.white,borderWidth:0.5,borderColor:Color.lightwhite,borderRadius:10, marginHorizontal:12,elevation:4 }}
                    activeTabStyle={{ backgroundColor: Color.primary,alignItems:"center",justifyContent:'center',borderRadius:10, marginHorizontal:12,elevation:4  }}
                    textStyle={{ color:Color.black, fontFamily:'Montserrat-Regular',fontSize:14}}
                    activeTextStyle={{  color:Color.white,fontFamily:'montserrat-semi-bold',fontSize:14}}
                    heading="Seller Level">
                    {/* <Tab3 /> */}
                    
                    <ScrollView horizontal={true} style={styles.scrollbox} showsHorizontalScrollIndicator={false}>
                      <CategoryBox>
                       <Image style={styles.icon} source={require('../assets/Beginner.png')}/>
                       <Text style={styles.text}>Beginner</Text>
                       </CategoryBox> 
                    
                      <CategoryBox> 
                      <Image style={styles.icon} source={require('../assets/Intermediate.png')}/>
                       <Text style={styles.text}>Intermediate</Text>
                      </CategoryBox> 
                     
                      <CategoryBox>
                      <Image style={styles.icon} source={require('../assets/Expert.png')}/>
                      <Text style={styles.text}>Expert</Text>
                      </CategoryBox> 
                      <CategoryBox>
                      <Image style={styles.icon} source={require('../assets/Bonded.png')}/>
                      <Text style={styles.text}>Professional</Text>
                      </CategoryBox> 
                      <CategoryBox>
                      <Image style={styles.icon} source={require('../assets/Recommended.png')}/>
                      <Text style={styles.text}>Gig Falcon Nominated</Text>
                      </CategoryBox>
                      <CategoryBox>
                      <Image style={styles.icon} source={require('../assets/Professional.png')}/>
                      <Text style={styles.text}>Gig Falcon Nominated</Text>
                      </CategoryBox> 
                    
                       
                     </ScrollView>
                     
                    
                </Tab>
            </Tabs>
            <View style={{height:300,}}>
                   <ScrollView horizontal={true}  showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false} >
                   <View style={{flexDirection:'row'}}></View>
            

            <ResultGig image={require('../assets/yellow.png')} text={"juaherdesign"} text2={'We Will paint your home'} text3={'5(25)                                           $100'}/>
            <ResultGig image={require('../assets/green.png')} text={"juaherdesign"} text2={'We Will paint your home'} text3={'5(25)                                            $100'}/>
            
            </ScrollView>
</View>

            </ScrollView>
           </PopupScreen>


       </MainScreen>


    );
}
const styles = StyleSheet.create({
    icon:{
            
              width:60,
              height:'87%',
              alignSelf:'center'
              
          },
          

          text:{
              fontFamily:'Montserrat-Regular',
              fontSize:10,
              alignSelf:'center',
        },
        
        firsttext:{
            fontFamily:'Montserrat-Light',
            fontSize:16,
            marginHorizontal:10,
            alignSelf:'center',
            marginVertical:10,
            
        },
        text2:{
            fontFamily:'Montserrat-Bold',
            fontSize:14,
            alignSelf:'center'
        },
        
    
    
        headerIcon: {
            marginLeft: 15,
            marginTop:40,
            
        },
})
export default ResultPage;

