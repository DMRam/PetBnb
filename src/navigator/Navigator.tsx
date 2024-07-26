import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { DashboardScreenTest } from '../../src/screens/dashboard/DashboardScreenTest';
import { LoginScreen } from '../../src/screens/credentials/LoginScreen';
import { DashboardScreen } from '../../src/screens/dashboard/DashboardScreen'

export const Navigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="MyTest" component={DashboardScreenTest} />
            {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        </Stack.Navigator>
    )
}
