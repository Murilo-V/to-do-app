import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={ { headerShown: false } }>
                <Screen name="Landing" component={Landing} />
                <Screen 
                    name="Login" 
                    component={Login}
                    options={{
                        headerShown: true,
                        header: () => <Header />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}