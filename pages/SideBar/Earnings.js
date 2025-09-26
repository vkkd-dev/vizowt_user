/* eslint-disable prettier/prettier */
import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { MyColors } from '../../assets/MyColors';
import { ScaledSheet } from 'react-native-size-matters'

const dailyIncome = [
    {
        id: 'a68756Dej8',
        amount: 120,
    },
    {
        id: 'a68756Des54',
        amount: 530,
    },
    {
        id: 'a6875sLOpsD',
        amount: 60,
    },
    {
        id: 'a6875s6e5j8',
        amount: 90,
    },
];

const weeklyIncome = [
    {
        day: 'Monday',
        amount: '500',
    },
    {
        day: 'Tuesday',
        amount: '500',
    },
    {
        day: 'Wednesday',
        amount: '500',
    },
    {
        day: 'Thursday',
        amount: '500',
    },
    {
        day: 'Friday',
        amount: '500',
    },
    {
        day: 'Saturday',
        amount: '500',
    },
    {
        day: 'Sunday',
        amount: '500',
    },
];

const monthlyIncome = [
    {
        month: 'January',
        amount: '500',
    },
    {
        month: 'February',
        amount: '500',
    },
    {
        month: 'March',
        amount: '500',
    },
    {
        month: 'April',
        amount: '500',
    },
    {
        month: 'May',
        amount: '500',
    },
    {
        month: 'June',
        amount: '500',
    },
    {
        month: 'July',
        amount: '500',
    },
    {
        month: 'August',
        amount: '500',
    },
    {
        month: 'September',
        amount: '500',
    },
    {
        month: 'October',
        amount: '500',
    },
    {
        month: 'November',
        amount: '500',
    },
    {
        month: 'December',
        amount: '500',
    },
];

const Earnings = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                    {dailyIncome.map((item, index) => {
                        return (
                            <View key={index} style={styles.card}>
                                <Text style={styles.itemName}>Order ID #{item.id}</Text>
                                <Text style={styles.itemName}>{item.amount}</Text>
                            </View>
                        )
                    })}
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Daily Income</Text>
                        <Text style={styles.title}>540</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    {weeklyIncome.map((item, index) => {
                        return (
                            <View key={index} style={styles.card}>
                                <Text style={styles.itemName}>{item.day}</Text>
                                <Text style={styles.itemName}>{item.amount}</Text>
                            </View>
                        )
                    })}
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Weekly Income</Text>
                        <Text style={styles.title}>540</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    {monthlyIncome.map((item, index) => {
                        return (
                            <View key={index} style={styles.card}>
                                <Text style={styles.itemName}>{item.month}</Text>
                                <Text style={styles.itemName}>{item.amount}</Text>
                            </View>
                        )
                    })}
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Only Income</Text>
                        <Text style={styles.title}>540</Text>
                    </View>
                </View>
        </ScrollView>
    );
};

export default Earnings;

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.background,
        padding: 30,
    },
    card: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 14,
        marginTop: 10,
    },
    itemName: {
        fontSize: '13@s',
        color: MyColors.black3,
    },
    contentContainer: {
        marginHorizontal: 10,
        backgroundColor: MyColors.background,
        elevation: 2,
        borderRadius: 7,
        marginBottom: 50,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: MyColors.textBackground,
        padding: 10,
        borderRadius: 7,
        marginTop: 10,
    },
    title: {
        fontSize: '14@s',
        color: MyColors.lightGray2,
        marginHorizontal: 15,
    },
});
