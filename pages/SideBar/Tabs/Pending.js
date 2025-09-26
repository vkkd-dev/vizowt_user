import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import OrderItems from '../../Components/OrderItems'

const pendings = [
  {
    name: 'Mr. Raj Singh',
    address: 'Bangaghar, Rajghar linked load, House no 1, near medical store, Guwahati 781032',
  },
  {
    name: 'Miss Selena Sharma',
    address: 'Lachit nagar, bylane 3, House no 20, near SBI ATM, Guwahati 781008',
  },
  {
    name: 'Mr. Aman Singh',
    address: 'Bangaghar, Rajghar linked load, House no 1, near medical store, Guwahati 781032',
  },
  {
    name: 'Mr. Rahul Sharma',
    address: 'Bangaghar, Rajghar linked load, House no 1, near medical store, Guwahati 781032',
  },
  {
    name: 'Mr. Bishal Singh',
    address: 'Lachit nagar, bylane 3, House no 20, near SBI ATM, Guwahati 781008',
  },
  {
    name: 'Mr. Raj Singh',
    address: 'Bangaghar, Rajghar linked load, House no 1, near medical store, Guwahati 781032',
  },
  {
    name: 'Miss Selena Sharma ',
    address: 'Lachit nagar, bylane 3, House no 20, near SBI ATM, Guwahati 781008',
  },
]

const Pending = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={pendings}
        renderItem={({ item }) => <OrderItems item={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  }
})

export default Pending
