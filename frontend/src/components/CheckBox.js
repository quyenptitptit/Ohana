import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CheckBox = ({ isChecked, label, onPress }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <Image
                    source={isChecked ? require("../../assets/icons/tick.png") : require("../../assets/icons/unchecked.png")}
                    resizeMode='contain'
                    style={{ width: 24, height: 24, marginRight: 4, marginTop: 2 }}
                />
                <Text>{label}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CheckBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 55,
        alignItems: "center",
    },
});
