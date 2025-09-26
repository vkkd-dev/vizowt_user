/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';;
import { MyColors } from '../../assets/MyColors';
import { ScaledSheet } from 'react-native-size-matters'

const Payment = ({ navigation }) => {

    return (
        <View style={styles.amountContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Account Transfer</Text>
                <Text style={styles.headerText}>Balance: ₹ 12,648</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>Transfer Amount</Text>
                <TextInput
                    placeholder="Enter your amount"
                    placeholderTextColor={MyColors.darkGray}
                    keyboardType="numeric"
                    style={styles.input} />
                <TouchableOpacity
                    onPress={() => navigation.navigate('PaymentRqst')}
                    style={styles.buttonContainer}
                >
                    <Text style={styles.button}>Transfer Request</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Payment;

const styles = ScaledSheet.create({
    amountContainer: {
        marginHorizontal: 30,
        marginVertical: 20,
        elevation: 1,
        borderRadius: 1,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: MyColors.textBackground,
        marginVertical: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    headerText: { 
        color: 'white', 
        fontSize: '13@s', 
        fontWeight: 'bold',
    },
    bodyContainer: {
        paddingHorizontal: 30,
    },
    title: {
        color: 'gray',
        fontSize: '15@s',
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        fontSize: '12@s',
        color: MyColors.black,
        fontWeight: 'bold',
        marginVertical: 20,
        borderRadius: 7,
        paddingLeft: 20,
        borderWidth: .5,
        borderColor: MyColors.darkGray,
        alignSelf: 'center'
    },
    buttonContainer: { 
        backgroundColor: MyColors.textBackground, 
        margin: 20, 
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 7, 
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    button: { 
        fontSize: '13@s', 
        fontWeight: 'bold', 
        color: 'white',
    },
});
