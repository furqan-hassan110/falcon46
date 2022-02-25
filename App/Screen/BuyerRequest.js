import React from 'react';
import { SafeAreaView,StyleSheet,Text,TouchableOpacity,View } from 'react-native';
import Color from '../config/Color';
import { Container, Header, Item, Input, Button, Tab, Tabs } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

function BuyerRequest({props,navigation}) {
    return (
       <SafeAreaView style={styles.Container}>
           <View style={styles.head}>
           <Icon style={styles.back} name="arrow-left" size={30} onPress={()=>navigation.goBack()} />
               <Text style={styles.text}>Buyer Request</Text>
           </View>

           <Tabs tabContainerStyle={{ elevation: 0, width:'100%', alignSelf:'center',marginTop:5,alignContent:'center' }} 
                  tabBarUnderlineStyle={{ backgroundColor: '#0fd3bb', height: 3,width:150,marginLeft:30,}}>
                      <Tab
                    tabStyle={{ backgroundColor:Color.white, }}
                    activeTabStyle={{ backgroundColor: Color.white, }}
                    textStyle={{ color: '#030303', fontWeight: 'bold' }}
                    activeTextStyle={{ color: '#030303', fontWeight: 'bold', fontSize: 20 }}
                    heading="Active">
                        <TouchableOpacity style={styles.Button} onPress={()=>console.warn('No Request Fund')}>
                            <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,}}>Refresh</Text>
                        </TouchableOpacity>

                    </Tab>

                    <Tab
                    tabStyle={{ backgroundColor: Color.white , }}
                    activeTabStyle={{ backgroundColor: Color.white , }}
                    textStyle={{ color: '#030303', fontWeight: 'bold',alignSelf:'center' }}
                    activeTextStyle={{ color: '#030303', fontWeight: 'bold', fontSize: 20,alignSelf:'center' }}
                    heading="Offered">

                        <Text style={styles.offer}> No Request Offer</Text>
                        </Tab>
                  </Tabs>
       </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    Container:{
        backgroundColor:Color.white,
        flex:1,
     },
     head:{
         width:'100%',
         height:70,
         backgroundColor:Color.white,
         elevation:7,
         flexDirection:'row',
         alignItems:'center'
     },
     text:{
        fontFamily:'Montserrat-Bold',
        fontSize:25,
        marginLeft:-40,
        marginTop:-9
     },
     back:{
        width:80,
        height:80,
        marginTop:40,
    },
    Button:{
        width:70,
        height:30,
        borderRadius:7,
        backgroundColor:Color.primary,
        alignItems:'center',
        justifyContent:'center',
        position:"absolute",
        marginTop:500,
        marginLeft:20,
    },
    offer:{
        fontSize:20,
        fontFamily:'Montserrat-Regular',
        color:Color.lightgray,
        alignSelf:'center',
        marginTop:20,
    },
})
export default BuyerRequest;