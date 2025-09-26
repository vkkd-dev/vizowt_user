/* eslint-disable prettier/prettier */
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';

const dummy = [
    {
        name: 'Biraj Singha',
        address: 'Christian Basti, Samannay Path, House No.156, Near BSNL Office',
    },
    {
        name: 'Niku Baruah',
        address: 'Christian Basti, Samannay Path, House No.156, Near BSNL Office',
    },
    {
        name: 'Dipak Chouchary',
        address: 'Christian Basti, Samannay Path, House No.156, Near BSNL Office',
    },
    {
        name: 'Diksha',
        address: 'Christian Basti, Samannay Path, House No.156, Near BSNL Office',
    },
    {
        name: 'Babilon',
        address: 'Christian Basti, Samannay Path, House No.156, Near BSNL Office',
    },
    {
        name: 'Ankita',
        address: 'Christian Basti, Samannay Path, House No.156, Near BSNL Office',
    },
    {
        name: 'Babilon',
        address: 'Christian Basti, Samannay Path, House No.156, Near BSNL Office',
    },
    {
        name: 'Ankita',
        address: 'Christian Basti, Samannay Path, House No.156, Near BSNL Office',
    },
];

const text = () => {
  return (
    <FlatList
        data={dummy}
        renderItem={({item})=>{
            return (
                <View style={styles.card}>
                    <TouchableOpacity style={styles.customerDetails}>
                        <View>
                            <Text style={styles.customerName}>{item.name}</Text>
                            <Text style={styles.customerAddress}>{item.address}</Text>
                        </View>
                        <View>
                            <Entypo name={'location-pin'} size={36} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>
            );
        }}
    />
  );
};

export default text

const styles = StyleSheet.create({
    card:{
        marginHorizontal: 30,
        marginVertical: 15,
        padding: 10,
        height: 110,
        backgroundColor: 'gray',
        borderRadius: 12,
    },
    customerDetails: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    customerName: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
    },
    customerAddress: {
        fontSize: 18,
        color: 'white',
        display:'flex',
        flexWrap: 'wrap',
        width: 350,
        marginTop: 8,
    },
});
