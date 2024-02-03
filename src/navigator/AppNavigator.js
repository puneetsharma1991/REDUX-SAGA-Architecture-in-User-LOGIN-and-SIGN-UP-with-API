import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DashBoard } from '../screens/Dashboard'

const AppNavigator = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="DashBoard" component={DashBoard} />
        </Stack.Navigator>
    )
}

export default AppNavigator;
