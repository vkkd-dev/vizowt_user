import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import OrderItems from '../../Components/OrderItems'

const Delivered = () => {

  const deliveries = [
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
        data={deliveries}
        renderItem={({item}) => <OrderItems item={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  }
})

export default Delivered
