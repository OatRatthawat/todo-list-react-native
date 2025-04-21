import { Text, StyleSheet, View } from 'react-native';
import styles from './ButtonStyle';
import React from 'react';

const Button = ({ text }) => {
    return(
        <View style={styles.buttonDecoration}>
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </View>
    )
}

export default Button;