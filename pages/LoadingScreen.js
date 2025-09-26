/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    Image,
    View,
    ActivityIndicator,
    TouchableOpacity,
    TextInput,
    Text,
    Dimensions
} from 'react-native';
import LogoMain from '../assets/LogoMain.png';
import { MyColors } from '../assets/MyColors';
import { ScaledSheet } from 'react-native-size-matters'

const Loadingscreen = ({ navigation }) => {
    const [show, setShow] = useState(true);
    const [number, setNumber] = useState(true);
    const Timer = () => {
        setTimeout(() => {
            setShow(false);
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={LogoMain}
            />
            {show ? (
                <View onLayout={Timer}>
                    <ActivityIndicator size="large" color="red" visible={show} style={{ marginBottom: 50 }} />
                </View>
            ) : (
                <View style={styles.loginContainer}>
                    <View style={styles.input}>
                        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png' }} style={styles.img} />
                        <Text style={styles.preText}>+91 </Text>
                        <TextInput
                            style={styles.textInput}
                            name="phone"
                            maxLength={10}
                            keyboardType="numeric"
                            placeholder="Enter your number"
                            placeholderTextColor='grey'
                            onChangeText={setNumber}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.continueBtn}
                        title="Continue"
                        onPress={() =>
                            navigation.navigate('OTPVerification', { userNumber: number })
                        }
                    >
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: MyColors.primary,
    },
    logo: {
        flex: 1,
        alignSelf: 'center',
        width: Dimensions.get('screen').width * .5,
        resizeMode: 'contain',
    },
    loginContainer: {
        alignItems: 'center',
        backgroundColor: MyColors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 'auto',
    },
    input: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: Dimensions.get('screen').height * .05,
        paddingHorizontal: 20,
        borderBottomColor: 'red',
        borderBottomWidth: 0.5,
    },
    textInput: {
        fontSize: '12@s',
        color: MyColors.black,
        fontWeight: 'bold',
    },
    continueBtn: {
        backgroundColor: MyColors.primary,
        borderRadius: 7,
        alignItems: 'center',
        marginBottom: 40,
        paddingVertical: 12,
        paddingHorizontal: Dimensions.get('screen').width * .15,
    },
    img: {
        width: '14@s',
        height: '12@s',
        marginRight: 5,
    },
    preText: {
        color: MyColors.gray,
        fontSize: '15@s'
    },
    buttonText: {
        color: 'white',
        fontSize: '13@s',
        fontWeight: 'bold'
    },
});

export default Loadingscreen;
