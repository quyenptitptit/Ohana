import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView, Text, StyleSheet, TouchableOpacity, TextInformation } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import Information from "../components/Information";
import COLORS from "../constants/color";
import { getUser } from "../redux/apiRequest";

function InformationScreen(props) {
    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    const id = useSelector(state => state.auth.login.currentUser._id)
    const userApi = useSelector(state => state.user.user.currentUser)

    const handleClickEdit = () => {
        props.setIsCheckUpdate(true)
    }
    
    useEffect(() => {
        getUser(id, dispatch)
        setUser(userApi)
    }, []);
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
                <View style={{ paddingTop: 8, paddingBottom: 32 }}>
                    <Information label='Fullname' text={user.username}/>
                    <Information label='Address' text={user.address} />
                    <Information label='Phone number' text={user.phoneNumber} />
                    <Information label='Email' text={user.email} />
                    <Information label='Bank account' />
                    <Button title='Edit' onPress={handleClickEdit} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default InformationScreen

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: COLORS.white,
        marginBottom: 68,
    },
});