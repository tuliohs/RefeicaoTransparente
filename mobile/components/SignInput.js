import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default ({ IconSvg, placeholder, value, change, password }) => {
    const [tex, setTex] = useState('');

    return (
        <View style={styles.InputArea}>
            {IconSvg}
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#268596"
                value={value}
                onChangeText={c => change(c)}
                secureTextEntry={password}
                style={styles.Input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    InputArea: {
        width: "100%",
        height: "60px",
        backgroundColor: "#FFF",
        flexDirection: "row",
        borderRadius: "30px",
        paddingLeft: "15px",
        alignItems: "center",
        marginBottom: "15px"
    },
    Input: {
        flex: 1,
        fontSize: "16px",
        color: "268596",
        marginLeft: "10px"
    }
});
