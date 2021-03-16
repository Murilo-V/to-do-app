import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import loginBackground from '../images/login-background.png';
import { RectButton } from 'react-native-gesture-handler';

export default function Login() {
    return (
        <View style={styles.container}>
            <ImageBackground source={loginBackground} style={styles.image}>
                <Text style={styles.h1}>
                    comece a se organizar
                </Text>

                <RectButton style={styles.button}>
                    <Text>iniciar</Text>
                </RectButton>
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
      logo: {
          position: 'absolute',
          top: 40
      },
      h1: {
        fontSize: 50,
        color: '#191997',
        fontFamily: 'Raleway_600SemiBold',
        textAlign: 'center',
        lineHeight: 50,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {
            width: 1,
            height: 2,
        },
        position: 'absolute',
        top: 0,
        textShadowRadius: 5,
        marginTop: 1
    },
    button: {
        margin: 230
    }
});