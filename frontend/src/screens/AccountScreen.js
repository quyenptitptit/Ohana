import React, { useState } from "react";
import { View, SafeAreaView, ScrollView, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import COLORS from "../constants/color";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import InformationScreen from "./InformationScreen";
import UpdateInforScreen from "./UpdateInforScreen";


const AccountScreen = ({navigation, route}) => {
    const [isCheckAuthen, setIsCheckAuthen] = useState(true)
    const [isCheckUpdate, setIsCheckUpdate] = useState(false)
    const [isCheckSignUp, setIsCheckSignUp] = useState(false)

    return (
        <View style={styles.container}>
            {isCheckAuthen ? (
                isCheckSignUp ?
                    <RegisterScreen setIsCheckSignUp={setIsCheckSignUp} />
                    :
                    <LoginScreen route={route} navigation={navigation} setIsCheckSignUp={setIsCheckSignUp} setIsCheckAuthen={setIsCheckAuthen} />
            ) : (
                isCheckUpdate ?
                    <UpdateInforScreen setIsCheckUpdate={setIsCheckUpdate} setIsCheckAuthen={setIsCheckAuthen} setIsCheckSignUp={setIsCheckSignUp} />
                    :
                    <InformationScreen setIsCheckUpdate={setIsCheckUpdate} />
            )}
        </View>
    );
};

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: COLORS.white,
        marginBottom: 68,
    },
});
