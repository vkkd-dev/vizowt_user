import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { MyColors } from '../assets/MyColors';
import { useRoute } from '@react-navigation/native'
import { ScaledSheet, scale } from 'react-native-size-matters'

const OtpVerify = ({ navigation }) => {
    const route = useRoute()
    const userNumber = route.params?.userNumber
    const [number, setNumber] = useState(userNumber || '9101004425');
    const [resend, setResend] = useState(false)
    const [timer, setTimer] = useState(30)

    useEffect(() => {
        let interval
        if (resend && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1)
            }, 1000)
        } else if (timer === 0) {
            setResend(false)
        }
        return () => {
            clearInterval(interval)
        }
    }, [resend, timer])

    const handleResendOTP = () => {
        setResend(true)
        setTimer(30)
    }

    const handleNavigation = () => {
        navigation.navigate('ProfileDetails1')
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textBold}>Please Enter OTP</Text>
                <Text style={styles.textGray}>Code Sent To +91 {number}</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setNumber}
                    maxLength={1}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setNumber}
                    maxLength={1}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setNumber}
                    maxLength={1}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setNumber}
                    maxLength={1}
                    keyboardType="numeric"
                />
            </View>
            <View>
                <Text style={styles.expireText}>Expire in <Text style={styles.expireTime}>00:25</Text></Text>
            </View>
            <View style={styles.nextSection}>
                <TouchableOpacity style={styles.resendContainer} onPress={handleResendOTP}>
                    <Text style={styles.resendOTP}>
                        {resend ? `Resend in ${timer}s` : 'Resend OTP'}
                    </Text>
                </TouchableOpacity>

                <FontAwesome6 name="circle-arrow-right" size={scale(35)} color={MyColors.primary} onPress={handleNavigation} />
            </View>
        </View>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.background,
        padding: 30,
    },
    textBold: {
        fontSize: '14@s',
        color: MyColors.black,
        fontWeight: 'bold',
    },
    textGray: {
        fontSize: '10@s',
        color: MyColors.darkGray,
        marginTop: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: Dimensions.get('screen').height * .05,
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14@s',
        fontWeight: 'bold',
        paddingLeft: 20,
        elevation: 5,
        color: MyColors.black,
        backgroundColor: '#fff'
    },
    nextSection: {
        marginTop: Dimensions.get('screen').height * .1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
    },
    resendContainer: {
        backgroundColor: MyColors.primary,
        padding: 10,
        borderRadius: 7,
    },
    resendOTP: {
        fontSize: '13@s',
        fontWeight: '100',
        color: MyColors.white,
    },
    nextBtn: {
        fontSize: '18@s',
        fontWeight: 'bold',
    },
    expireText: {
        color: MyColors.gray,
        textAlign: 'center',
        marginTop: 20,
        fontSize: '10@s',
    },
    expireTime: {
        color: 'rgba(255, 0, 0, .5)',
        fontWeight: 'bold',
        fontSize: '11@s',
    }
});

export default OtpVerify;
