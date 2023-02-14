import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CheckBox from "./CheckBox";

const Input = ({ label, suffix, error, password, optionFree, onFocus = () => {}, ...props }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={{ marginBottom: 16 }}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.container}>
                <View style={{ ...styles.inputContainer, width: optionFree ? "80%" : "100%" }}>
                    <TextInput {...props} />
                    <Text>{suffix}</Text>
                </View>
                {optionFree && <CheckBox isChecked={isChecked} onPress={() => setIsChecked(!isChecked)} label='Free' />}
            </View>
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    label: {
        marginVertical: 5,
        fontSize: 14,
    },
    inputContainer: {
        width: "80%",
        height: 55,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 0.5,
        paddingHorizontal: 16,
        borderRadius: 6,
    },
});
