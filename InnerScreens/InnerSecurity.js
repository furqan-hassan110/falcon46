import React, {useState} from 'react';
import { View, StyleSheet, Text, Switch, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Divider } from 'react-native-elements';




function InnerSecurity({navigation}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        // changeMode(isEnabled ? 1 : 0)
    }
    return (<>
        <View style={styles.header}>
            <Image source={require('../App/assets/back.png')} style={{width:50,height:100}} onPress={() => navigation.goBack()}/>
            <Text style={styles.HText}>Security</Text>
        </View>
        <View style={{flexDirection:'row', padding:'5%'}}>
        <Text style={styles.Text2}>Multi-Factor Authentication</Text>
        <Switch style={styles.Switch}
            trackColor={{ false: "grey", true: "#0fd3bb" }}
            thumbColor={isEnabled ? "#0fd3bb" : "black"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <Text style={styles.Text3}>Recommended:</Text>
      <Text style={styles.Text4}>{`we will send an Authentication code via sms and email when using unrecognized device`}</Text>
      <Divider style={{top:'5%'}} orientation="vertical" width={5} />
      <Icon name='mobile1'  style={styles.mobicon}  onPress={()=>navigation.goBack()} />
      <Divider style={{top:'4%'}} orientation="vertical" width={5} />
      <Text style={styles.Text5}>This device (TECNO + KC3)</Text>
      <Text style={styles.Text6}>android</Text>
      <Text style={styles.Text7}>active now</Text>
        </>
    );
}
const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        width:'100%',
        height:'11%',
        backgroundColor:'#0fd3bb'
    },
    mobicon:{
        fontSize:35,
        marginTop:60,
        marginLeft:15,
    },
    HText:{
        fontSize:20,
        fontFamily:'Montserrat-Regular',
        left:'12%',
        top:'10%'
    },
    Text2:{
        fontSize:18,
        fontFamily:'Montserrat-Regular',
        
    },
    Switch:{
        alignContent:'flex-end',
        marginLeft:40,
        top:'-1%'
    },
    Text3:{
        fontSize:15,
        fontWeight:'bold',
        fontFamily:'Montserrat-Regular',
        marginLeft:20,

    },
    Text4:{
        fontSize:15,
        maxWidth:'80%',
        fontFamily:'Montserrat-Medium',
        marginLeft:20,
        color:'grey'
    },
    Text5:{
        fontSize:15,
        fontFamily:'Montserrat-Medium',
        fontWeight:'bold',
        color:'#0fd3bb',
        marginLeft:55,
        bottom:'7%',
    },
    Text6:{
        fontSize:15,
        fontFamily:'Montserrat-Regular',
        marginLeft:58,
        color:'grey',
        top:'-6.5%'
    },
    Text7:{
        fontSize:15,
        fontFamily:'Montserrat-Regular',
        marginLeft:58,
        color:'grey',
        top:'-6%'
    }
})
export default InnerSecurity;