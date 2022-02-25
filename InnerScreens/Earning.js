import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Divider } from 'react-native-elements';
import  Entypo  from 'react-native-vector-icons/Entypo';

function Earning({navigation}) {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Icon name='arrow-left' style={styles.headerIcon} onPress={() => navigation.goBack()}/>
            <Text style={styles.headerText}>Earning </Text>
        </View>
        <View>
            <Text style={styles.Money}>$100</Text>
            <Text style={styles.title}>My balance</Text>
            <Text style={{left:285,color:'#0fd3bb', top:-20,fontFamily:'Montserrat-Medium'}}>withdraw</Text>
            <Text style={styles.analytic}>Analytics</Text>
            <Divider style={{top:'14%'}} orientation="vertical" width={5} />
            <View style={{flexDirection:'column', top:30}}>
                <View style={styles.box}>
                    <Text style={{fontFamily:'Montserrat-Medium', color:'grey'}}>Earning in february</Text>
                    <Text style={{marginLeft:187,fontFamily:'Montserrat-Medium',color:'grey'}}>$10</Text>
                </View>
                <View style={styles.box}>
                    <Text style={{fontFamily:'Montserrat-Medium', color:'grey'}}>Active Orders</Text>
                    <Text style={{marginLeft:215,fontFamily:'Montserrat-Medium',color:'grey'}}>1($50)</Text>
                </View>
                <View style={styles.box}>
                    <Text style={{fontFamily:'Montserrat-Medium', color:'grey'}}>Available for withdrawal</Text>
                    <Text style={{marginLeft:153,fontFamily:'Montserrat-Medium',color:'grey'}}>$70</Text>
                </View>
                <View style={styles.box}>
                    <Text style={{fontFamily:'Montserrat-Medium', color:'grey'}}>Completed order</Text>
                    <Text style={{marginLeft:167,fontFamily:'Montserrat-Medium',color:'grey'}}>20($300)</Text>
                </View>
                <Divider style={{top:'10%'}} orientation="vertical" width={5} />
                <Text style={{fontFamily:'Montserrat-Medium', top:30, fontSize:15,left:5}}>Revenue</Text>
                <Divider style={{top:'30%'}} orientation="vertical" width={5} />
            </View>
        </View>
        <View style={{flexDirection:'column',}}>
                <View style={styles.box2}>
                    <Text style={{fontFamily:'Montserrat-Medium', color:'grey',left:5}}>Cancelled orders</Text>
                    <Text style={{marginLeft:187,fontFamily:'Montserrat-Medium',color:'red'}}>-$10</Text>
                    <Entypo name='chevron-small-right' size={25} style={{top:-5}}></Entypo>
                </View>
                <Divider style={{top:'8%'}} orientation="vertical" width={5} />
                <View style={styles.box2a}>
                    <Text style={{fontFamily:'Montserrat-Medium', color:'grey', left:5}}>withdraw</Text>
                    <Text style={{marginLeft:240,fontFamily:'Montserrat-Medium',color:'#0fd3bb'}}>$110</Text>
                    <Entypo name='chevron-small-right' size={25} style={{top:-5}}></Entypo>
                </View>
                <Divider style={{top:'8%'}} orientation="vertical" width={5} />
                <View style={styles.box2a}>
                    <Text style={{fontFamily:'Montserrat-Medium', color:'grey', left:5}}>Cleared</Text>
                    <Text style={{marginLeft:255,fontFamily:'Montserrat-Medium',color:'#0fd3bb'}}>$90</Text>
                    <Entypo name='chevron-small-right' size={25} style={{top:-5}}></Entypo>
                </View>
                <Divider style={{top:'8%'}} orientation="vertical" width={5} />
        </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:"12%",
        backgroundColor:'#0fd3bb'
    },
    headerIcon:{
        position:'absolute',
        bottom:'32%',
        fontSize:20,
        marginLeft:15,
        fontWeight:'bold',
    },
    headerText:{
        position:'absolute',
        bottom:'30%',
        fontSize:20,
        marginLeft:'12%',
        fontWeight:'bold',
        
    },
    Money:{
        marginTop:10,
        left:5,
        fontFamily:'Montserrat-Regular',
        fontSize:20,
        fontWeight:'bold',
        color:'#0fd3bb'
    },
    title:{
        
        fontFamily:'Montserrat-Regular',
        fontSize:16,
        left:5
    },
    analytic:{
        marginLeft:3,
        fontFamily:'Montserrat-Medium',
        top:20,
        left:5

    },
    box:{
        flexDirection:'row',
        marginTop:15,
        left:5
    },
    box2:{
        flexDirection:'row',
        marginTop:95
    },
    box2a:{
        flexDirection:'row',
        marginTop:35
    }
    
    

})
export default Earning;