import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import LoginScreen from '../screens/LoginScreen'


const NavigateLogin = createNativeStackNavigator()

function stackNavigation() {
  return (
    <NavigateLogin.Navigator>
        <NavigateLogin.Screen name='login' component={LoginScreen} />
    </NavigateLogin.Navigator>
  )
}

export default stackNavigation
