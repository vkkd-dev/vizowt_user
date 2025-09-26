import React, { useState } from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Logo from '../assets/Logo.png';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MyColors } from '../assets/MyColors';
import { ScaledSheet } from 'react-native-size-matters'

const DeliveryProcess = ({ navigation }) => {
    const route = useRoute()
    const customer = route.params?.customer
    const [selected, setSelected] = useState(0);
    const customerDetails = [customer]

    const Pickup = () => {
        setSelected(0);
    };

    const Drop = () => {
        setSelected(1);
    };

    const Delivered = () => {
        setSelected(2);
    };

    return (
        <SafeAreaView>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={MyColors.lightGray2}
            />
            {customerDetails.map((item, index) => (
                <View key={index}>
                    <View style={styles.nav}>
                        <Entypo
                            name={'chevron-small-left'}
                            size={36} color="white"
                            onPress={() => navigation.goBack()}
                        />
                        <View style={styles.logoContainer}>
                            <Image style={styles.logo} source={Logo} />
                        </View>
                    </View>
                    <View style={styles.tabContainer}>
                        {selected === 0 ? (
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={Pickup}
                            >
                                <Text style={styles.btnText}>Visit Customer</Text>
                            </TouchableOpacity>
                        ) : (selected === 1 ? (
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={Drop}
                            >
                                <Text style={styles.btnText}>Initiate Service</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={Drop}
                            >
                                <Text style={styles.btnText}>Service Completed</Text>
                            </TouchableOpacity>
                        ))}
                        {selected === 0 ? (
                            <View style={styles.tabContent}>
                                <Entypo name={'location-pin'} size={25} color="white" />
                                <Text style={styles.tabText}>{item.pickup}</Text>
                            </View>
                        ) : (
                            <View style={styles.tabContent}>
                                <Entypo name={'location-pin'} size={25} color="white" />
                                <Text style={styles.tabText}>{item.drop}</Text>
                            </View>
                        )}
                    </View>

                    <MapView
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: item.latitude,
                            longitude: item.longitude,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: item.latitude,
                                longitude: item.longitude,
                            }}
                        >
                            <Image
                                source={require('../assets/images/location-pin.png')}
                                style={styles.pin}
                            />
                        </Marker>
                    </MapView>

                    <View style={styles.detailsContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.header}>Service Details</Text>
                        </View>
                        <View style={styles.details}>
                            <View style={styles.orderDetails}>
                                <Text style={styles.packageText}>Service ID: #{item.id}</Text>
                                <Text style={styles.packageText}>Phone: +91 {item.phone}</Text>
                                <Text style={styles.packageText}>Amount: ₹ {item.amount}</Text>
                            </View>
                            <Entypo
                                name='phone'
                                size={30}
                                color="white"
                                style={styles.callBtn}
                            />
                        </View>
                        {selected === 0 ? (
                            <TouchableOpacity onPress={Drop} style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Reached</Text>
                            </TouchableOpacity>
                        ) : (selected === 1 ? (
                            <TouchableOpacity onPress={Delivered} style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Start Service</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={() => navigation.navigate('PackageDelivered')} style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Done</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            ))}

        </SafeAreaView>
    );
};

export default DeliveryProcess;

const styles = ScaledSheet.create({
    nav: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: MyColors.primary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom: 0.5,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 50,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    detailsContainer: {
        marginTop: 'auto',
        marginHorizontal: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: MyColors.primary,
    },
    tabContainer: {
        marginHorizontal: 10,
        padding: 20,
        backgroundColor: MyColors.primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    btn: {
        paddingVertical: 10,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'white',
    },
    btnText: {
        color: 'white',
        fontSize: '13@s',
        fontWeight: '600',
    },
    tabContent: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    tabText: {
        color: 'white',
        fontSize: '13@s',
        fontWeight: '600',
        marginLeft: 5,
    },
    headerContainer: {
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        paddingVertical: 12,
    },
    header: {
        color: 'white',
        fontSize: '13@s',
        fontWeight: '600',
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    packageText: {
        color: 'white',
        fontSize: '12@s',
        marginBottom: 15
    },
    callBtn: {
        backgroundColor: 'orangered',
        borderRadius: 50,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 7,
        marginBottom: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: '13@s',
        fontWeight: '600',
    },
    pin: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
});
