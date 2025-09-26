import { Text, View, Dimensions } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScaledSheet } from 'react-native-size-matters'

const OrderItems = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <Text style={styles.header}>{item.name}</Text>
                <Text style={styles.address}>{item.address}</Text>
            </View>
            {item.date === undefined ?
                <View style={styles.iconContainer}>
                    <Ionicons name="location" size={30} color={MyColors.white} />
                </View> :
                <View style={styles.secondContainer}>
                    <Text style={styles.text}>Delivery date: {item.date}</Text>
                    <Text style={styles.text}>Phone: +91 {item.phone}</Text>
                </View>
            }
        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: MyColors.primary,
        marginVertical: 10,
        borderRadius: 7,
    },
    firstContainer: {
        width: Dimensions.get('screen').width * .4,
    },
    secondContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    header: {
        fontSize: '13@s',
        fontWeight: 'bold',
        color: MyColors.white,
    },
    address: {
        fontSize: '10@s',
        color: MyColors.white,
        marginTop: 10,
    },
    text: {
        fontSize: '11@s',
        color: MyColors.white,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    }
})

export default OrderItems
