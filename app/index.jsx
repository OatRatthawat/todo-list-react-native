import { Text, View, StyleSheet } from "react-native";
import WelcomePage from "../screens/welcomePage/WelcomePage";

export default function Index() {
  return (
    <View style={styles.container}>
      <WelcomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
