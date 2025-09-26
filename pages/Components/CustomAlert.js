import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { MyColors } from '../../assets/MyColors';
import { useNavigation } from '@react-navigation/native'

const CustomAlert = ({ visible, title, subTitle }) => {

    const navigation = useNavigation()

    const handleNavigation = () => {
        navigation.navigate('Homepage')
    }

    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.alertContainer}>
                <View style={styles.alertBox}>
                    <Text style={styles.alertTitle}>{title}</Text>
                    <Text style={styles.alertSubTitle}>{subTitle}</Text>
                    <View style={styles.alertButtonContainer}>
                        <TouchableOpacity
                            style={styles.negativeButton}
                            onPress={handleNavigation}
                        >
                            <Text style={styles.buttonText}>Quit wihtout saving</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.positiveButton}
                            onPress={handleNavigation}
                        >
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default CustomAlert

const styles = StyleSheet.create({
    alertContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    alertBox: {
        width: 400,
        backgroundColor: MyColors.background,
        borderRadius: 10,
        alignItems: 'center',
    },
    alertTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 8,
        color: MyColors.white,
        backgroundColor: MyColors.primary,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    alertSubTitle: {
        fontSize: 18,
        marginVertical: 15,
        color: MyColors.gray,
    },
    alertButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    negativeButton: {
        flex: 1,
        margin: 8,
        padding: 10,
        backgroundColor: MyColors.red,
        borderRadius: 5,
        alignItems: 'center',
    },
    positiveButton: {
        flex: 1,
        margin: 8,
        padding: 10,
        backgroundColor: MyColors.primary,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: MyColors.white,
        fontSize: 15,
    },
})