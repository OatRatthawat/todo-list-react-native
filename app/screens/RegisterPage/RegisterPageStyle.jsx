import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    registerTop: {
        flex: 0.75,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
    },

    registerBottom: {
        flex: 0.25,
        alignContent: "center",
        justifyContent: "flex-end",
        marginBottom: 50,
    },

    registerHeader: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 50,
    },

    bottomText: {
        fontSize: 14,
        fontWeight: "semibold",
        textAlign: "center",
    },

    loginButton: {
        fontSize: 14,
        fontWeight: "semibold",
        marginTop: 10,
    },

    loginText: {
        fontSize: 14,
        fontWeight: "semibold",
        textAlign: "center",
        color: "#34A2F2",
        textDecorationLine: "underline",
    }
})

export default styles;