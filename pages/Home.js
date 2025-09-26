import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, Modal, Dimensions, PermissionsAndroid, ActivityIndicator } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MyColors } from '../assets/MyColors';
import { ScaledSheet } from 'react-native-size-matters'
import Geolocation from 'react-native-geolocation-service';

const dummy = [
    {
        id: 0,
        name: 'Biraj Singha',
        address: 'Christian Basti, Samannay Path, House No.156, Near BSNL Office',
        phone: '9101004425',
        amount: '499',
        pickup: 'KFC-GS ROAD',
        drop: 'RAJGHAR ROAD',
        latitude: 26.1433,
        longitude: 91.7898,
    },
    {
        id: 1,
        name: 'Biraj Singha',
        address: 'Christian Basti, Samannay Path, House No.156, Near BSNL Office',
        phone: '9101004425',
        amount: '499',
        pickup: 'KFC-GS ROAD',
        drop: 'RAJGHAR ROAD',
        latitude: 26.1433,
        longitude: 91.7898,
    },
    {
        id: 2,
        name: 'Biraj Singha',
        address: 'Christian Basti, Samannay Path, House No.156, Near BSNL Office',
        phone: '9101004425',
        amount: '499',
        pickup: 'KFC-GS ROAD',
        drop: 'RAJGHAR ROAD',
        latitude: 26.1433,
        longitude: 91.7898,
    },
];

const Home = ({ navigation }) => {
    const [permission, setPermission] = useState(false)
    const [location, setLocation] = useState(false)
    const [loading, setLoading] = useState(false)
    const [isToggled, setToggled] = useState(false);

    useEffect(() => {
        requestLocationPermission();
        // getLocation();
    }, []);

    useEffect(() => {
        if (loading) {
            return;
        }
        setLoading(false)
    }, [location])

    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Permission',
                    message: 'This app needs access to your location for some functionality.',
                    buttonPositive: 'OK',
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                setPermission(true);
            } else {
                setPermission(false);
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const getLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
            },
            (error) => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }

    const toggleButton = () => {
        setToggled(!isToggled);
    };

    const handleNavigation = (route) => {
        toggleButton()
        navigation.navigate(route)
    }

    const renderServices = (item) => {
        return (
            <TouchableOpacity
                key={item.id}
                style={styles.customerDetails}
                onPress={() =>
                    navigation.navigate('DeliveryProcess', { customer: item })
                }>
                <View>
                    <Text style={styles.customerName}>{item.name}</Text>
                    <Text style={styles.customerAddress}>{item.address}</Text>
                </View>
                <View>
                    <Entypo name={'location-pin'} size={36} color="white" />
                </View>
            </TouchableOpacity>
        );
    }

    // if (loading || !location) {
    //     return <ActivityIndicator size={'large'} style={styles.activityIndicator} />
    // }

    return (
        <View style={styles.container}>
            {console.log(location)}
            <View style={styles.nav}>
                <>
                    <TouchableOpacity onPress={toggleButton} style={styles.navIconContainer}>
                        <Feather name="menu" size={25} color="white" style={styles.navIcon} />
                    </TouchableOpacity>
                    <View>
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={isToggled}
                            onRequestClose={toggleButton}
                        >
                            <View style={styles.modalContainer}>
                                <View style={styles.modalContent}>
                                    <View style={styles.modalHeaderContainer}>
                                        <View style={styles.modalHeader}>
                                            <View style={styles.userImgContainer}>
                                                <Image source={require('../assets/images/user1.png')} style={styles.userImg} />
                                            </View>
                                            <View style={styles.userNameConatiner}>
                                                <Text style={styles.modalHederText}>User Name</Text>
                                                <Text style={styles.modalHederText}>email@gmail.com</Text>
                                            </View>
                                        </View>
                                        <View style={styles.modelRightContainer}>
                                            <Entypo name="circle-with-cross" size={25} onPress={toggleButton} color={MyColors.lightGray2} />
                                            <TouchableOpacity onPress={() => handleNavigation('EditProfile')}>
                                                <Text style={styles.editProfile}>Edit Profile</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.modelBodyContianer}>
                                        <TouchableOpacity style={styles.modelInputContainer} onPress={() => handleNavigation('Earnings')}>
                                            <Text style={styles.modalText}>Earnings</Text>
                                            <Entypo name="chevron-small-right" size={20} color={MyColors.darkGray} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.modelInputContainer} onPress={() => handleNavigation('Orders')}>
                                            <Text style={styles.modalText}>Orders</Text>
                                            <Entypo name="chevron-small-right" size={20} color={MyColors.darkGray} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.modelInputContainer} onPress={() => handleNavigation('Payment')}>
                                            <Text style={styles.modalText}>Payment</Text>
                                            <Entypo name="chevron-small-right" size={20} color={MyColors.darkGray} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.modelInputContainer} onPress={() => handleNavigation('Wallet')}>
                                            <Text style={styles.modalText}>Wallet</Text>
                                            <Entypo name="chevron-small-right" size={20} color={MyColors.darkGray} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.modelInputContainer} onPress={() => handleNavigation('History')}>
                                            <Text style={styles.modalText}>History</Text>
                                            <Entypo name="chevron-small-right" size={20} color={MyColors.darkGray} />
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.logoutBtn}
                                        onPress={() => handleNavigation('Root')}>
                                        <Text style={[styles.modalText, styles.whiteText]}>Logout</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/Logo.png')} />
                </View>
            </View>

            {/* <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                    }}
                >
                    <Image
                        source={require('../assets/images/user.png')}
                        style={styles.pin}
                    />
                </Marker>
            </MapView> */}

            <View style={styles.detailsContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>My Services</Text>
                </View>

                <View style={styles.customerContainer}>
                    <Text style={styles.date}>Date : 14/02/22</Text>
                    <FlatList
                        data={dummy}
                        renderItem={({ item }) => renderServices(item)}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = ScaledSheet.create({
    activityIndicator: {
        flex: 1,
        backgroundColor: MyColors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: MyColors.primary,
        height: 75,
        width: '100%'
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Dimensions.get('screen').width * .1,
    },
    logo: {
        width: 75,
        height: 50,
    },
    navIconContainer: {
        height: '100%',
        justifyContent: 'center',
        paddingRight: 20,
    },
    navIcon: {
        marginLeft: 10,
    },
    userImgContainer: {
        backgroundColor: MyColors.white,
        borderRadius: 50,
        width: Dimensions.get('screen').width * .15,
        height: Dimensions.get('screen').height * .07,
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',
        marginRight: Dimensions.get('screen').width * .03,
    },
    userImg: {
        width: Dimensions.get('screen').width * .11,
        height: Dimensions.get('screen').height * .08,
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        width: Dimensions.get('screen').width * .9,
        marginTop: Dimensions.get('screen').height * .07,
        backgroundColor: MyColors.background,
        borderRadius: 10,
    },
    modalHederText: {
        fontSize: '12@s',
        color: MyColors.white,
    },
    editProfile: {
        color: MyColors.white,
        fontSize: '10@s',
        backgroundColor: MyColors.secondary,
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 7,
        marginTop: 20,
    },
    modalText: {
        fontSize: '13@s',
        color: MyColors.black3,
    },
    modalHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: MyColors.primary,
        paddingHorizontal: Dimensions.get('screen').width * .05,
        paddingVertical: Dimensions.get('screen').height * .02,
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    modelBodyContianer: {
        padding: 20,
    },
    modelRightContainer: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    modelInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: MyColors.white,
        marginTop: 17,
        borderRadius: 7,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    logoutBtn: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: MyColors.primary,
        borderRadius: 7,
        marginTop: 10,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 50,
    },
    whiteText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '13@s'
    },
    map: {
        width: '100%',
        height: '100%',
    },
    detailsContainer: {
        marginTop: 'auto',
        marginHorizontal: 20,
        backgroundColor: MyColors.primary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: 999,
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: MyColors.secondary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 20,
        shadowColor: '#20363b',
        shadowOpacity: 1.0,
        elevation: 3,
    },
    header: {
        color: 'white',
        fontSize: '13@s',
        fontWeight: 'bold',
    },
    customerContainer: {
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    date: {
        color: 'white',
        fontSize: '10@s',
        fontWeight: 'bold',
    },
    customerDetails: {
        marginVertical: 10,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    customerName: {
        fontSize: '14@s',
        fontWeight: 'bold',
        color: 'white',
    },
    customerAddress: {
        fontSize: '11@s',
        color: 'white',
        display: 'flex',
        flexWrap: 'wrap',
        width: 350,
        marginTop: 8,
    },
    pin: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
});

export default Home;
