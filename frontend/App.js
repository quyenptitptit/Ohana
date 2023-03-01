import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigation/tabs";
import { Provider } from "react-redux";
import store from "./src/redux/store";


export default function App() {
    return (
        <Provider store={store} >
            <NavigationContainer>
                <Tabs />
            </NavigationContainer>
        </Provider>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });
