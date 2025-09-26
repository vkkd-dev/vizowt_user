/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const deliveryHistory = [
    {
        name: 'Abc',
        address: 'Bhangagarh, near GMC Hostipal, Guwahati-781005',
        date: '8-02-2021',
        amount: '600',
    },
    {
        name: 'XYZ',
        address: 'Bhangagarh, near GMC Hostipal, Guwahati-781005',
        date: '8-02-2021',
        amount: '600',
    },
    {
        name: 'DEF',
        address: 'Bhangagarh, near GMC Hostipal, Guwahati-781005',
        date: '8-02-2021',
        amount: '600',
    },
    {
        name: 'PQR',
        address: 'Bhangagarh, near GMC Hostipal, Guwahati-781005',
        date: '8-02-2021',
        amount: '600',
    },
    {
        name: 'MNO',
        address: 'Bhangagarh, near GMC Hostipal, Guwahati-781005',
        date: '8-02-2021',
        amount: '600',
    },
    {
        name: 'GHi',
        address: 'Bhangagarh, near GMC Hostipal, Guwahati-781005',
        date: '8-02-2021',
        amount: '600',
    },
    {
        name: 'RST',
        address: 'Bhangagarh, near GMC Hostipal, Guwahati-781005',
        date: '8-02-2021',
        amount: '600',
    },
    {
        name: 'MNO',
        address: 'Bhangagarh, near GMC Hostipal, Guwahati-781005',
        date: '8-02-2021',
        amount: '600',
    },
    {
        name: 'GHi',
        address: 'Bhangagarh, near GMC Hostipal, Guwahati-781005',
        date: '8-02-2021',
        amount: '600',
    },
    {
        name: 'RST',
        address: 'Bhangagarh, near GMC Hostipal, Guwahati-781005',
        date: '8-02-2021',
        amount: '600',
    },
    {
        name: 'MNO',
        address: 'Bhangagarh, near GMC Hostipal, Guwahati-781005',
        date: '8-02-2021',
        amount: '600',
    },
];

const historyData = () => {
  return (
    <View style={{marginBottom: 120, marginTop: 10}}>
        <FlatList
            data={deliveryHistory}
            renderItem={({item})=>{
                return (
                    <View style={styles.card}>
                        <View style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center'}}>
                            <Text style={{fontSize: 26, fontWeight: 'bold'}}>{item.name}</Text>
                            <Text style={{fontSize: 20, width: 200}}>{item.address}</Text>
                        </View>

                        <View style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center'}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Delivery Date: {item.date}</Text>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Amount: {item.amount}</Text>
                        </View>
                    </View>
                );
            }}
        />
    </View>
  );
};

export default historyData;

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 6,
        backgroundColor:'white',
        borderRadius: 10,
    },
});
