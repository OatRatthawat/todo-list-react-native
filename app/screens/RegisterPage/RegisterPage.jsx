import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import TextInputField from '../../../components/textInput/TextInputField';
import LoginButton from '../../../components/button/LoginButton';
import styles from './RegisterPageStyle';

export default function RegisterPage() {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.registerTop}>
                <Text style={styles.registerHeader}>
                    Register
                </Text>
                <View>
                    <TextInputField 
                        placeholder="Enter your Username"
                    />
                    <TextInputField 
                        placeholder="Enter your Password"
                    />
                    <TextInputField 
                        placeholder="Confirm Password"
                    />
                    <TextInputField
                        placeholder="Enter your Email"
                    />
                </View>
                <View>
                    <LoginButton 
                        text="Register"
                    />
                </View>
            </View>
            <View style={styles.registerBottom}>
                <Text style={styles.bottomText}>
                    Have already an account
                </Text>
                <TouchableOpacity
                    onPress={() => router.push("/login")}
                    style={styles.loginButton}
                >
                    <Text style={styles.loginText}>
                        Log in!
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}