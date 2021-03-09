import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './pages/Landing';
import React from 'react';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={ { headerShown: false } }>
                <Screen name="Landing" component={Landing} />
            </Navigator>
        </NavigationContainer>
    )
}