import React from 'react';
import { View,StyleSheet, Image, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import Icon from 'react-native-vector-icons/Entypo';
import Color from '../config/Color';

import MainScreen from '../Components/MainScreen';
import PopupScreen from '../Components/PopupScreen';
import ServiceHeader from '../Components/ServiceHeader';
import ServiceMenu from '../Components/ServiceMenu';

function DigitalMarketing(props) {
    return (
        <MainScreen>
            <PopupScreen>
                <ServiceHeader 
                image={require('../assets/Marketing.png')}
                title={'Digital Marketing'}
                subtitle={'Update and upgrade your bussiness online'}/>
                <ScrollView indicatorStyle={false}  >
                    <ServiceMenu text={'Local SEO'} onPress={()=>alert('tapped')}/>
                    <ServiceMenu text={'Local SEO'}/>
                    <ServiceMenu text={'Local SEO'}/>
                    <ServiceMenu text={'Local SEO'}/>
                    <ServiceMenu text={'Local SEO'}/>
                    <ServiceMenu text={'Local SEO'}/>
                    <ServiceMenu text={'Local SEO'}/>
                    <ServiceMenu text={'Local SEO'}/>
                    <ServiceMenu text={'Local SEO'}/>
                    <ServiceMenu text={'Local SEO'}/>
                    <ServiceMenu text={'Local SEO'}/>
                    <ServiceMenu text={'Local SEO'}/>
                    <ServiceMenu text={'Local SEO'}/>
                    <ServiceMenu text={'Local SEO'}/>
                </ScrollView>
            </PopupScreen>
        </MainScreen>
    );
}
const styles = StyleSheet.create({
    
})

export default DigitalMarketing;