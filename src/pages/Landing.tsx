import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import landingLogo from '../images/landing-logo.png';
import landingBackground from '../images/landing-background.png';
import { RectButton } from 'react-native-gesture-handler';
import React from 'react';
import { useNavigation } from "@react-navigation/native";

export default function Landing() {

    const navigation = useNavigation();

    function handleNavigateToRegister() {
        navigation.navigate('Register');
    }

    function handleNavigateToLogin() {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={landingBackground} style={styles.image}>
                <Image source={landingLogo}/>

                <Text style={styles.h1}>
                    tempo é <Text style={styles.investment}>investimento</Text>
                    .
                </Text>

                <Text style={styles.h2}>gerencie agora suas tarefas</Text>

                <RectButton onPress={handleNavigateToRegister} style={styles.registerButton}>
                    <Text style={styles.textRegisterButton}>cadastre-se</Text>
                </RectButton>

                <RectButton onPress={handleNavigateToLogin} style={styles.loginButton}>
                    <Text style={styles.textLoginButton}>fazer login</Text>
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
        marginTop: 150
    },
    investment: {
        color: '#C319E6'
    },
    h2: {
        fontSize: 25,
        textDecorationLine: 'underline',
        fontFamily: 'Raleway_600SemiBold',
        color: '#FC0F90',
    },
    registerButton: {
        width: 120,
        backgroundColor: '#00009E',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150
      },
    textRegisterButton: {
        color: '#FC0F90',
        fontFamily: 'Raleway_500Medium',
        fontSize: 17
      },
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
      },
    textLoginButton: {
        color: '#00009E',
        fontFamily: 'Raleway_500Medium',
        fontSize: 17,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#00009E',
        borderStyle: 'solid',
        padding: 8,
        textAlign: 'center',
        width: 120,
      }
  });