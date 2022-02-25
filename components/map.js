import React, { useEffect, useState,useRef } from 'react'; 
import MapView,{Callout, Marker} from 'react-native-maps';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
   
} from 'react-native';

import {  Tab, Tabs } from 'native-base';
import Color from '../App/config/Color'
import RBSheet from "react-native-raw-bottom-sheet";
import PopUp from '../App/Components/PopUp';
import DropDownFilter from '../App/Components/DropDownFilter';


const initialMapStore={category: [ {feild:'Logo design'},{feild:'Plumber'},{feild:'Electrition'},{feild:'Swiper'},{feild:'Painter'},{feild:'Wallper'}  ],};

    
function Map({navigation,props}) {


    const refRBSheet = useRef();
    const refRBSheet1 = useRef();

    

    const [region, setRegion] = useState({
        latitude: 51.5078788,
        longitude: -0.0877321,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
      });

      const [state, setState]=React.useState(initialMapStore)

     

    return(
        <>
        <SafeAreaView style={{flex:1}}>
        
               <View style={styles.container}>
                   <View style={{flexDirection:'row',alignItems:'flex-start',marginLeft:7,}}>
               <View style={styles.searchbox}>
               <View style={ styles.View}>
               </View>
               <Image style={styles.Iconsearch} source={require("../App/assets/SearchIcon.png")} ></Image>
               <TextInput style={styles.Searchtext}  placeholder="Search" placeholderTextColor="#cdd1ce" ></TextInput>
               </View>
               <Text style={styles.filterText} onPress={() => refRBSheet1.current.open()}>Filter</Text>

               <RBSheet
                ref={refRBSheet1}
                height={650}
                animationType="fade"
                closeOnDragDown={true}
                keyboardAvoidingViewEnabled={true}
                openDuration={350}
                closeOnPressMask={false}
                customStyles={{
                    container: {
                        borderRadius:15,
                        
                        },
                    wrapper: {
                    
                    flex:1,
                    borderRadius:15,
                    },
                    draggableIcon: {
                    backgroundColor: "#000"
                    }
                }}
                >
                   <View style={{flex:1}}>
                       <Text style={styles.filterHeader}>Filter</Text>
                       <DropDownFilter/>
                   </View>
                    </RBSheet>
               </View>
               </View>
               

                <Tabs locked={true} tabContainerStyle={{ elevation: 0, width:'100%', alignSelf:'center',alignContent:'center' }} 
                  tabBarUnderlineStyle={{ backgroundColor: Color.black, height: 3,alignSelf:'center',marginLeft:30,width:120 }}>


                <Tab
                    tabStyle={{ backgroundColor:Color.primary,alignContent:"center", }}
                    activeTabStyle={{ backgroundColor: Color.primary,alignItems:'center',}}
                    textStyle={{ color: '#030303', fontWeight: 'bold' }}
                    activeTextStyle={{ color: '#030303', fontWeight: 'bold', fontSize: 20 }}
                    heading="Location">
                        
                        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
                    <>
                    
                    

                    

                    


                    
                        <MapView

                             style={{width:'100%',height:'100%'}}
                             
                            region={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                              }}
                                
                         >
                             
                    

                             
                             
                            {/* <BottomPopup>
                            </BottomPopup> */}
                                     <Marker style={{height: 35, width:35 }}
                                    coordinate = {{
                                        latitude: 37.78825,
                                        longitude: -122.4324, }}
                                        title='Adam Seller'
                                        image={require('../App/assets/Blue.png')}
                                    style={{ width: 35, height: 35 }}
                                    
                                    />
                           
                                   
                                     <Marker style={{height: 15, width:15}}
                                      coordinate = {{
                                        latitude: 37.78950,
                                        longitude: -122.43350, }}
                                        image={require('../App/assets/Blue.png')}
                                    title='Quatoze Seller'
                                    style={{ width: 15, height: 15 }}
                                    >
                                        <Callout onPress={() => refRBSheet.current.open()}>
                                          
                                        <RBSheet
                                            ref={refRBSheet}
                                            height={350}
                                            animationType="fade"
                                            closeOnDragDown={true}
                                            keyboardAvoidingViewEnabled={true}
                                            openDuration={350}
                                            closeOnPressMask={false}
                                            customStyles={{
                                                container: {
                                                   borderRadius:15,
                                                   
                                                  },
                                              wrapper: {
                                                
                                                flex:1,
                                                borderRadius:15,
                                              },
                                              draggableIcon: {
                                                backgroundColor: "#000"
                                              }
                                            }}
                                            >
                                                <PopUp  image={require('../assets/picture1.jpg')} name='JohnCarry' rating="5" num='(2)'
                                                                country='USA' date='27 april, 2021' time='1 hour'/>
                                                </RBSheet>
                                        </Callout>
                                    </Marker>



                                     <Marker style={{height: 15, width:15}}
                                      coordinate = {{
                                        latitude: 37.78725,
                                        longitude: -122.4374, }}
                                        image={require('../App/assets/Blue.png')}
                                    title='Buyer Johar'
                                    style={{ width: 15, height: 15 }}
                                    />
                                    <Marker style={{height: 15, width:15 }}
                                      coordinate = {{
                                        latitude: 37.78725,
                                        longitude: -122.4350, }}
                                        image={require('../App/assets/Blue.png')}
                                    title='Seller Ali'
                                    style={{ width: 15, height: 15 }}
                                    />
                                    <Marker style={{height: 15, width:15 }}
                                      coordinate = {{
                                        latitude: 37.78925,
                                        longitude: -122.4370, }}
                                        image={require('../App/assets/Blue.png')}
                                    title='Buyer Abbas'
                                    style={{ width: 15, height: 15 }}
                                    />
                                    <Marker style={{height: 15,width:15  }}
                                      coordinate = {{
                                        latitude: 37.78615,
                                        longitude: -122.4324, }}
                                        image={require('../App/assets/RedP.png')}
                                    title='Seller yawar'
                                    style={{ width: 15, height: 15 }}
                                    />
                                    <Marker style={{height: 15,width:15  }}
                                      coordinate = {{
                                        latitude: 37.78700,
                                        longitude: -122.4302, }}
                                        image={require('../App/assets/RedP.png')}
                                    title='Buyer Zawar'
                                    style={{ width: 15, height: 15}}
                                    />
                                    <Marker style={{height: 15, width:15}}
                                      coordinate = {{
                                        latitude: 37.78455,
                                        longitude: -122.4324, }}
                                        image={require('../App/assets/RedP.png')}
                                    title='Seller you'
                                    description='Some Description'
                                    style={{ width: 15, height: 15}}
                                    />
                                    
                                    
                                
                             
                        </MapView>

                       <ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    height={50}
                    style={styles.suggestionView}
                    >
                        {state.category.map((categories,index)=>
                        (
                            <TouchableOpacity style={styles.suggestionbox} key={index}>
                                <Text style={styles.suggestiontext}>{categories.feild}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    </>
                             
                        {/* </ScrollView> */}

                        </Tab>
            <Tab
                    tabStyle={{ backgroundColor: Color.primary ,alignItems:'center' }}
                    activeTabStyle={{ backgroundColor: Color.primary ,alignItems:'center', }}
                    textStyle={{ color: '#030303', fontWeight: 'bold',alignSelf:'center' }}
                    activeTextStyle={{ color: '#030303', fontWeight: 'bold', fontSize: 20,alignSelf:'center' }}
                  tabContainerStyle={{color:'red'}}
                   heading="Categories">
                        

                        
                        <View style={{backgroundColor:Color.primary, flex:1}}>
                        <View style={styles.body}>
                        <View style={styles.container2}  > 
                    
                    <Text style={styles.text1} onPress={() =>navigation.navigate('GraphicsDesign')}  >Graphics & Designs</Text>
                    <Text style={styles.text2}>logo, Branding kits, Art & illustration </Text>
                         
                         </View>
                         <View style={{ borderWidth:0.3,borderColor:Color.lightgray}}/>
                         
                         

                         <View style={styles.container2}> 
                    
                    <Text style={styles.text1}>Digital & Marketing</Text>
                    <Text style={styles.text2}>Social Media Marketing & Social Media Post </Text>
                         
                         </View>
                         <View style={{ borderWidth:0.3,borderColor:Color.lightgray}}/>
                         
                         <View style={styles.container2}> 
                    
                    <Text style={styles.text1}>DATA</Text>
                    <Text style={styles.text2}>Social Media Marketing & Social Media Post </Text>
                         
                         </View>
                         <View style={{ borderWidth:0.3,borderColor:Color.lightgray}}/>

                         <View style={styles.container2}> 
                    
                    <Text style={styles.text1}>Home Cleaning</Text>
                    <Text style={styles.text2}>house work </Text>
                         
                         </View>
                         <View style={{ borderWidth:0.3,borderColor:Color.lightgray}}/>
                         <View style={styles.container2}> 
                    
                    <Text style={styles.text1}>furniture Assembly</Text>
                    <Text style={styles.text2}>Cover chnaging and cleaning </Text>
                         
                         </View>
                         <View style={{ borderWidth:0.3,borderColor:Color.lightgray}}/>
                         <View style={styles.container2}> 
                    
                    <Text style={styles.text1}>Install Wood Flooring</Text>
                    <Text style={styles.text2}>Wooding dacoration and making </Text>
                         
                         </View>
                         <View style={{ borderWidth:0.3,borderColor:Color.lightgray}}/>
                         <View style={styles.container2}> 
                    
                    <Text style={styles.text1}>Plumbing Service</Text>
                    <Text style={styles.text2}>fixing and making</Text>
                         
                         </View>
                         <View style={{ borderWidth:0.3,borderColor:Color.lightgray}}/>
                         <View style={styles.container2}> 
                    
                    <Text style={styles.text1}>Hanging Items</Text>
                    <Text style={styles.text2}>wall frames decoration and making </Text>
                         
                         </View>
                         <View style={{ borderWidth:0.3,borderColor:Color.lightgray}}/>

                         <View style={styles.container2}> 
                    
                    <Text style={styles.text1}>Roof Repair</Text>
                    <Text style={styles.text2}>fixing and making </Text>
                         
                         </View>
                         <View style={{ borderWidth:0.3,borderColor:Color.lightgray}}/>
                         
                             </View>
                         
                        </View>
           
                        </Tab>
                      
                </Tabs>
                 
            

        
        </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({

    filterHeader:{
        fontFamily:'Montserrat-Bold',
        fontSize:22,
        marginHorizontal:10,
    },

    suggestionView:{
        position:'absolute',
        top:Platform.OS === 'ios' ? 90:20,
        paddingHorizontal:10,

    },
    suggestionbox:{
        flexDirection:'row',
        backgroundColor:Color.white,
        borderRadius:20,
        padding:7,
        paddingHorizontal:15,
        marginHorizontal:7,
        height:35,
        width:'auto',

    },
    suggestiontext:{
        fontFamily:'Montserrat-Regular',
        fontSize:15,
        color:Color.black,
    },
    Marker:{
        width:'10%',
        height:"10%",
        shadowColor:Color.black,
    },
    map:{
        width:'100%',
        height:'100%',
    },
    container:{
        width:"100%",
        height:80,
        backgroundColor:Color.primary,
        flexDirection:'column'
        },
        filterText:{
            fontFamily:'montserrat-semi-bold',
            color:Color.white,
            fontSize:15,
            marginTop:35,
            marginLeft:5,
        },
    searchbox:{
        backgroundColor:Color.white,
        width:'85%',
        height:45,
        borderRadius:50,
        marginLeft:2,
        marginTop:23,
        alignItems:'center',
        borderColor:'#e3e3e3',
        borderWidth:1,
        elevation:3,
        flexDirection:'row'
        },
        
        Searchtext:{
            color:Color.lightgray,
            fontSize:17,
            textAlignVertical:'center',
            flex:1,
            fontFamily:'Montserrat-Medium',
            
        },
        Iconsearch:{
            width:50,
            height:50,
            },
        maps:{
            width:'100%',
            height:'100%'
        },
        container2:{
            marginVertical:10,
            alignItems:'center',
            alignItems:'flex-start',
            flexDirection:'column',
            marginLeft:20,
            
            
        },
        
        text1:{
            fontFamily:'montserrat-semi-bold',
            fontSize:15,
            color:Color.black
        },
        text2:{
            fontFamily:'Montserrat-Regular',
            fontSize:10,
            color:Color.black,
            marginBottom:10,
        
        },
        body:{
            width:'100%',
            height:'100%',
            backgroundColor:Color.lightwhite,
            flexDirection:'column',
            justifyContent:'flex-start',
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            position:'absolute',
            paddingTop:10,
            
        },
    })
export default Map
