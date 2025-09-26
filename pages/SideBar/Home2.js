import { Text, View, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from 'react-native-geolocation-service';

const Home2 = ({ navigation }) => {
    const [location, setLocation] = useState(null)
    const [permission, setPermission] = useState(false)

    useEffect(() => {
        requestLocation();
        getLocation();
    }, []);

    const requestLocation = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Turn on device lcoation',
                    message:
                        'Please enable your location for better service',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                setPermission(true)
            } else {
                setPermission(false)
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const getLocation = () => {
        Geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
            },
            (error) => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }

    return (
        <View>
            <Text>PLEASE</Text>
        </View>
    )
}

export default Home2
