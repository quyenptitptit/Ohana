import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";

import Input from "../components/Input";
import COLORS from "../constants/color";

const PostScreen = () => {
    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckBox = () => {
        setIsChecked(!isChecked);
    };

    const [data, setData] = useState();

    const fetchData = async () => {
        console.log("Clicked");
        try {
            const response = await fetch("http://10.0.3.2:2001/api/post/create", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstParam: "firstParam",
                    secondParam: "secondParam",
                }),
            });
            const json = await response.json();
            console.log(JSON.stringify(json));
            setData(json);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
                {/* <Text style={{ color: "#000", fontSize: 24, fontWeight: "bold" }}>Room Information</Text> */}
                <View style={{ paddingTop: 8, paddingBottom: 32 }}>
                    <Input label='Room Area' suffix='m&sup2;' placeholder='Enter the room area' />
                    <Input label='Capacity' suffix='person(s)/room' placeholder='Number of people/room' />
                    <Input label='Expenses' suffix='VND/month' placeholder='Enter the rental price' />
                    <Input label='Deposit' suffix='VND' placeholder='The amount of money' />
                    <Input label='Electricity Cost' suffix='VND' optionFree={true} placeholder='The amount of money' />
                    <Input label='Water Cost' suffix='VND' optionFree={true} placeholder='The amount of money' />
                    <Input label='Internet Cost' suffix='VND' optionFree={true} placeholder='The amount of money' />
                    <CheckBox isChecked={isChecked} onPress={toggleCheckBox} label='Is there space for parking?' />
                    {isChecked && <Input label='Parking Cost' suffix='VND' placeholder='The amount of money' />}
                    <Button onPress={fetchData} title='Publish Post' />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PostScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginBottom: 68,
    },
    checkbox: {},
});
