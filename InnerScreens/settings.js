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
    ChecckBox
} from 'react-native';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Setting = ({navigation}) => {
    const [isSelected, setSelection] = useState(false);
    return(
        <SafeAreaView style={{width:'100%', height:'100%'}}>
        <View style={styles.header}>
            <Icon name='arrow-left' style={styles.headerIcon} onPress={() => navigation.goBack()}/>
            <Text style={styles.headerText}>Settings</Text>
        </View>
        <View style={styles.notification}>
            <View style={styles.today}>
                <TouchableOpacity>
                <Text style={styles.todayText} onPress={()=>navigation.navigate('InnerNotification')}>Notifications</Text>
                </TouchableOpacity>
            </View>
            <Divider orientation="vertical" width={5} />
            <View style={styles.today}>
                <TouchableOpacity>
                <Text style={styles.todayText} onPress={()=>navigation.navigate('InnerSecurity')}>Security</Text>
                </TouchableOpacity>
            </View>
            <Divider orientation="vertical" width={5} />
            <View style={styles.today}>
                <TouchableOpacity>
                <Text style={styles.todayText} onPress={()=>navigation.navigate('TermeandCon')}>Terms of Services</Text>
                </TouchableOpacity>
            </View>
            <Divider orientation="vertical" width={5} />
            <View style={styles.today}>
                <TouchableOpacity>
                <Text style={styles.todayText} onPress={()=>navigation.navigate('PrivacynPolicy')}>Privacy policy</Text>
                </TouchableOpacity>
            </View>
            <Divider orientation="vertical" width={5} />
            <TouchableOpacity>
            <View style={styles.today}>
                
                <Text style={styles.todayText} onPress={()=>navigation.navigate('language')}>Language</Text>
                
            </View>
            </TouchableOpacity>
            <Divider orientation="vertical" width={5} />
            <View style={styles.today}>
                <Text style={[styles.todayText, {color:'#0fd3bb', fontWeight:'bold',fontFamily:'Montserrat-Regular'}]} onPress={()=>navigation.navigate('LogInScreen')}>Logout</Text>
            </View>
            <Divider orientation="vertical" width={5} />
        </View>
    </SafeAreaView>
    )
    
}

export default Setting

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:"15%",
        backgroundColor:'#0fd3bb'
    },
    headerText:{
        position:'absolute',
        bottom:'45%',
        fontSize:25,
        marginLeft:'15%',
        fontWeight:'bold',
        
    },
    notification:{
        width:'100%',
        height:'100%',
        backgroundColor:'#f8f7f5',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        bottom:20
    },
    today:{
        width:'100%',
        height:80,
        backgroundColor:'#f8f7f5',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
    },
    todayText:{
        marginLeft:30,
        marginTop:30,
        fontSize:20,
        fontFamily:'Montserrat-Regular'
    },
    headerIcon:{
        position:'absolute',
        bottom:'45%',
        fontSize:25,
        marginLeft:15,
        fontWeight:'bold',
    }
}
)