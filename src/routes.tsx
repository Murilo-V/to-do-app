import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={ { headerShown: false } }>
                <Screen name="Landing" component={Landing} />
                <Screen name="Register" component={Register} />
                <Screen name="Login" component={Login} />
            </Navigator>
        </NavigationContainer>
    )
}