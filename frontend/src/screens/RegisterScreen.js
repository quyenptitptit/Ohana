import React, { useState } from "react";
import { View, SafeAreaView, ScrollView, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import Input from "../components/Input";
import COLORS from "../constants/color";
import { registerUser } from "../redux/apiRequest";


function RegisterScreen(props) {
    const BASE_URL = "http://10.0.2.2:2001/api/auth"
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [email, setEmail] = useState("")
    const [textError, setTextError] = useState("")
    const dispatch = useDispatch()

    const fetchRegister = async (user) => {
        console.log('register')
        try {
            const res = await fetch(`${BASE_URL}/register`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    password: user.password
                })
            })
            console.log(user)
            const json = await res.json()
            console.log(JSON.stringify(json))
        }
        catch (e) {
            console.error({error: e})
        }
    }

    const handleClickRegister = () => {
        const user = {
            username: username,
            password: password,
            email: email
        }
        if(password2 != user.password) setTextError("Password don't match")
        else if(!user.email.includes('@gmail.com')) setTextError('Email must be in the format @gmail.com')
        else {
            setTextError('')
            // fetchRegister(user)
            props.setIsCheckSignUp(false)
            registerUser(user, dispatch)
        }
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
                    <Input 
                        label='Confirm Password' 
                        placeholder='Enter the password' 
                        onChangeText={text => setPassword2(text)}
                        secureTextEntry={true} 
                    />
                    <Input 
                        label='Email' 
                        placeholder='Enter the email' 
                        onChangeText={(text) => setEmail(text)} 
                    />
                    <Button title='Sign Up' onPress={handleClickRegister} />
                    <Text style={styles.textError}>{textError}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: COLORS.white,
        marginBottom: 68,
    },
    textError: {
        color: COLORS.red,
    }
});