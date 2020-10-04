import React from 'react';
import { StyleSheet, TextInput, View, IconSvg } from 'react-native';


export default ({ IconSvg, placeholder, value, onChangText, password }) => {
    return (
        <View style={styles.InputArea}>
            {IconSvg}
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#268596"
                value={value}
                onChangeText={onChangText}
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
