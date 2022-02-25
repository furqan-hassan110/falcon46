import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    useColorScheme,
    Switch,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    BackHandler,
    KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Buyer_Mode, change_Mode } from '../REDUX/mode';
import { useDispatch, useSelector } from 'react-redux';


const Profile = ({navigation}) => {

    
    const cartItem = useSelector(state => state)
    const dispatch = useDispatch()
    const changeMode = item => dispatch({
        type:change_Mode,
        payload:item
    }) 
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        // changeMode(isEnabled ? 1 : 0)
    }
    
    useEffect(() => {
        console.log("cartItem ======>", cartItem)
    })

    useEffect(() => {
        changeMode(isEnabled ? 1 : 0)
    },[isEnabled])

    const [isSecondEnabled, setIsSecondEnabled] = useState(false);
    const toggleSwitchSecond = () => setIsSecondEnabled(previousState => !previousState);

    const sellerMode = () => {
        return(
            <ScrollView style={{backgroundColor:'white', height:'100%', top:'12%'}}>
                {/* <View style={{top:'-2%'}}>
                        <Text style={styles.generalText_SellerMode}>General</Text>
                </View> */}
                
                <View style={{
                    marginTop:'-1%',
                    width:'100%',
                }}>
                    
                    <Text style={{fontSize:20, color:'black', marginLeft:'5%', fontWeight:'bold',fontFamily:'Montserrat-Regular', paddingBottom:'15%'}}>General</Text>
                    
                <TouchableOpacity style={styles.sellerMode_1} onPress={() => navigation.navigate("ManageOrder")}>
                        <Text style={styles.sellerMode_Text}> Manage Order </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                {/*  */}
                <View style={styles.sellerMode_1}>
                        <Text style={styles.sellerMode_Text}> Show Online Status </Text>
                        <Switch
                         trackColor={{ false: "grey", true: "grey" }}
                         thumbColor={isSecondEnabled ? "black" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchSecond}
                        value={isSecondEnabled}
                        style={{
                            marginRight:'5%'
                        }}
      />
  
                </View>
                <TouchableOpacity style={styles.sellerMode_1} onPress={() => navigation.navigate('Payment')}>
                        <Text style={styles.sellerMode_Text}> Payment </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sellerMode_1}>
                        <Text style={styles.sellerMode_Text}> Invite friends </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sellerMode_1} onPress={() => navigation.navigate('Support')}>
                        <Text style={styles.sellerMode_Text}> Support </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sellerMode_1} onPress={() => navigation.navigate('Postrequest')}>
                        <Text style={styles.sellerMode_Text}> Post a request </Text>    
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                        { isEnabled ? <BuyerMode /> : null}
                </View>
            </ScrollView>
        )
    }

    const BuyerMode = () => {
        return(
            <ScrollView>
                <View style={{
                    marginTop:'0%',
                    width:'100%',
                    // height:'100%',
                }}>
                    <Text style={{fontSize:20, color:'black', marginLeft:'5%', fontWeight:'bold',fontFamily:'Montserrat-Regular', paddingBottom:'15%', }}>My Falcon</Text>
                    </View>
                <TouchableOpacity style={styles.sellerMode_1} onPress={() => navigation.navigate("Earning")}>
                        <Text style={styles.sellerMode_Text}> Earning </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sellerMode_1} onPress={() => navigation.navigate("ManageOrder")}>
                        <Text style={styles.sellerMode_Text}> Manage Order </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sellerMode_1}>
                        <Text style={styles.sellerMode_Text}> Buyer Request </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.sellerMode_1}>
                        <Text style={styles.sellerMode_Text}> Custom offer templates </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity> */}
                {/* <TouchableOpacity style={styles.sellerMode_1} onPress={() => navigation.navigate("BuyerRequest")}>
                        <Text style={styles.sellerMode_Text}> Buyer Request </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.sellerMode_1} >
                        <Text style={styles.sellerMode_Text} onPress={() => navigation.navigate("ShareGig")}> Share Gigs </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sellerMode_1}>
                        <Text style={styles.sellerMode_Text} onPress={() => navigation.navigate("ManageGig")}> Manage Gigs </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sellerMode_1} onPress={() => navigation.navigate("MyProfile")}>
                        <Text style={styles.sellerMode_Text}> My Profile </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.sellerMode_1} onPress={()=>navigation.navigate("GigCreation")}>
                        <Text style={styles.sellerMode_Text}> Gig Creation </Text>
                        <Icon name='chevron-right' style={styles.sellerMode_Icon}/>
                </TouchableOpacity>

            </ScrollView>
        )
    }

    return(
        <SafeAreaView style={{width:'100%', height:'100%'}}>
        <View style={styles.header}>
            <View style={{backgroundColor:'transparent', width:'80%', height:'35%', top:'40%', alignSelf:'center', borderRadius:20}}>
              <View style={styles.first_letter}>
                  <Image source={require('../App/assets/picture2.jpg')} style={styles.profile_thumb}></Image>
              </View>
              
              <Text style={styles.name}>Alyzaidy_10</Text>   
              <Text style={styles.desc}>Personal balance $0</Text>
              </View>
             <Icon name="cog" size={25} color="white" style={styles.icon} onPress={() => navigation.navigate('Setting')}/>     
        </View>
        <View style={styles.centerToggle}>
            
            <Switch style={styles.Switch}
            trackColor={{ false: "grey", true: "grey" }}
            thumbColor={isEnabled ? "black" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={styles.sellerMode}>Seller Side</Text>
        </View>
        {/* <View style={styles.general}>
                <Text style={styles.generalText}>General</Text>
        </View> */}
        <View style={styles.mainView}>
            {sellerMode()}
        </View>
            {/* <View>
            
                <Text>
                        {
                                 isEnabled ? 'Hello' : 'Hello world'
                        }
                </Text>
       
        
            </View> */}
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    
    header:{
        width:"100%",
        height:"30%",
        backgroundColor:'#0fd3bb'
    },
 first_letter:{
        width:60,
        height:60,
        backgroundColor:'white',
        top:'-33%',
        left:'8%',
        marginTop:'10%',
        borderRadius:50
 },
 profile_thumb:{
    width:60,
    height:60,
    borderRadius:50
 },
//  caps:{
//      fontSize:40,
//      textAlign:'center',
//      top:20
//  },
 name:{
     top:'-115%',
    left:'30%',
    fontSize:25,
    padding:2,    
    fontFamily:'Montserrat-Regular'
 },
 desc:{
    top:'-120%',
    fontSize:13,
    left:'30%',
    fontFamily:'Montserrat-Regular'
 },
 icon:{
    position:'absolute',
    right:15,
    
    top:'10%'
 },
 centerToggle:{
     flexDirection:'row',
     justifyContent:'space-between',
     width:'45%',
     height:'5%',
     alignSelf:'center',
     backgroundColor:'transparent',
     marginLeft:'-45%',
     top:'-50%',
     borderRadius:5,
     shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,


 },
 Switch:{
    alignContent:'flex-end',
    
},
 sellerMode:{
     fontSize:13,
     top:'4%',
     marginRight:'35%',
     fontFamily:'montserrat-semi-bold'
 },
//  general:{
//      width:'100%',
//      height:'10%',
//      backgroundColor:'#f8f7f5',
//      bottom:'7%',
//  },
//  generalText:{
//      fontSize:20,
//      marginTop:'8%',
//      marginLeft:'10%',
//      fontWeight:'bold'
//  },
 mainView:{
     width:'100%',
     height:'65%',
     backgroundColor:'#ffffff',
     bottom:'7%'
 },
//  general_SellerMode:{
//       width:'100%',
//       height:'17%',
//       backgroundColor:'#f8f7f5'  
//  }, 
//  generalText_SellerMode:{
//       marginTop:'8%',
//       fontSize:20,
//       fontWeight:'500',
//       marginLeft:'10%'  
//  },

 sellerMode_1:{
     flexDirection:'row',
     justifyContent:'space-between',
     width:'100%',
     bottom:'10%',
     height:50
 },
 sellerMode_Text:{

     fontSize:17,
     marginLeft:'9%',
     marginTop:'4%',
     padding:-5,
     fontFamily:'Montserrat-Regular'
 },
 sellerMode_Icon:{
    fontSize:15,
    marginRight:'9%',
    marginTop:'4%'
 }   
})
