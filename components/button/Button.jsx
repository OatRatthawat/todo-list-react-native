import { Text, TouchableOpacity } from 'react-native';
import styles from './ButtonStyle';
import React from 'react';

const Button = ({ text, onPress }) => {
    return(
        <TouchableOpacity 
            style={styles.buttonDecoration}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;