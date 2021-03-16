import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import loginLogo from '../images/login-logo.png'

export default function Header() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack} >
                <Feather name="arrow-left" size={24} color="#191997" />
            </BorderlessButton>

            <Image source={loginLogo} style={styles.logo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EB1A8C',
        padding: 10,
        paddingTop: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Raleway_600SemiBold',
        color: '#191997',
        fontSize: 16
    },
    logo: {
        width: 40,
        height: 40
    }
})