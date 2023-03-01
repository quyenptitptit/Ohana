import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import HomeScreen from "../../src/screens/HomeScreen";
import SavedScreen from "../../src/screens/SavedScreen";
import PostScreen from "../../src/screens/PostScreen";
import ChatScreen from "../../src/screens/ChatScreen";
import AccountScreen from "../../src/screens/AccountScreen";
import COLORS from "../constants/color";
import stackNavigation from "./stackNavigation";
import LoginScreen from "../screens/LoginScreen";
import InformationScreen from "../screens/InformationScreen";
import RegisterScreen from "../screens/RegisterScreen";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { position: "absolute", height: 68 } }}>
            <Tab.Screen
                name='Home'
                component={App}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image
                                source={focused ? require("../../assets/icons/home_focused.png") : require("../../assets/icons/home.png")}
                                resizeMode='contain'
                                style={{ width: 25, height: 25, tintColor: focused ? COLORS.red : COLORS.grey }}
                            />
                            <Text style={{ color: focused ? COLORS.red : COLORS.grey, fontSize: 12 }}>Home</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='Saved'
                component={SavedScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image
                                source={focused ? require("../../assets/icons/love_focused.png") : require("../../assets/icons/love.png")}
                                resizeMode='contain'
                                style={{ width: 25, height: 25, tintColor: focused ? COLORS.red : COLORS.grey }}
                            />
                            <Text style={{ color: focused ? COLORS.red : COLORS.grey, fontSize: 12 }}>Saved</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='Post'
                component={PostScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: COLORS.red,
                                width: 50,
                                height: 50,
                                bottom: 5,
                                borderRadius: 8,
                            }}
                        >
                            <Image
                                source={require("../../assets/icons/plus.png")}
                                resizeMode='contain'
                                style={{ width: 25, height: 25, tintColor: "#FFFFFF" }}
                            />
                            {/* <Text style={{ color: focused ? COLORS.red : COLORS.grey, fontSize: 12 }}>Post</Text> */}
                        </View>
                    ),
                    headerShown: true,
                    header: () => (
                        <View style={styles.header}>
                            <Text style={styles.title}>Create Post</Text>
                            <Text style={styles.cancelBtn}>Cancel</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='Chat'
                component={ChatScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image
                                source={focused ? require("../../assets/icons/chat_focused.png") : require("../../assets/icons/chat.png")}
                                resizeMode='contain'
                                style={{ width: 25, height: 25, tintColor: focused ? COLORS.red : COLORS.grey }}
                            />
                            <Text style={{ color: focused ? COLORS.red : COLORS.grey, fontSize: 12 }}>Chat</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='Account'
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image
                                source={focused ? require("../../assets/icons/user_focused.png") : require("../../assets/icons/user.png")}
                                resizeMode='contain'
                                style={{ width: 25, height: 25, tintColor: focused ? COLORS.red : COLORS.grey }}
                            />
                            <Text style={{ color: focused ? COLORS.red : COLORS.grey, fontSize: 12 }}>Account</Text>
                        </View>
                    ),
                    headerShown: true,
                    header: () => (
                        <View style={styles.header}>
                            <Text style={styles.title}>Acount</Text>
                            <Text style={styles.cancelBtn}>Logout</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
function App() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Information" component={InformationScreen} />
            <Stack.Screen name="SignUp" component={RegisterScreen} />
        </Stack.Navigator>
    )
}
// export default App
const styles = StyleSheet.create({
    // shadow: {
    //     shadowColor: "#7F5DF0",
    //     shadowOffset: {
    //         width: 0,
    //         height: 10,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 3.5,
    //     elevation: 5,
    // },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 55,
        marginTop: 24,
        position: "relative",
        borderBottomColor: COLORS.black,
        borderBottomWidth: 0.5,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    cancelBtn: {
        position: "absolute",
        right: 24,
    },
});
