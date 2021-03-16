import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import landingLogo from '../images/landing-logo.png';
import landingBackground from '../images/landing-background.png';
import { RectButton } from 'react-native-gesture-handler';
import React from 'react';
import { useNavigation } from "@react-navigation/native";

export default function Landing() {

    const navigation = useNavigation();

    function handleNavigateToLogin() {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={landingBackground} style={styles.image}>
                <Image source={landingLogo}/>

                <Text style={styles.h1}>
                    tempo é investimento.
                </Text>

                <Text style={styles.h2}>gerencie agora suas tarefas</Text>

                <RectButton onPress={handleNavigateToLogin} style={styles.loginButton}>
                    <Text style={styles.textLoginButton}>iniciar</Text>
                </RectButton>

                <StatusBar style="light" />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
      },
    h1: {
        fontSize: 50,
        color: '#EB1A8C',
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center',
        lineHeight: 50,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {
            width: 1,
            height: 2,
        },
        textShadowRadius: 5,
        marginTop: 150
    },
    h2: {
        fontSize: 25,
        fontFamily: 'Raleway_600SemiBold',
        color: '#D8B6C9',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {
            width: 1,
            height: 2,
        },
        textShadowRadius: 5,
    },
    loginButton: {
        width: 120,
        backgroundColor: '#191997',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
      },
      textLoginButton: {
        color: '#D8B6C9',
        fontFamily: 'Raleway_700Bold',
        fontSize: 17
      },
  });