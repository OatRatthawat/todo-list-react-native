import { View, Text, SafeAreaView, TouchableOpacity } from "react-native"
import styles from "./LoginPageStyle"
import TextInputField from "../../../components/textInput/TextInputField"
import LoginButton from "../../../components/button/LoginButton"
import { useState } from "react"
import { router } from "expo-router"

export default function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginTop}>
                <Text style={styles.loginHeader}>
                    Log in
                </Text>
                <View>
                    <TextInputField
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Enter your Username"
                    />
                    <TextInputField
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Enter your Password"
                    />
                </View>
                <View>
                    <LoginButton text="Log in"/>
                </View>
            </View>
            <View style={styles.loginBottom}>
                <Text style={styles.bottomText}>
                    Don't have an account?
                </Text>
                <TouchableOpacity 
                    style={styles.createAccountButton}
                    onPress={() => router.push("/register")}
                >
                    <Text style={styles.createAccountText}>
                        Create a new account here
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}