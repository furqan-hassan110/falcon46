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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Gigs = () => {
    const [data,setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [search,setSearch] = useState('')

    useEffect(() => {
        getData()
    },[])


    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/comments',{
            params: {
              _limit: 20
             }
          })
        .then((res) => {
        // console.log(res.data)
            setData(res.data)
    })
        .catch((err) => console.log(err.message))
    }
    const renderItem = ({item,index}) => {
        console.log('asdasdasd', item)
        return(
            <View style={styles.mainView}>
                <Icon name="search" style={styles.search} size={15} color='grey' />
                <Text style={styles.textData}>{item.name} </Text>
                <Icon name="arrow-up" style={[styles.search,{transform: [{ rotate: '320deg' }]}]} size={15} color='grey' />
            </View>
        )
    }
    return(
        <View>
            <FlatList 
                data ={data}
                renderItem ={renderItem}
                keyExtractor = {item => `key-${item.id}`}
            />
        </View>
    )
}
export default Gigs

const styles = StyleSheet.create({
    mainView:{
        width:'100%',
        height:'auto',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:'white',
        padding:5,
        borderRadius:10,
        marginBottom:5,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
}
    },
    textData:{
        fontSize:14,
        width:'50%',
        marginLeft:10
    },
    search: {
        paddingLeft: 10
    },
})