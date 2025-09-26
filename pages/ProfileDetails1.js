/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, Dimensions } from 'react-native';
import { MyColors } from '../assets/MyColors';
import { ScaledSheet } from 'react-native-size-matters'

const StepsProfile = ({ navigation }) => {
    return (
        <ScrollView 
            style={styles.mainContainer}
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.headerText}>Profile Details</Text>
            <View style={styles.stepsContainer}>
                <Text style={styles.step1}>1</Text>
                <View style={styles.stepStart} />
                <View style={styles.stepEnd} />
                <Text style={styles.step2}>2</Text>
            </View>
            <View style={styles.formSection}>
                <Text style={styles.uploadLabel}>Picture</Text>
                <TouchableOpacity style={styles.uploadBtn}>
                    <Text style={styles.uploadTxt}>Upload</Text>
                </TouchableOpacity>
                <Image source={require('../assets/images/user1.png')} style={styles.img} />
                <View style={styles.inputContainer}>
                    <Text style={styles.label} t>First Name</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder="First name"
                        placeholderTextColor={MyColors.darkGray}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder="Last name"
                        placeholderTextColor={MyColors.darkGray}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Language</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder="English"
                        placeholderTextColor={MyColors.darkGray}
                    />
                </View>

            </View>
            <TouchableOpacity
                style={styles.nextBtn}
                onPress={() =>
                    navigation.navigate('ProfileDetails2')
                }
            >
                <Text style={styles.uploadTxt}>Continue</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = ScaledSheet.create({
    mainContainer: {
        backgroundColor: MyColors.background,
        flex: 1,
        padding: 30,
    },
    headerText: {
        fontSize: '15@s',
        fontWeight: 'bold',
        color: MyColors.primary,
    },
    stepsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    step1: {
        width: '25@s',
        height: '25@s',
        backgroundColor: MyColors.primary,
        color: MyColors.white,
        borderRadius: 70,
        fontSize: '15@s',
        textAlign: 'center',
    },
    stepStart: {
        height: '4@s',
        width: '25@s',
        backgroundColor: MyColors.primary,
    },
    stepEnd: {
        height: '4@s',
        width: '25@s',
        backgroundColor: MyColors.white,
    },
    step2: {
        width: '25@s',
        height: '25@s',
        backgroundColor: MyColors.white,
        color: MyColors.primary,
        borderRadius: 70,
        fontSize: '15@s',
        textAlign: 'center',
    },
    formSection: {
        flex: 1,
        padding: 30,
    },
    uploadLabel: {
        color: MyColors.gray,
        fontSize: '14@s',
    },
    uploadBtn: {
        alignSelf: 'flex-start',
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: MyColors.primary,
        marginVertical: 10,
        borderRadius: 7,
        elevation: 2,
    },
    nextBtn: {
        width: Dimensions.get('screen').width * .75,
        paddingVertical: 12,
        backgroundColor: MyColors.primary,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 7,
        elevation: 2,
        marginBottom: Dimensions.get('screen').height * .1,
    },
    uploadTxt: {
        fontSize: '14@s',
        fontWeight: 'bold',
    },
    img: {
        width: Dimensions.get('screen').width * .2,
        height: Dimensions.get('screen').height * .1,
        marginVertical: 10,
    },
    inputContainer: {
        marginVertical: 5,
    },
    label: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'gray',
    },
    formInput: {
        padding: 10,
        borderWidth: 0.5,
        marginVertical: 10,
        fontSize: '12@s',
        color: MyColors.black,
        fontWeight: 'bold',
        paddingLeft: 20,
        borderRadius: 12,
    },
});

export default StepsProfile;
