import React from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView, Text } from 'react-native';
import Searchbox2 from '../App/Components/Searchbox2';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import GigsBoxes from '../App/Components/GigsBoxes';
import GigsBoxes2 from '../App/Components/Gigboxes2';
import GigsBoxes2S from '../App/Components/GigsBoxes2S';
import GigsBoxes3S from '../App/Components/GigsBoxes3S';

function ShareGig({navigation}) {
    return (
        <SafeAreaView style={{ width: '100%', height: 'auto' }}>
            <View style={styles.header}>
            <Icon name='arrow-left' size={25} style={{top:40, left:20}} onPress={() => navigation.goBack()}/>
                <Searchbox2 ></Searchbox2>
            </View>
            <Text style={{fontFamily:'Montserrat-Regular',fontSize:20, marginLeft:10, marginTop:10}} >Share your Gigs</Text>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false} >
              <View style={{flexDirection:'row', flexWrap:'wrap', alignItems:'flex-start', marginTop:-25}}>
              
              <GigsBoxes2S image={require('../assets/red.png')} text={"jauher designs"}
                text2={'I will design best handdrawn logo from your bussiness'}>
                   
                </GigsBoxes2S>
                <GigsBoxes3S image={require('../assets/red.png')} text={"flexdesigns"}
                text2={'I will design best handdrawn logo from your bussiness'}/>
                
              </View>
              </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "13%",
        backgroundColor: '#0fd3bb'
    },
})
export default ShareGig;