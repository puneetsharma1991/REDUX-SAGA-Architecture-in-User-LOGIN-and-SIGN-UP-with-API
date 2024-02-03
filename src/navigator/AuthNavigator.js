import React from 'react'

import Register from '../screens/register'

import LoginUser from '../screens/login'

import DashBoard from '../screens/Dashboard'

import { createNativeStackNavigator } from '@react-navigation/native-stack'



const Stack = createNativeStackNavigator()

const AuthNavigator = () => {

    const stackNavigatorOptions = {
        headerShown: null
        //  ...TransitionPresets.SlideFromRightIOS
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginUser} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Dashboard" component={DashBoard} />

        </Stack.Navigator>
    )
}

export default AuthNavigator;