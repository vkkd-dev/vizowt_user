/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import { MyColors } from '../assets/MyColors';
import { ScaledSheet } from 'react-native-size-matters'

const Step1 = ({ navigation }) => {
    return (
        <ScrollView
            style={styles.mainContainer}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.steps}>
                <Text style={styles.headerText}>Profile Details</Text>
            </View>
            <View style={styles.stepsContainer}>
                <Text style={styles.step}>1</Text>
                <View style={styles.stepLine} />
                <View style={styles.stepLine} />
                <Text style={styles.step}>2</Text>
            </View>
            <View style={styles.formSection}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label} t>Vehicle Type</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder="Enter your vehicle type"
                        placeholderTextColor={MyColors.darkGray}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Vehicle Number</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder="Enter your vehicle number"
                        placeholderTextColor={MyColors.darkGray}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Pin Code</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder="Enter your pin code"
                        placeholderTextColor={MyColors.darkGray}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>District</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder="Enter your district"
                        placeholderTextColor={MyColors.darkGray}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>State</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder="Enter your state"
                        placeholderTextColor={MyColors.darkGray}
                    />
                </View>
            </View>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() =>
                    navigation.navigate('Homepage')
                }
            >
                <Text style={styles.buttonText}>Submit</Text>
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
    steps: {
        justifyContent: 'center',
    },
    stepsCount: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    stepsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    step: {
        width: '25@s',
        height: '25@s',
        backgroundColor: MyColors.primary,
        color: MyColors.white,
        borderRadius: 70,
        fontSize: '15@s',
        textAlign: 'center',
    },
    stepLine: {
        height: '4@s',
        width: '25@s',
        backgroundColor: MyColors.primary,
    },
    formSection: {
        marginTop: Dimensions.get('screen').height * .03,
        alignItems: 'center',
    },
    buttonContainer: {
        width: Dimensions.get('screen').width * .75,
        marginTop: Dimensions.get('screen').height * .05,
        paddingHorizontal: 30,
        paddingVertical: 12,
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 7,
        marginBottom: Dimensions.get('screen').height * .1,
    },
    buttonText: {
        fontSize: '14@s',
        fontWeight: 'bold',
    },
    inputContainer: {
        marginVertical: 5,
    },
    label: {
        fontSize: '14@s',
        fontWeight: 'bold',
        color: 'gray',
    },
    formInput: {
        width: Dimensions.get('screen').width * .75,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 0.5,
        marginTop: 10,
        fontSize: '13@s',
        borderRadius: 12,
    },
});

export default Step1;
