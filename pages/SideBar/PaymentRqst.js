/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import React, { useState } from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { MyColors } from '../../assets/MyColors';

const PaymentRqst = ({ navigation }) => {
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
                    <ActivityIndicator size="large" color="lightblue" visible={show} />
                </View>
            ) : (
                <>
                    <View style={styles.bodyContainer}>
                        <Image source={require('../../assets/images/tick.png')} style={styles.img} />
                        <Text style={styles.textColor}>Payment Request Successfully Sent!</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.btnTextColor}>Done</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

export default PaymentRqst;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: MyColors.primary,
        padding: 50,
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: 200,
        width: 200,
    },
    textColor: {
        fontSize: 20,
        color: 'white',
    },
    btn: {
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: MyColors.primary,
        borderRadius: 7,
        paddingHorizontal: 30,
        paddingVertical: 7,
        elevation: 5,
        shadowColor: MyColors.white,
    },
    btnTextColor: {
        color: MyColors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
});
