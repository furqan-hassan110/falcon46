import React from 'react';
import { View,StyleSheet,Text, Image,TextInput,TouchableOpacity } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup'

import Color from '../config/Color';

const validationSchema =Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password: Yup.string().required().matches().label("password"),
    username:Yup.string().required().label("Username")
   
   })

function SignUp({props,navigation}) {
    return (
        <View style={styles.screen}>
         <View style={styles.header}>
             <TouchableOpacity onPress={() => navigation.goBack()}>
             <Image style={styles.backButton} source={require('../assets/back.png')}/>

             </TouchableOpacity>
          <Text style={styles.headertext}>Sign Up with Email</Text>    
         </View> 

         <Formik 
                  initialValues={{email:'',password:'',username:''}}
                  onSubmit={values =>console.log(values)}
                  validationSchema={validationSchema}
                  
                  >
                      {({handleChange,handleSubmit, errors})=> (
                          
                          <>
                          <TextInput style={styles.inputtext} 
                           placeholder={"Email"}
                           placeholderTextColor={Color.primary}
                           keyboardType="email-address"
                           onChangeText={handleChange("email")}
                           autoCorrect={false}
                           autoCapitalize="none"></TextInput>

                           <Text style={{color:'red', marginLeft:30}}>{errors.email}</Text>

                           <TextInput style={styles.inputtext} 
                           placeholder={"Username"}
                           placeholderTextColor={Color.primary}
                           keyboardType="default"
                           onChangeText={handleChange("username")}
                           autoCapitalize="characters"
                           autoCorrect={false}
                           ></TextInput>

                           <Text style={{color:'red', marginLeft:30}}>{errors.username}</Text>
                           
                           <TextInput style={styles.inputtext} 
                           placeholder={"Password"}
                           placeholderTextColor={Color.primary}
                           secureTextEntry={true}
                           onChangeText={handleChange("password")}
                           autoCorrect={false}
                           autoCapitalize="none"></TextInput>

                           <Text style={{color:'red', marginLeft:30}}>{errors.password}</Text>

                           <TouchableOpacity style={styles.login} onPress={() => navigation.navigate("tab")}>
                          
                               <Text style={styles.textin} onPress={handleSubmit} >Continue </Text>
                           
                           </TouchableOpacity>
                           
                          </>
                          
                      )}
                  </Formik>

                  <View style={styles.text}>
                      <Text style={styles.welcometext}>By joining, you agree to Gig Falcon's</Text>
                       <Text style={styles.signuptext}>Terms of Service</Text>
                  </View>



        </View>
    );
}
const styles = StyleSheet.create({
    screen:{
        backgroundColor:Color.white,
        flex:1
    },
    header:{
        width:'100%',
        height:100,
        elevation:10,
        backgroundColor:Color.white,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:40
        
    },
    headertext:{
        fontFamily:'montserrat-semi-bold',
        fontSize:20,
        color:Color.black,
        marginHorizontal:10
    },
    backButton:{
        width:60,
        height:60,
    },
    inputtext:{
        borderBottomWidth:0.5,
        borderBottomColor:Color.lightgray,
        width:'90%',
        alignSelf:'center',
        marginVertical:10
,        color:Color.black
       },
       login:{
        width:'80%',
        height:50,
        borderRadius:20,
        backgroundColor:Color.primary,
        alignSelf:'center',
        marginTop:20,
    },
    textin:{
        fontFamily:'Montserrat-Bold',
        fontSize:16,
        textAlign:'center',
        marginTop:15,
        color:Color.white
        },
        text:{
                  flexDirection:"row",
                  justifyContent:'center',
                  marginTop:30,
                  alignItems:'center',
                  
                  
        },
        signuptext:{
            fontFamily:'Montserrat-Regular',
            color:Color.primary,
            fontSize:11,
            marginLeft:3,
        },
        welcometext:{
            fontFamily:'Montserrat-Regular',
            fontSize:11,
            alignSelf:'center',
            color:Color.lightgray,
            
            },
})
export default SignUp;