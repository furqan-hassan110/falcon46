import React from 'react';
import {
  Button,
  Text,
  TextInput,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import Color from '../config/Color';
import { color } from 'react-native-elements/dist/helpers';
// import RNPickerSelect, { defaultStyles } from './debug';

import {Picker} from '@react-native-picker/picker';

const sports = [
  {
    label: 'Football',
    value: 'football',
  },
  {
    label: 'Baseball',
    value: 'baseball',
  },
  {
    label: 'cris',
    value: 'cris',
  },
  {
    label: 'fgsf',
    value: 'gsf',
  },
  {
    label: 'play',
    value: 'play',
  },
  {
    label: 'player',
    value: 'player',
  },
  {
    label: 'you',
    value: 'you',
  },
  {
    label: 'spam',
    value: 'spam',
  },
  {
    label: 'ddets',
    value: 'ddets',
  },
  {
    label: 'hets',
    value: 'hets',
  },
  {
    label: 'you',
    value: 'you',
  },
  {
    label: 'mE',
    value: 'mE',
  },
  {
    label: 'faraz',
    value: 'faraz',
  },
  
  {
    label: 'safdra',
    value: 'safdra',
  },
  {
    label: 'abiha',
    value: 'abiha',
  },
  {
    label: 'kkhs',
    value: 'kkhs',
  },

  
];

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);

    

    this.state = {
     
      favSport0: undefined,
      favSport1: undefined,
      favSport2: undefined,
      favSport3: undefined,
      favSport4: 'baseball',
      previousFavSport5: undefined,
      favSport5: null,
      favNumber: undefined,
    };

    
  }

  
  render() {
    const placeholder = {
      label: 'Select your Category',
      color: Color.white,
      
      
      
    };

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}>
          

          <View paddingVertical={5} />

          

          <View paddingVertical={5} />

          <Text>Category</Text>
          <RNPickerSelect
            placeholder={placeholder}
            items={sports}
            onValueChange={value => {
              this.setState({
                favSport1: value,
              });
            }}
            style={pickerSelectStyles
            }
            
            value={this.state.favSport1}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
                return <Icon name='chevron-down' size={20} style={styles.DownIcon} color={Color.primary} />;
              }}
          />


       
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Color.white
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollContentContainer: {
    paddingTop: 40,
    paddingBottom: 10,
  },
  DownIcon:{
     marginTop:12,
     marginRight:13
     
  },
});

const pickerSelectStyles = StyleSheet.create({
  
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: Color.primary,
    paddingRight: 30, // to ensure the text is never behind the icon
  },

 
});

