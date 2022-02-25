import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../components/home';
import Messages from '../components/message';
import Map from '../components/map';
import Notification from '../components/notification';
import Profile from '../components/profile';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Setting from '../InnerScreens/settings';
import MessageScreen from '../App/Screen/MessageScreen';
import BuyerDash from '../App/Screen/BuyerDash';
import { Image, StyleSheet } from 'react-native';


const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTabs = () => {

  const search = require('../assets/Search2.png')
  const search02 = require('../assets/SearchIcon02.png')
  const message = require('../assets/Message.png')
  const home = require('../assets/Home.png')
  const notification = require('../assets/Nofication.png')
  const profile = require('../assets/profile.png')

  return (
    <Tab.Navigator  barStyle={{
      backgroundColor:'#ffffff',
      borderRadius:10,
      borderTopRightRadius:20,
      borderTopLeftRadius:20
    }}>
      <Tab.Screen 
          name="Home" 
          component={BuyerDash} 
          options={{
            tabBarLabel:false,
            tabBarIcon: ({focused, tintColor}) => (
              <Image 
              style={{...styles.image, tintColor: focused ? '#0fd3bb' : 'black'}} 
              source={home} />
            ),
          }}
      />
      <Tab.Screen 
      name="Messages" 
      component={MessageScreen} 
      options={{
        tabBarLabel:false,
        tabBarIcon: ({focused, tintColor}) => (
          <Image 
          style={{...styles.image, tintColor: focused ? '#0fd3bb' : 'black'}} 
          source={message} />
        ),
      }}/>
      <Tab.Screen 
      name="Map" 
      component={Map} 
      options={{
        tabBarLabel:false,
        tabBarIcon: ({focused, tintColor}) => (
          <Image 
          style={{...styles.image, tintColor: focused ? '#0fd3bb' : 'black'}} 
          source={search} />
        )
      }}
      />
      <Tab.Screen 
      name="Notification" 
      component={Notification} 
      options={{
        tabBarLabel:false,
        tabBarIcon: ({focused, tintColor}) => (
          <Image 
          style={{...styles.image, tintColor: focused ? '#0fd3bb' : 'black'}} 
          source={notification} />
        ),
      }}
      />
      <Tab.Screen 
      name="Profile" 
      component={Profile} 
      options={{
        tabBarLabel:false,
        tabBarIcon: ({focused, tintColor}) => (
          <Image 
          style={{...styles.image, tintColor: focused ? '#0fd3bb' : 'black'}} 
          source={profile} />
        ),
      }
    }
      />
    </Tab.Navigator>
   
  );
}
export default MyTabs

const styles = StyleSheet.create({
  image:{
    width: 50, 
    height: 50,
    bottom:10,
    color:'black'
  }
})