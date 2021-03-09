import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View } from "react-native";
import React from 'react';

export default function Landing() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>todo</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#323232',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#f2f2f2'
    }
  });