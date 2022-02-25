import React from 'react';
import { View,StyleSheet, Image, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


import MainScreen from '../Components/MainScreen';
import PopupScreen from '../Components/PopupScreen';
import ServiceHeader from '../Components/ServiceHeader';
import ServiceMenu from '../Components/ServiceMenu';

function GraphicsDesign({props,navigation}) {
    return (
        <MainScreen>
            <Icon name='arrow-left' style={{fontSize:25,marginLeft:15,marginTop:30,}} onPress={()=>navigation.goBack()} />
            <PopupScreen>
                <ServiceHeader 
                image={require('../assets/Graphic.png')}
                title={'Graphics & Designing '}
                subtitle={'Logo designing, illustration & Art'}/>
                <ScrollView indicatorStyle={false}  >
                    <ServiceMenu text={'Logo Design'} onPress={() =>navigation.navigate('ResultPage')}/>
                    <ServiceMenu text={'illustration'}/>
                    <ServiceMenu text={'Banner design'}/>
                    <ServiceMenu text={'photoshops'}/>
                    <ServiceMenu text={'Flyer Design'}/>
                    <ServiceMenu text={'Poster desgin'}/>
                    <ServiceMenu text={'Watermarks'}/>
                    <ServiceMenu text={'Social Media design'}/>
                    <ServiceMenu text={'Character model design'}/>
                    <ServiceMenu text={'Bussiness Card'}/>
                    <ServiceMenu text={'Visual Desiging'}/>

                    
                </ScrollView>
            </PopupScreen>
        </MainScreen>
    );
}
const styles = StyleSheet.create({
    
})

export default GraphicsDesign;