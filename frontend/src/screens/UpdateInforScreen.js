import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, SafeAreaView, ScrollView, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import COLORS from "../constants/color";
import { updateUser } from "../redux/apiRequest";

function UpdateInforScreen(props) {
    const [user, setUser] = useState({})
    const [fullname, setFullname] = useState(user.fullname || "")
    const [address, setAddress] = useState(user.address || "")
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || "")
    const [email, setEmail] = useState(user.email || "")
    const [bankAcount, setBankAcount] = useState(user.bankAcount || {})
    const dispatch = useDispatch()
    const id = useSelector(state => state.auth.login.currentUser._id)
    const userApi = useSelector(state => state.user.user.currentUser)

    const handleClickUpdate = () => {
        console.log('click update')
        const newUser = {
            fullname: fullname,
            address: address,
            phoneNumber: phoneNumber,
            email: email,
            bankAcount: bankAcount
        }
        updateUser(id, newUser, dispatch)
        props.setIsCheckAuthen(false)
        // props.setIsCheckSignUp(false)
        props.setIsCheckUpdate(false)
    }

    useEffect(() => {
        setUser(userApi)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
                <View style={{ paddingTop: 8, paddingBottom: 32 }}>
                    <Input
                        label='Fullname'
                        placeholder={user.fullname}
                        onChangeText={text => setFullname(text)}
                        // value={user.fullname}
                    />
                    <Input
                        label='Address'
                        placeholder={user.address}
                        onChangeText={text => setAddress(text)}
                        // value={user.address}
                    />
                    <Input
                        label='Phone number'
                        placeholder={user.phoneNumber}
                        onChangeText={text => setPhoneNumber(text)}
                        // value={user.phoneNumber}
                    />
                    <Input
                        label='Email'
                        placeholder={user.email}
                        onChangeText={text => setEmail(text)}
                        // value={user.email}
                    />
                    <Input
                        label='Bank acount'
                        placeholder='Enter the bank acount'
                        onChangeText={text => setBankAcount(text)}
                        // value={user.bankAcount}
                    />
                    <Button title='Update' onPress={handleClickUpdate} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default UpdateInforScreen

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: COLORS.white,
        marginBottom: 68,
    },
});
