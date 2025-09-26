/* eslint-disable prettier/prettier */
import { Text, View, FlatList } from 'react-native';
import React from 'react';
import { MyColors } from '../../assets/MyColors';
import { ScaledSheet } from 'react-native-size-matters'

const paymentHistory = [
    {
        date: '01-01-2022',
        amount: 'Rs. 500',
        status: 'Paid',
    },
    {
        date: '02-01-2022',
        amount: 'Rs. 500',
        status: 'Pending',
    },
    {
        date: '03-01-2022',
        amount: 'Rs. 500',
        status: 'Paid',
    },
    {
        date: '04-01-2022',
        amount: 'Rs. 500',
        status: 'Pending',
    },
    {
        date: '05-01-2022',
        amount: 'Rs. 500',
        status: 'Paid',
    },
    {
        date: '06-01-2022',
        amount: 'Rs. 500',
        status: 'Pending',
    },
    {
        date: '04-01-2022',
        amount: 'Rs. 500',
        status: 'Pending',
    },
    {
        date: '05-01-2022',
        amount: 'Rs. 500',
        status: 'Paid',
    },
    {
        date: '06-01-2022',
        amount: 'Rs. 500',
        status: 'Pending',
    },
    {
        date: '04-01-2022',
        amount: 'Rs. 500',
        status: 'Pending',
    },
    {
        date: '05-01-2022',
        amount: 'Rs. 500',
        status: 'Paid',
    },
    {
        date: '06-01-2022',
        amount: 'Rs. 500',
        status: 'Pending',
    },
    {
        date: '04-01-2022',
        amount: 'Rs. 500',
        status: 'Pending',
    },
    {
        date: '05-01-2022',
        amount: 'Rs. 500',
        status: 'Paid',
    },
    {
        date: '06-01-2022',
        amount: 'Rs. 500',
        status: 'Pending',
    },
    {
        date: '04-01-2022',
        amount: 'Rs. 500',
        status: 'Pending',
    },
    {
        date: '05-01-2022',
        amount: 'Rs. 500',
        status: 'Paid',
    },
    {
        date: '06-01-2022',
        amount: 'Rs. 500',
        status: 'Pending',
    },
];

const WallatData = () => {
    return (
        <FlatList
            data={paymentHistory}
            renderItem={({ item }) => {
                return (
                    <View style={styles.card}>
                        <View>
                            <Text style={styles.boldText}>Request Date</Text>
                            <Text style={styles.boldText}>Amount</Text>
                        </View>
                        <View>
                            <Text style={styles.normalText}>{item.date}</Text>
                            <Text style={styles.normalText}>{item.amount}</Text>
                        </View>
                        <Text style={item.status === 'Paid' ? styles.green : styles.red}>{item.status}</Text>
                    </View>
                );
            }}
        />
    );
};

export default WallatData;

const styles = ScaledSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20,
        elevation: 1,
        borderRadius: 1,
        paddingHorizontal: 25,
        paddingVertical: 20,
        marginVertical: 15,
    },
    boldText: {
        fontSize: '14@s',
        fontWeight: 'bold',
        color: MyColors.black3,
    },
    normalText: {
        fontSize: '12@s',
        color: MyColors.black3,
    },
    green: {
        color: 'green',
        fontSize: '13@s',
        fontWeight: 'bold',
    },
    red: {
        color: 'red',
        fontSize: '13@s',
        fontWeight: 'bold',
    },
});
