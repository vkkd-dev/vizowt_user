/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import OrderItems from '../Components/OrderItems';

const History = ({ navigation }) => {

    const histories = [
        {
            name: 'Mr. Raj Singh',
            address: 'Bangaghar, Rajghar linked load, House no 1, near medical store, Guwahati 781032',
            date: '8-02-2021',
            phone: '9876543210',
        },
        {
            name: 'Miss Selena Sharma',
            address: 'Lachit nagar, bylane 3, House no 20, near SBI ATM, Guwahati 781008',
            date: '8-02-2021',
            phone: '9876543210',
        },
        {
            name: 'Mr. Aman Singh',
            address: 'Bangaghar, Rajghar linked load, House no 1, near medical store, Guwahati 781032',
            date: '8-02-2021',
            phone: '9876543210',
        },
        {
            name: 'Mr. Rahul Sharma',
            address: 'Bangaghar, Rajghar linked load, House no 1, near medical store, Guwahati 781032',
            date: '8-02-2021',
            phone: '9876543210',
        },
        {
            name: 'Mr. Bishal Singh',
            address: 'Lachit nagar, bylane 3, House no 20, near SBI ATM, Guwahati 781008',
            date: '8-02-2021',
            phone: '9876543210',
        },
        {
            name: 'Mr. Raj Singh',
            address: 'Bangaghar, Rajghar linked load, House no 1, near medical store, Guwahati 781032',
            date: '8-02-2021',
            phone: '9876543210',
        },
        {
            name: 'Miss Selena Sharma ',
            address: 'Lachit nagar, bylane 3, House no 20, near SBI ATM, Guwahati 781008',
            date: '8-02-2021',
            phone: '9876543210',
        },
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={histories}
                renderItem={({ item }) => <OrderItems item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
    }
})

export default History;