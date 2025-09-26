/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { MyColors } from '../../assets/MyColors';
import CustomAlert from '../Components/CustomAlert';
import { ScaledSheet } from 'react-native-size-matters'

const Profile = ({ navigation }) => {
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.userImgContainer}>
                    <Image source={require('../../assets/images/user1.png')} style={styles.userImg} />
                </View>
                <TouchableOpacity style={styles.editButtonContainer}>
                    <Text style={styles.editButton}>Edit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.bodyTitle}>User Details</Text>
                <View style={styles.bodyContent}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput
                            style={styles.formInput}
                            placeholder="Biraj Singha"
                            placeholderTextColor={MyColors.darkGray}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email ID</Text>
                        <TextInput
                            style={styles.formInput}
                            placeholder="abcde@mail.com"
                            placeholderTextColor={MyColors.darkGray}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Mobile Number</Text>
                        <TextInput
                            style={styles.formInput}
                            placeholder="Mobile Number"
                            placeholderTextColor={MyColors.darkGray}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Full Address</Text>
                        <TextInput
                            style={styles.formInput}
                            placeholder="Full Address"
                            placeholderTextColor={MyColors.darkGray}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Vehicle Type</Text>
                        <TextInput
                            style={styles.formInput}
                            placeholder="Vehicle Type"
                            placeholderTextColor={MyColors.darkGray}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Vehicle Number</Text>
                        <TextInput
                            style={styles.formInput}
                            placeholder="Vehicle Number"
                            placeholderTextColor={MyColors.darkGray}
                        />
                    </View>
                </View>

                <Text style={styles.bodyTitle}>Account Details</Text>
                <View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Account Number</Text>
                        <TextInput
                            style={styles.formInput}
                            placeholder="Account Number"
                            placeholderTextColor={MyColors.darkGray}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>IFSC Code</Text>
                        <TextInput
                            style={styles.formInput}
                            placeholder="IFSC Code"
                            placeholderTextColor={MyColors.darkGray}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Bank Name</Text>
                        <TextInput
                            style={styles.formInput}
                            placeholder="Bank Name"
                            placeholderTextColor={MyColors.darkGray}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Branch Name</Text>
                        <TextInput
                            style={styles.formInput}
                            placeholder="Branch Name"
                            placeholderTextColor={MyColors.darkGray}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Pan Card</Text>
                        <TextInput
                            style={styles.formInput}
                            placeholder="Pan Card Number"
                            placeholderTextColor={MyColors.darkGray}
                        />
                    </View>
                </View>
                <CustomAlert
                    visible={isAlertVisible}
                    title="Save changes?"
                    subTitle={`Your unsaved chnages will be lost.\nSave change before closing?`}
                />
                <TouchableOpacity style={styles.confirmButtonContainer} onPress={() => setIsAlertVisible(true)}>
                    <Text style={styles.confirmButton}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Profile;

const styles = ScaledSheet.create({
    container: {
        backgroundColor: MyColors.background,
    },
    profileContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    editButtonContainer: {
        paddingHorizontal: 20,
        borderRadius: 7,
        backgroundColor: MyColors.primary,
        marginLeft: 100,
    },
    editButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    confirmButtonContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 50,
        borderRadius: 7,
        backgroundColor: MyColors.primary,
    },
    confirmButton: {
        fontSize: '15@s',
        fontWeight: 'bold',
        color: MyColors.lightGray2,
    },
    bodyContainer: {
        marginVertical: 20,
        paddingHorizontal: 50,
    },
    bodyTitle: {
        fontSize: '18@s',
        fontWeight: 'bold',
        color: MyColors.primary,
        marginTop: 15,
    },
    bodyContent: {
        marginTop: 20,
    },
    inputContainer: {
        marginVertical: 10,
    },
    label: {
        fontSize: '14@s',
        fontWeight: 'bold',
        color: MyColors.gray,
    },
    formInput: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: '13@s',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, .2)',
        marginTop: 10,
    },
    userImgContainer: {
        backgroundColor: MyColors.white,
        borderRadius: 75,
        width: Dimensions.get('screen').width * .25,
        height: Dimensions.get('screen').height * .12,
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',
    },
    userImg: {
        width: Dimensions.get('screen').width * .2,
        height: Dimensions.get('screen').width * .28,
    },
});
