import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SavedScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Saved Screen</Text>
            <Button title='Saved Screen' onPress={() => alert("Button Clicked!")} />
        </View>
    );
};

export default SavedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#8fcbbc",
    },
});
