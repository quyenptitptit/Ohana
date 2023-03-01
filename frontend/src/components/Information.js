import React from 'react'
import { StyleSheet, Text, TextInput, View } from "react-native";

function Information({label, text}) {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.label}>{text}</Text>
    </View>
  )
}

export default Information

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16
    },
    label: {
        marginVertical: 5,
        fontSize: 14,
    },
})