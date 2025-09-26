import { ActivityIndicator, Dimensions, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import { MyColors } from '../assets/MyColors';
import { ScaledSheet } from 'react-native-size-matters'

const PackageDelivered = ({ navigation }) => {
    const [show, setShow] = useState(true);
    const Timer = () => {
        setTimeout(() => {
            setShow(false);
        }, 1000);
    };
    return (
        <View style={styles.container}>
            {show ? (
                <View onLayout={Timer}>
                    <ActivityIndicator size="large" color="green" visible={show} />
                    <Text style={styles.loadingText}>Please wait...</Text>
                </View>
            ) : (
                <>
                    <View style={styles.bodyContainer}>
                        <Image source={require('../assets/images/tick.png')} style={styles.img} />
                        <Text style={styles.text}>Service Completed!</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() =>
                            navigation.navigate('Homepage')
                        }>
                        <Text style={styles.buttonText}>Done</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

export default PackageDelivered;

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: MyColors.primary,
        padding: 50,
    },
    loadingText: { 
        fontSize: '14@s', 
        marginTop: 20 
    },
    bodyContainer: {
        flex: 1, 
        justifyContent: 'center'
    },
    img: {
        width: Dimensions.get('screen').width *.4,
        height: Dimensions.get('screen').height *.2,
    },
    text: {
        fontSize: '16@s',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btn: {
        marginTop: 'auto',
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: MyColors.primary,
        borderRadius: 14,
        elevation: 1,
        shadowColor: MyColors.lightGray,
    },
    buttonText: { 
        fontSize: '13@s', 
        color: 'white', 
        fontWeight: 'bold' 
    },
});
