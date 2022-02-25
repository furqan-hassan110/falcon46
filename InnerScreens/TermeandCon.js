import React from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function TermeandCon({navigation}) {
    return (
        <>
        <View style={styles.header}>
        <Icon name='arrow-left' style={styles.headerIcon} onPress={() => navigation.goBack()}/>
        <Text style={styles.HText}>Gig Falcon</Text>
    </View>
    <ScrollView>
    <Text style={styles.Text}>Gig Falcon's Terms and condition</Text>
    <Text style={styles.Text1}>Last updated on february 2022</Text>
   
    <Text style={styles.Text2}>{`The following terms of service (these "Terms of Service"), govern your access to and use of the Fiverr website and mobile application, including any content, functionality and services offered on or through www.fiverr.com or the Fiverr mobile application (the "Site") by Fiverr International Ltd. (8 Kaplan St. Tel Aviv 6473409, Israel) and its subsidiaries: Fiverr Inc. (38 Greene St. NY 10013, NY, USA) and Fiverr Limited (Lemesou 11, 2112 Nicosia, Cyprus), as applicable. Fiverr International Ltd. and its subsidiaries are collectively referred hereto as "Fiverr" "we" or "us" and "you" or "user" means you as an user of the Site.

Please read the Terms of Service carefully before you start to use the Site. By using the Site, opening an account or by clicking to accept or agree to the Terms of Service when this option is made available to you, you accept and agree, on behalf of yourself or on behalf of your employer or any other entity (if applicable), to be bound and abide by these Terms of Service and Fiverr Payment Terms, found here ("Payment Terms"), which is incorporated herein by reference. Please read the Terms of Service carefully before you start to use the Site. By using the Site, opening an account or by clicking to accept or agree to the Terms of Service when this option is made available to you, you accept and agree, on behalf of yourself or on behalf of your employer or any other entity (if applicable), to be bound and abide by these Terms of Service and Fiverr Payment Terms, found here ("Payment Terms"), which is incorporated herein by reference. You further acknowledge, you have read and understood our Privacy Policy, found here. If you do not want to agree to these Terms of Service or the Privacy Policy, you must not access or use the Site. For more detailed policies surrounding the activity and usage on the Site, please access the

designated articles herein.`}</Text>
   </ScrollView>
    </>
    );
}
const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'11%',
        backgroundColor:'#0fd3bb'
    },
    headerIcon:{
        position:'absolute',
        bottom:'32%',
        fontSize:20,
        marginLeft:15,
        fontWeight:'bold',
    },
    HText:{
        fontSize:20,
        fontFamily:'Montserrat-Regular',
        left:'12%',
        top:'40%'
    },
    Text:{
        fontSize:20,
        fontFamily:'Montserrat-Bold',
        maxWidth:'70%',
        marginLeft:50,
        marginTop:30
    },
    Text1:{
        fontSize:13,
        fontFamily:'Montserrat-Regular',
        color:'grey',
        marginLeft:50,
        marginTop:15
    },
    Text2:{
        fontSize:13,
        fontFamily:'Montserrat-Medium',
        color:'grey',
        marginLeft:50,
        marginTop:15,
        maxWidth:'75%',
    }
})
export default TermeandCon;