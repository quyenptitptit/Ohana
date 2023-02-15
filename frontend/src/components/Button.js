import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import COLORS from "../constants/color";

export default function Button({ title, onPress }) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        elevation: 3,
        backgroundColor: COLORS.red,
    },
    text: {
        fontSize: 20,
        lineHeight: 55,
        fontWeight: "bold",
        letterSpacing: 1,
        color: "white",
    },
});
