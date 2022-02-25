import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    useColorScheme,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    BackHandler,
    KeyboardAvoidingView,
    FlatList,
    
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Language = ({navigation}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    const [toggleCheckBox3, setToggleCheckBox3] = useState(false)
    const [toggleCheckBox4, setToggleCheckBox4] = useState(false)

    return(
        <SafeAreaView style={{width:'100%', height:'100%'}}>
        <View style={styles.header}>
            <Icon name='arrow-left' style={styles.headerIcon} onPress={() => navigation.goBack()}/>
            <Text style={styles.headerText}>Settings</Text>
        </View>
        
        <View style={styles.notification}>
        
            
            
            <View style={styles.today}>
            <CheckBox
            style={{left:'640%', top:'2.5%'}}
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
                <Text style={styles.todayText}>English</Text>
            </View>
            <Divider orientation="vertical" width={5} />
            <View style={styles.today}>
            <CheckBox
            style={{left:'640%', top:'2.5%'}}
    disabled={false}
    value={toggleCheckBox1}
    onValueChange={(newValue) => setToggleCheckBox1(newValue)}
  />
                <Text style={styles.todayText}>Deutsche</Text>
            </View>
            <Divider orientation="vertical" width={5} />
            <View style={styles.today}>
                <CheckBox
            style={{left:'640%', top:'2.5%'}}
    disabled={false}
    value={toggleCheckBox2}
    onValueChange={(newValue) => setToggleCheckBox2(newValue)}
  />
                <Text style={styles.todayText}>Espanol</Text>
            </View>
            <Divider orientation="vertical" width={5} />
            <View style={styles.today}>
                <CheckBox
            style={{left:'640%', top:'2.5%'}}
    disabled={false}
    value={toggleCheckBox3}
    onValueChange={(newValue) => setToggleCheckBox3(newValue)}
  />
                <Text style={styles.todayText}>Francais</Text>
            </View>
            <Divider orientation="vertical" width={5} />
            <View style={styles.today}>
                <CheckBox
            style={{left:'640%', top:'2.5%'}}
    disabled={false}
    value={toggleCheckBox4}
    onValueChange={(newValue) => setToggleCheckBox4(newValue)}
  />
                <Text style={styles.todayText}>Portugues</Text>
            </View>
            
            
        </View>
    </SafeAreaView>
    )
    
}

export default Language

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:"10%",
        backgroundColor:'#0fd3bb'
    },
    headerText:{
        position:'absolute',
        bottom:'35%',
        fontSize:20,
        marginLeft:'12%',
        fontWeight:'bold',
        
    },
    notification:{
        width:'100%',
        height:'100%',
        backgroundColor:'transparent',
      
        bottom:5
    },
    today:{
        width:'100%',
        height:50,
        backgroundColor:'#f8f7f5',
        flexDirection:'row'
        
    },
    todayText:{
        marginLeft:-20,
        marginTop:20,
        fontSize:15,
        fontFamily:'Montserrat-Regular'
    },
    headerIcon:{
        position:'absolute',
        bottom:'37%',
        fontSize:20,
        marginLeft:15,
        fontWeight:'bold',
    }
}
)