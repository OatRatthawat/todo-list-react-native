import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff"
    },

    header1: {
        width: 188,
        height: 74,
        margin: 5
    },

    header1Direction: {
        flexDirection: "row"
    },

    header2: {
        width: 188,
        height: 17,
        marginTop: 10,
        margin: 5
    },

    header2Direction: {
        flexDirection: "row",
    },

    buttonInteraction: {
        marginTop: 40,
        margin: 5
    },

    todoFont: {
        color: "#21218E",
        fontWeight: "bold",
        fontSize: 36,
        textAlign: "left"
    },

    listFont: {
        color: "#6161E9",
        paddingLeft: 5,
        fontWeight: "bold",
        fontSize: 36,
    },

    applicationFont: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 24,
    },

    gettingThingsFont: {
        color: "#000000",
        fontWeight: "light",
        fontSize: 15,
        textAlign: "left",
    },

    doneFont: {
        color: "#616DDA",
        paddingLeft: 5,
        fontWeight: "light",
        fontSize: 15,
    }
})

export default styles;