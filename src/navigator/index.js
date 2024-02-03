import React from 'react'
import { useSelector } from 'react-redux'
import AppNavigator from './AppNavigator'
import AuthNavigator from './AuthNavigator'

const RootNavigator = () => {
    
    //const isAuth = useSelector(state => state.Auth.user);


    //console.log("Root Navigator Auth "+JSON.stringify(isAuth));
    
    return (
       /**  isAuth 
        ? <AppNavigator />
        : <AuthNavigator />
        */
       <AuthNavigator/>
    )
}

export default RootNavigator;
