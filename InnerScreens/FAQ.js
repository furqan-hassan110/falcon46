import React from 'react';
import {
    Text,
    SafeAreaView,
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function FAQ({navigation}) {
    return (
        <SafeAreaView>
        <View style={styles.header}>
        <Icon name='arrow-left' style={styles.headerIcon} onPress={() => navigation.goBack()}/>
            <Text style={styles.headerText}>FAQ's </Text>
        </View>
        <Text >kjdfzd zdjvklzdfj skfjdfh</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:"30%",
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
})
export default FAQ;