import React ,{useState} from 'react';
import {StyleSheet,View,Text,TouchableOpacity, SafeAreaView,Image, ImageBackground} from 'react-native';
import Color from '../config/Color';

import ImagePicker from 'react-native-image-crop-picker';





function PicturePicker(props) {
    const [image, setImage ] = useState("");

    const choosePhotoFromGallery =()=> {
        console.warn('Photo Uploaded');
        ImagePicker.openPicker({
            width: 100,
            height: 100,
            cropping: true
          }).then(image => {
            console.log(image);
            setImage(image.path);
          });
    }

    return (
        
            <View style={styles.box}>
                <View style={styles.container}>
                <View style={styles.imageBox}>
                    <ImageBackground source={require("../assets/Add.jpg")}
                    style={{width:100,height:100,}}>

                    </ImageBackground>

                </View>
                <TouchableOpacity style={styles.button}
                onPress={choosePhotoFromGallery}>
                    <Text style={styles.text}>
                        Add Photo 
                    </Text>
                </TouchableOpacity>
                </View>
                
            </View>
            
        
    );
}
 const styles = StyleSheet.create({
     
     box:{
       flex:1,
       backgroundColor:Color.white,
       paddingTop:40,
     },
     container:{
         alignItems:'center'
     },
     imageBox:{
        width:110,
        height:110,
        borderWidth:4,
       
        borderColor:Color.lightwhite,
        alignItems:'center',
        justifyContent:'center',
     },
     button:{
         width:100,
         height:40,
         borderRadius:10,
         backgroundColor:Color.lightwhite,
         marginTop:10,
         alignItems:'center',
         justifyContent:'center'
        
     },
     text:{
        fontFamily:'montserrat-semi-bold',
        fontSize:15,
        color:Color.darkgray
     },
    
 })

export default PicturePicker;