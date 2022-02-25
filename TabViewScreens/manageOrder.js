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
import { Container, Header, Item, Input, ScrollableTab, Button, Tab, Tabs } from 'native-base';
import { Divider } from 'react-native-elements';

const ManageOrder = ({ navigation, route }) => {
    const [data, setData] = useState([])
    const [compOrder, setCompOrder] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos?', {
            params: {
                _limit: 2
            }
        })
            .then((res) => {
                console.log(res.data)
                setData(res.data)
                setCompOrder(res.data)
            })
            .catch((err) => console.log(err.message))
    }

    const AtiveOrder = () => {
        return (<>
           <ScrollView contentContainerStyle={{ margin: 5 }}>
            <View>
                {
                    data.map((items) => {
                        console.log(items)
                        return (
                            <>
                                <View style={{
                width: '90%',
                backgroundColor: 'white',
                marginTop: 14,
                marginLeft: '5%',
                borderRadius: 10,
                marginBottom:10,                    
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
            }}>
                <View style={styles.activeOrderstyle_1}>

                                    <Image source={{ uri: items.url }} style={styles.url} />
                                    <View style={styles.forcolumnView}>
                                        <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-between' }}>
                                            <Text style={styles.price}>$5</Text>
                                            <Text style={styles.offer}>Custom Offer</Text>
                                        </View>
                                        <Text style={styles.textTitle}>{items.title}</Text>
                                    </View>
                    </View>
                                <View style={{ flexDirection: 'row', marginTop: -8, left: 20 }}>
                                    <Image source={{ uri: items.url }} style={{ borderRadius: 50, width: 40, height: 40 }} />
                                    <Text style={{ marginLeft: 10, top: 7, color: 'grey', fontSize: 17 }}>zuuzle</Text>
                                </View>
                                <Divider orientation="vertical" width={20} style={{ width: '90%', marginLeft: '5%', marginTop: 10 }} />
                               <View style={{flexDirection: 'row', justifyContent: 'space-between',padding:15}}>
                                    <Text style={{ fontSize: 17, fontWeight: '500' }}>Missing Requirements</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate("TimeLine", {
                                       data : data
                                    })}>
                                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#0fd3bb' }}>Continue</Text>
                                    </TouchableOpacity>
                                   </View>
                                </View>

                            </>
                        )
                    })
                }
            </View>
        </ScrollView>
            </>
        )
    }

    const CompletedOrder = () => {
        return(
            <ScrollView contentContainerStyle={{ margin: 5 }}>
            <View>
                {
                    compOrder.map((items) => {
                        console.log(items)
                        return (
                            <>
                                <View style={{
                width: '90%',
                height:'45%',
                backgroundColor: 'white',
                marginTop: 14,
                marginLeft: '5%',
                borderRadius: 10,
                marginBottom:10,                    
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
            }}>
                <View style={styles.activeOrderstyle_1}>

                                    <Image source={{ uri: items.url }} style={styles.url} />
                                    <View style={styles.forcolumnView}>
                                        <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-between' }}>
                                            <Text style={styles.price}>$5</Text>
                                            <Text style={styles.offer}>Custom Offer</Text>
                                        </View>
                                        <Text style={styles.textTitle}>{items.title}</Text>
                                    </View>
                    </View>
                                <View style={{ flexDirection: 'row', marginTop: -8, left: 20 }}>
                                    <Image source={{ uri: items.url }} style={{ borderRadius: 50, width: 40, height: 40 }} />
                                    <Text style={{ marginLeft: 10, top: 7, color: 'grey', fontSize: 17 }}>zuuzle</Text>
                                </View>
                                <Divider orientation="vertical" width={20} style={{ width: '90%', marginLeft: '5%', marginTop: 10 }} />
                               <View style={{flexDirection: 'row', justifyContent: 'space-between',padding:15}}>
                                    <Text style={{ fontSize: 17, fontWeight: '500' }}>Missing Requirements</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate("TimeLine", {
                                       data : data
                                    })}>
                                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#0fd3bb' }}>Continue</Text>
                                    </TouchableOpacity>
                                   </View>
                                </View>

                            </>
                        )
                    })
                }
            </View>
        </ScrollView>
        )
    }

    return (
        <SafeAreaView style={{ width: '100%', height: 'auto' }}>
            <View style={styles.header}>
                <Icon name='arrow-left' style={styles.headerIcon} onPress={() => navigation.goBack()} />
                <Text style={{ flex: 1, justifyContent: 'center', top: '38%', left: '15%', fontSize: 20,fontFamily:'Montserrat-Bold' }}>Manage Order</Text>
                <Text style={styles.headerText}>Name</Text>
            </View>
            <View style={styles.mainScrollViewStyle}>
                <Tabs tabContainerStyle={{ elevation: 0, width: '90%', alignSelf: 'center', marginTop: 5 }} tabBarUnderlineStyle={{ backgroundColor: '#0fd3bb', height: 3, width:'30%' }}>
                    <Tab
                        tabStyle={{ backgroundColor: '#f8f7f5' }}
                        activeTabStyle={{ backgroundColor: '#f8f7f5' }}
                        textStyle={{ color: '#030303', fontFamily:'Montserrat-Regular',fontSize: 12 }}
                        activeTextStyle={{ color: '#030303', fontFamily:'Montserrat-Regular', fontSize: 14 }}
                        heading="Active Order">
                        <AtiveOrder />
                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#f8f7f5' }}
                        activeTabStyle={{ backgroundColor: '#f8f7f5' }}
                        textStyle={{ color: '#030303', fontFamily:'Montserrat-Regular',fontSize: 12 }}
                        activeTextStyle={{ color: '#030303', fontFamily:'Montserrat-Regular',fontSize: 14 }}
                        heading="Completed">
                        {/* <Tab2 /> */}
                        <CompletedOrder />
                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: '#f8f7f5' }}
                        activeTabStyle={{ backgroundColor: '#f8f7f5' }}
                        textStyle={{ color: '#030303', fontFamily:'Montserrat-Regular',fontSize: 12 }}
                        activeTextStyle={{ color: '#030303', fontFamily:'Montserrat-Regular',fontSize: 14 }}
                        heading="Cancel">
                        {/* <Tab2 /> */}
                        <Text>Hello</Text>
                    </Tab>
                </Tabs>
            </View>
        </SafeAreaView>
    )
}

export default ManageOrder

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "18%",
        backgroundColor: '#0fd3bb',
    },

    mainScrollViewStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f7f5',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        bottom: 20
    },
    headerIcon: {
        position: 'absolute',
        bottom: '45%',
        fontSize: 25,
        marginLeft: 15,
        fontWeight: 'bold',
    },
    headerText: {
        position: 'absolute',
        color: 'grey',
        bottom: '21%',
        fontSize: 16,
        marginLeft: '15%',
        fontWeight: '700',
        fontFamily:'Montserrat-Regular'
    },
    activeOrderstyle_1: {
        flexDirection: 'row',
        padding: 5,
        marginLeft: '2.5%',
        backgroundColor: '#ffffff',
    },
    url: {
        width: 120,
        height: 75,
        borderRadius: 10
    },
    forcolumnView: {
        flexDirection: 'column',
        flex: 1
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'flex-start'
    },
    offer: {
        fontSize: 15,
        marginLeft: '20%',
        color: 'grey'
    },
    textTitle: {
        width: '100%',
        height:60,
        padding: 4,
        bottom: 8,
        fontSize: 14
    }
})