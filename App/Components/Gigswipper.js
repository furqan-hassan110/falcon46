
import { View } from 'native-base';
import React from 'react';
import { ScrollView , StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Swiper from 'react-native-swiper';








function Gigswipper(props) {
    return (<>
        <Icon style={styles.back} name="arrow-left" size={30} onPress={()=>navigation.goBack()} />
        <Swiper showsPagination={false}  horizontal={true} decelerationRate="fast">
           
        <Image style={styles.pic} source={require('../assets/yellow.png')}/>
        <Image style={styles.pic} source={require('../assets/red.png')}/>
        <Image style={styles.pic} source={require('../assets/green.png')}/>
        <Image style={styles.pic} source={require('../assets/white.jpg')}/>
        <Image style={styles.pic} source={require('../assets/purple.jpg')}/>
        <Image style={styles.pic} source={require('../assets/black.jpg')}/>
        <Image style={styles.pic} source={require('../assets/darkgreen.jpg')}/>
        
        </Swiper>
        </>
    );
}
const styles = StyleSheet.create({
    pic:{
        backgroundColor:'black',
        top:'25%',
        flex:0.5,
        width:'100%',
        height:'100%',
    }

})
export default Gigswipper;