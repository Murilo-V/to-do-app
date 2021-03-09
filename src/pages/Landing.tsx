import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View, Image } from "react-native";
import landingLogo from '../images/landing-logo.png';
import React from 'react';

export default function Landing() {
    return (
        <View style={styles.container}>

            <Image source={landingLogo}/>

            <Text style={styles.h1}>
                tempo é <Text style={styles.investment}>investimento</Text>
                .
            </Text>

            <Text style={styles.h2}>gerencie agora suas tarefas</Text>
            <StatusBar style="light" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00009E',
      alignItems: 'center',
      justifyContent: 'center',
    },
    h1: {
        fontSize: 50,
        color: '#FC0F90',
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center',
        lineHeight: 50,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {
            width: 1,
            height: 2,
        },
        textShadowRadius: 5,
        marginTop: 40
    },
    investment: {
        color: '#C319E6'
    },
    h2: {
        fontSize: 25,
        textDecorationLine: 'underline',
        fontFamily: 'Raleway_500Medium',
        color: '#FC0F90',
    }
  });