import { Text, TouchableOpacity } from 'react-native';
import styles from './LoginButtonStyle';
import React from 'react';

const LoginButton = ({ text, onPress }) => {
    return(
        <TouchableOpacity 
            style={styles.loginButtonDecoration}
            onPress={onPress}
        >
            <Text style={styles.loginButtonText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default LoginButton;