import { TextInput } from "react-native";
import styles from "./TextInputFieldStyle";

export default function TextInputField({ placeholder, value, mode }){
    return(
        <TextInput 
            inputMode={mode}
            style={styles.inputField}
            placeholder={placeholder}
            text={value}
        />
    )
}