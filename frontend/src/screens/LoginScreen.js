import React, { useState } from "react";
import { View, SafeAreaView, ScrollView, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-native";
import Button from "../components/Button";
import Input from "../components/Input";
import COLORS from "../constants/color";
import { loginUser } from "../redux/apiRequest";
import {createNativeStackNavigator} from '@react-navigation/native-stack'


function LoginScreen({setIsCheckAuthen, navigation, route}) {
    const BASE_URL = "http://10.0.3.2:2001/api/auth"
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [textError, setTextError] = useState("")

    const dispatch = useDispatch()
    // const navigate = useNavigate()

    const fetchLogin = async (user) => {
        console.log('login')
        try {
            const res = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: user.username,
                    password: user.password
                }),
            })
            console.log('3')
            const json = await res.json()
            console.log(JSON.stringify(json))
            console.log('2')
            // if(res.status == '403') setTextError("Wrong username!")
            // else if(res.status == '404') setTextError('Wrong password!')
            // else {
            //     console.log(JSON.stringify(json))
            //     setTextError('')
            // }
        }
        catch (e) {
            console.error(e)
        }
    }
    
    // const ress = useSelector(state => state.auth.login.currentUser._id)
    const handleClickLogin = () => {
        const user = {
            username: username,
            password: password
        }
        loginUser(user, dispatch)
        // fetchLogin(user)
        // setIsCheckAuthen(false)
        navigation.navigate('Home')
        // console.log(ress)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
                <View style={{ paddingTop: 8, paddingBottom: 32 }}>
                    <Input 
                        label='Username' 
                        placeholder='Enter the username' 
                        onChangeText={text => setUsername(text)} 
                    />
                    <Input 
                        label='Password' 
                        placeholder='Enter the password' 
                        onChangeText={text => setPassword(text)} 
                        secureTextEntry={true} 
                    />
                    <Button onPress={handleClickLogin} title='Sign In' />
                    <Text style={styles.textError}>{textError}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: COLORS.white,
        marginBottom: 68,
    },
});