import React,{Component} from 'react';
import{View,TouchableHighlight,StyleSheet,Text, TouchableWithoutFeedback, Image} from 'react-native'

import Color from '../config/Color';

class CetegoryBox extends Component{
    state={
        buttonEnabled:true, 
    }
    render(){
        const buttonEnabled =this.state.buttonEnabled ? '#F6F6F6' : '#0FD3BB'
        
        return(

      
    
        <View  style={styles.Container}  > 
                <TouchableWithoutFeedback onPress={()=>this.setState({buttonEnabled:!this.state.buttonEnabled}) }>
                    <View style={[styles.box,{borderColor:buttonEnabled}]}>
                    {this.props.children}
                    </View>
                </TouchableWithoutFeedback>
                </View>
                
                // <Image style={styles.icon} source={require('../assets/flaticon.png')}/>
                //     <Text style={styles.text}>Flat</Text>
                
        
      );
    }
}

export default CetegoryBox;

const styles = StyleSheet.create({
    Container:{
                flex:1,
            },
               box:{
               width:140,
               height:140,
               borderRadius:20,
               backgroundColor:Color.white,
               alignSelf:'center',
              marginTop:50 ,
              borderWidth:2,
              elevation:2,
              padding:15,
              justifyContent:'space-between',
              marginHorizontal:7,
              marginBottom:7,
              
              },
            //   icon:{
            //       width:50,
            //       height:50,
            //       alignSelf:'center'
                  
            //   },
            //   text:{
            //       fontFamily:'Montserrat-Regular',
            //       fontSize:18,
            //       alignSelf:'center',
            //       },

    
})