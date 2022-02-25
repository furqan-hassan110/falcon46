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
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, Input, Spinner, Button,Tabs,Tab, Footer, FooterTab, Content, List, ListItem, Left, Body, Right, Thumbnail,  Item } from 'native-base';


const GigSeller = ({navigation}) => {

    const [data,setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [masterData, setMasterData] = useState([])
    const [search,setSearch] = useState('')
    const [newData, setNewData] = useState([])
    const [newSearch, setNewSearch] = useState('')

    useEffect(() => {
        getData()
    },[])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setNewData(res.data)
            })
            .catch(err => console.log(err.message))
    },[])


    const filterName = newData.filter(name => {
        return name.address.city.toLowerCase().includes(newSearch.toLowerCase())
    })

    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/comments',{
            params: {
              _limit: 20
             }
          })
        .then((res) => {
        // console.log(res.data)
            setMasterData(res)
            setFilterData(res)
            setData(res.data)
    })
        .catch((err) => console.log(err.message))
    }

    const filterText = (text) => {
        // if(text) {
        //     const newData = filterData.filter((item) => {
        //         const itemData = item.name ? item.name.topUpperCase() 
        //         : 
        //         ''.toUpperCase()
        //         const textData = text.topUpperCase();
        //         return itemData.indexOf(textData) > -1;
        //     });
        //     setData(newData);
        //     setSearch(text)
        // }
        // else{
        //     setData(filterData)
        //     setSearch(text)
        // }
        alert(text)
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

    const Gigs = () => {
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

    return (
        <SafeAreaView style={{ width: '100%', height: 'auto' }}>
            <View style={styles.header}>
            <Icon name='arrow-left' size={25} style={{top:40, left:15}} onPress={() => navigation.goBack()}/>
                <Item style={styles.searchBar}>
                    <Icon name="search" style={styles.search} size={15} color='grey' />
                    <Input 
                    placeholder="Search here" 
                    style={styles.inputField} 
                    onChangeText={e => setNewSearch(e)}
                    />
                </Item>
            </View>

            <View style={styles.mainScrollViewStyle}>
            <Tabs tabContainerStyle={{ elevation: 0, width:'90%', alignSelf:'center',marginTop:5 }} tabBarUnderlineStyle={{ backgroundColor: '#0fd3bb', height: 3,width:'45%' }}>
                    <Tab
                        tabStyle={{ backgroundColor: '#f8f7f5' }}
                        activeTabStyle={{ backgroundColor: '#f8f7f5' }}
                        textStyle={{ color: '#030303', fontFamily:'Montserrat-Regular',fontSize: 12 }}
                        activeTextStyle={{ color: '#030303', fontFamily:'Montserrat-Regular',fontSize: 14 }}
                        heading="Timeline">
                        <Gigs />
                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#f8f7f5' }}
                        activeTabStyle={{ backgroundColor: '#f8f7f5' }}
                        textStyle={{ color: '#030303', fontFamily:'Montserrat-Regular',fontSize: 12 }}
                        activeTextStyle={{ color: '#030303', fontFamily:'Montserrat-Regular',fontSize: 14 }}
                        heading="Chat">
                        {/* <Tab2 /> */}
                        {
                    filterName.map((items) => {
                        return (
                            // console.log(items)
                            <>
                                <List style={{ padding: 2, right: 7 }}>
                                    <ListItem avatar style={{
                                        borderWidth: 0.4, borderRadius: 20, shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 1,
                                        },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 0.3,

                                        elevation: 2,
                                    }}>
                                        <Left/>
                                        
                                        <Body>
                                            <Text>{items.name}</Text>
                                            <Text note>{items.address.city}</Text>
                                            <Text note>{items.company.name}</Text>
                                        </Body>
                                        <Right>
                                            <Text note>{items.username}</Text>
                                        </Right>
                                    </ListItem>
                                </List>
                            </>
                        )
                    })
                }
                    </Tab>
                </Tabs>
            </View>
        </SafeAreaView>
    )
}
export default GigSeller

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "20%",
        backgroundColor: '#0fd3bb'
    },
    searchBar: {
        flexDirection:'row',
        width: '76%',
        marginLeft: '15%',
        backgroundColor: 'white',
        color: 'black',
        marginTop: '0%',
        borderRadius: 20
    },
    search: {
        paddingLeft: 10
    },
    inputField: {
        paddingLeft: 10
    },
    mainScrollViewStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f7f5',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        bottom: 20
    },
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