import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MyColors } from '../../assets/MyColors'
import Loadingscreen from '../LoadingScreen'
import OtpVerify from '../OtpVerify'
import ProfileDetails1 from '../ProfileDetails1'
import ProfileDetails2 from '../ProfileDetails2'
import Home from '../Home'
import Profile from '../SideBar/Profile'
import DeliveryProcess from '../DeliveryProcess'
import PackageDelivered from '../PackageDelivered'
import Earnings from '../SideBar/Earnings'
import Orders from '../SideBar/Orders'
import Payment from '../SideBar/Payment'
import PaymentRqst from '../SideBar/PaymentRqst'
import Wallet from '../SideBar/Wallet'
import History from '../SideBar/History'
import { scale } from 'react-native-size-matters'

const Stack = createNativeStackNavigator()

const RootNavigation = () => { 

    return (
        <Stack.Navigator
            initialRouteName='Homepage'
        >
            <Stack.Screen
                name='Root'
                component={Loadingscreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="OTPVerification"
                component={OtpVerify}
                options={{
                    headerTitle: 'OTP Verification',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { 
                        fontWeight: 'bold',
                        color: MyColors.white,
                        fontSize: scale(14),
                    },
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: MyColors.primary
                    }
                }}
            />
            <Stack.Screen
                name="ProfileDetails1"
                component={ProfileDetails1}
                options={{
                    headerTitle: 'Complete Your Profile',
                    headerTitleStyle: { 
                        fontWeight: 'bold',
                        color: MyColors.white,
                        fontSize: scale(14),
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: MyColors.primary
                    }
                }}
            />
            <Stack.Screen
                name="ProfileDetails2"
                component={ProfileDetails2}
                options={{
                    headerTitle: 'Complete Your Profile',
                    headerTitleStyle: { 
                        fontWeight: 'bold',
                        color: MyColors.white,
                        fontSize: scale(14),
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: MyColors.primary
                    }
                }}
            />
            <Stack.Screen
                name="Homepage"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="EditProfile"
                component={Profile}
                options={{
                    headerTitle: 'My Profile',
                    headerTitleStyle: { 
                        fontWeight: 'bold',
                        color: MyColors.white,
                        fontSize: scale(14),
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: MyColors.primary
                    }
                }}
            />
            <Stack.Screen
                name="Earnings"
                component={Earnings}
                options={{
                    headerTitle: 'Earnings',
                    headerTitleStyle: { 
                        fontWeight: 'bold',
                        color: MyColors.white,
                        fontSize: scale(14),
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: MyColors.primary,
                    }
                }}
            />
            <Stack.Screen
                name="Orders"
                component={Orders}
                options={{
                    headerTitle: 'Orders',
                    headerTitleStyle: { 
                        fontWeight: 'bold',
                        fontSize: scale(14),
                        color: MyColors.white,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: MyColors.primary,
                    }
                }}
            />
            <Stack.Screen
                name="Payment"
                component={Payment}
                options={{
                    headerTitle: 'Payment',
                    headerTitleStyle: { 
                        fontWeight: 'bold',
                        fontSize: scale(14),
                        color: MyColors.white,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: MyColors.primary,
                    }
                }}
            />
            <Stack.Screen 
                name="Wallet" 
                component={Wallet} 
                options={{ 
                    headerTitle: 'Wallet',
                    headerTitleStyle: { 
                        fontWeight: 'bold',
                        fontSize: scale(14),
                        color: MyColors.white,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: MyColors.primary,
                    }
                }} 
            />
            <Stack.Screen
                name="History"
                component={History}
                options={{
                    headerTitle: 'History',
                    headerTitleStyle: { 
                        fontWeight: 'bold',
                        fontSize: scale(14),
                        color: MyColors.white,
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: MyColors.primary,
                    }
                }}
            />
            <Stack.Screen 
                name="DeliveryProcess" 
                component={DeliveryProcess} 
                options={{ 
                    headerShown: false 
                }} 
            />
            <Stack.Screen 
                name="PackageDelivered" 
                component={PackageDelivered} 
                options={{ 
                    headerShown: false 
                }} 
            />
            <Stack.Screen 
                name="PaymentRqst" 
                component={PaymentRqst} 
                options={{ 
                    headerShown: false 
                }} 
            />
        </Stack.Navigator>
    )
}

export default RootNavigation