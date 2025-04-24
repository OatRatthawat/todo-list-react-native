import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    loginTop: {
        flex: 0.5,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        width: 310,
        height: 225,
    },

    loginBottom: {
        flex: 0.5,
        alignContent: "center",
        justifyContent: "flex-end",
        marginBottom: 50,
    },

    bottomText: {
        fontSize: 14,
        fontWeight: "semibold",
        textAlign: "center"
    },

    loginHeader: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 50,
    },

    createAccountButton: {
        fontSize: 14,
        fontWeight: "semibold",
        marginTop: 10,
    },

    createAccountText: {
        fontSize: 14,
        fontWeight: "semibold",
        textAlign: "center",
        color: "#34A2F2",
        textDecorationLine: "underline",
    }
})

export default styles;