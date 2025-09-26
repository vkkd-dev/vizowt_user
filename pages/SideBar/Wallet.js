/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import WalletData from './WallatData';
import { MyColors } from '../../assets/MyColors';
import { ScaledSheet } from 'react-native-size-matters'

const Wallet = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.amountContainer}>
                <Text style={styles.title}>Total Balance</Text>
                <Text style={styles.amount}>12,587</Text>
            </View>
            <View>
                <Text style={styles.title2}>Payment History</Text>
                <WalletData />
            </View>
        </View>
    );
};

export default Wallet;

const styles = ScaledSheet.create({
    container: {
        backgroundColor: MyColors.background,
    },
    amountContainer: {
        marginHorizontal: 30,
        borderRadius: 12,
        backgroundColor: 'white',
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        paddingVertical: 30,
        backgroundColor: MyColors.background,
    },
    title: { 
        color: 'gray', 
        fontSize: '20@s', 
    },
    amount: {
        color: MyColors.black3,
        fontSize: '25@s',
        fontWeight: 'bold',
        marginTop: 10,
    },
    title2: { 
        color: 'gray', 
        fontSize: '13@s', 
        marginLeft: 20, 
        marginTop: 20,
    },
});
