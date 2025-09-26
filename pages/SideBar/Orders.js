/* eslint-disable prettier/prettier */
import React from 'react';
import { MyColors } from '../../assets/MyColors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Delivered from './Tabs/Delivered';
import Pending from './Tabs/Pending';

const Tab = createMaterialTopTabNavigator()

const Orders = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: MyColors.primary,
        },
        tabBarLabelStyle: {
          color: MyColors.white,
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'rgba(255, 255, 255, .5)'
        },
      }}
    >
        <Tab.Screen 
            name='Delivered'
            component={Delivered}
        />
        <Tab.Screen 
            name='Pending'
            component={Pending}
        />
    </Tab.Navigator>
  );
};

export default Orders;