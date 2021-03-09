import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View } from "react-native";
import React from 'react';

export default function Landing() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                tempo é <Text style={styles.investment}>investimento</Text>
                .
            </Text>
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
    text: {
        fontSize: 50,
        color: '#FC0F90',
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center',
    },
    investment: {
        color: '#C319E6'
    }
  });