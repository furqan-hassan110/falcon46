import { jSXAttribute } from '@babel/types';
import React, { Children } from 'react';
import { View,StyleSheet,Image,Text,TouchableWithoutFeedback, ScrollView } from 'react-native';
import GigBox from '../Components/GigBox';
import GigsBoxes2 from '../Components/Gigboxes2';
import Color from '../config/Color';
import MainScreen from '../Components/MainScreen';
import PopupScreen from '../Components/PopupScreen'
import GigsBoxes from '../Components/GigsBoxes';
import Icon from 'react-native-vector-icons/Feather';

function MostRelevent({Children,text,navigation}) {
    return (
        <MainScreen>
            <View style={styles.upperbox} >
            <Icon style={styles.back} name="arrow-left" size={30} onPress={()=>navigation.goBack()}/>
                <Text style={styles.Text} >Most Relevent and Treading</Text>
            </View>
            <PopupScreen>
                <ScrollView horizontal={false} showsVerticalScrollIndicator={false} >
              <View style={{flexDirection:'row', flexWrap:'wrap', alignItems:'flex-start'}}>
                
              <GigsBoxes image={require('../assets/red.png')} text={"jauher designs"}
                text2={'I will design best handdrawn logo from your bussiness'}/>
                <GigsBoxes2 image={require('../assets/red.png')} text={"flexdesigns"}
                text2={'I will design best handdrawn logo from your bussiness'}/>

              </View>
              </ScrollView>
            </PopupScreen>
        </MainScreen>
    );
}
const styles = StyleSheet.create({
    upperbox:{
        flexDirection:"row",
        
        
            },
    back:{
        width:80,
        height:80,
        marginTop:25,

        
    },
    Text:{
        fontFamily:'Montserrat-Bold',
        fontSize:20,
        marginTop:27,
        marginLeft:-35
    },
    
})
export default MostRelevent;