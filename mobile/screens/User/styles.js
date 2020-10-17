import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#368c8c",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    InputArea: {
        width: "100%",
        padding: 40,
    },
    CustomButton: {
        height: 60,
        backgroundColor: "#368c8c",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    CustomButtonText: {
        fontSize: 18,
        color: "#FFF"
    },
    SignMessageButton: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 20
    },
    SignMessageButtonText: {
        fontSize: 16,
        color: "#FFF"
    },
    SignMessageButtonBold: {
        fontSize: 16,
        color: "#FFF",
        fontWeight: "bold"
    }
}); 
