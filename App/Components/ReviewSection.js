import React from 'react';
import { Text,StyleSheet, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Color from '../config/Color';
import ReviewBox from './ReviewBox.js';



function ReviewSection({rating1,rating2,rating3,children}) {
    return (
        <>
        <Text style={styles.heading}>Overall Rating</Text>
         
         <View style={styles.rating}> 
            <Text style={styles.ratingtext}>Seller Communication</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Icon name="star" size={14} color='#FFD700'/>
              <Text style={{fontSize:15,color:'#FFD700'}}>{rating1}</Text>
          </View>
         </View>

         <View style={styles.rating}> 
            <Text style={styles.ratingtext}>Service as described</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Icon name="star" size={14} color='#FFD700'/>
              <Text style={{fontSize:15,color:'#FFD700'}}>{rating2}</Text>
          </View>
         </View>

         <View style={styles.rating}> 
            <Text style={styles.ratingtext}>Would recommeded</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Icon name="star" size={14} color='#FFD700'/>
              <Text style={{fontSize:15,color:'#FFD700'}}>{rating3}</Text>
          </View>
         </View>

         <View style={styles.line}/>

         <Text style={styles.title}>Ratings</Text>
         <ScrollView>
             {children}
         </ScrollView>
        
        </>
    );
}
const styles = StyleSheet.create({
    heading:{
        fontFamily:'montserrat-semi-bold',
        fontSize:20,
        marginLeft:15,
        marginVertical:10,
    },
    ratingtext:{
        fontFamily:'Montserrat-Regular',
        fontSize:15,
    },
    rating:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:15,
        marginRight:15,
        marginBottom:10,
    },
    line:{
        borderWidth:0.2,
        backgroundColor:Color.lightgray,
        marginVertical:10

    },
    title:{
        fontFamily:'montserrat-semi-bold',
        fontSize:20,
        marginLeft:15,
        marginTop:10,
    },
})
export default ReviewSection;