import React from "react"
import { Text, TextInput, View } from "react-native"
import styles from "./InputText.style"

const InputText = (props) => {
    const { onChange, value } = props
    return (
        <View style={styles.container}>
            <Text style={styles.header_text}>PATIKASTORE</Text>
            <TextInput
                style={styles.input_bar}
                placeholder="Ara..."
                onChange={onChange}
                value={value}
            />
        </View>
    )
}

export default InputText