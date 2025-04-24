import { Text, View } from "react-native";
import Button from "../../../components/button/Button.jsx";
import styles from "./WelcomePageStyle.jsx";
import { router } from "expo-router";

export default function WelcomePage() {

    return (
        <View style={styles.container}>
            <View style={styles.header1}>
                <View style={styles.header1Direction}>
                    <Text style={styles.todoFont}>
                        To - Do
                    </Text>
                    <Text style={styles.listFont}>
                        List
                    </Text>
                </View>
                <Text style={styles.applicationFont}>
                    Application
                </Text>
            </View>
            <View style={styles.header2}>
                <View style={styles.header2Direction}>
                    <Text style={styles.gettingThingsFont}>
                        Let's Getting Things
                    </Text>
                    <Text style={styles.doneFont}>
                        Done
                    </Text>
                </View>
            </View>
            <View style={styles.buttonInteraction}>
                <Button 
                    text="Log in"
                    onPress={() => router.push('/login')}
                    
                />
                <Button 
                    text="Register" 
                    onPress={() => router.push('/register')}
                />
            </View>
        </View>
    )
}

