import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons';

const Boton = () => {
  const [estado, setEstado] = useState(false);

  const agregarFavoritos = () => {
    setEstado(!estado);
  };

  console.log(estado);

  return (
    <View>
      <TouchableOpacity onPress={() => agregarFavoritos()}>
        <Icon
          name={estado ? 'heart-outlined' : 'heart'}
          size={20}
          color="#ff6347"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Boton;