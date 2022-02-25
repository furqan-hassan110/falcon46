import React,{useState} from 'react';
import { View,StyleSheet,Image,Text, Pressable } from 'react-native';

import Color from '../config/Color';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



function GigsAbout({image,rate,title,cost}) {

    const [liked, setLiked] = useState(false);

                return (
                <View style={styles.gigbox}>
                    <Image style={styles.gigpic} source={image}/>
                    <View style={{flexDirection:'column'}}>
                        <View style={styles.align}>
                        <Text style={styles.ratetext} >{rate}</Text>
                        <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
                        <MaterialCommunityIcons
                            name={liked ? "heart" : "heart-outline"}
                            size={30}
                            color={liked ? "red" : "black"}
                            style={{top:'30%', left:'45%'}}
                        />
                        </Pressable>
                        {/* <Image style={styles.heart} source={require('../assets/heart.png')}/> */}
                        </View>
                        <Text numberOfLines={3} style={styles.wording}>{title}</Text>

                        <View style={{flexDirection:'row',alignItems:'baseline',marginLeft:'30%'}}>
                        <Text style={styles.from}>From</Text>
                        <Text style={styles.price}>{cost}</Text>
                        </View>
                    </View>
                </View>
    );
}
const styles = StyleSheet.create({
    gigbox:{
        width:'90%',
        height:150,
        borderWidth:0.5,
        alignSelf:'center',
        borderRadius:20,
        marginTop:20,
        borderColor:Color.lightgray,
        flexDirection:'row'
    },
    gigpic:{
        width:'40%',
        height:'100%',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20
    },
    align:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        
    },
    ratetext:{
        fontFamily:'Montserrat-Medium',
        fontSize:14,
        color:Color.black,
        top:'2%',
        

    },

    
    wording:{
        fontFamily:'Montserrat-Medium',
        width:'50%',
        top:'20%',
        marginLeft:10,
    },
    from:{
        fontFamily:'Montserrat-Medium',
        color:Color.darkgray,
        fontSize:13,
        left:'-50%',
        top:'180%'
    },
    price:{
        fontSize:15,
        fontFamily:'Montserrat-Medium',
        color:Color.black,
        top:'180%',
        left:'-10%'
    },
})
export default GigsAbout;