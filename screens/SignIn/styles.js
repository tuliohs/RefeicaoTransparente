import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#368c8c",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    InputArea: {
        widht: "100%",
        padding: "40px",
    },
    CustomButton: {
        height: "60px",
        backgroundColor: "#368c8c",
        borderRadius: "30px",
        justifyContent: "center",
        alignItems: "center",
    },
    CustomButtonText: {
        fontSize: "18px",
        color: "#FFF"
    },
    SignMessageButton: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "50px",
        marginBottom: "20px"
    },
    SignMessageButtonText: {
        fontSize: "16px",
        color: "#FFF"
    },
    SignMessageButtonBold: {
        fontSize: "16px",
        color: "#FFF",
        fontWeight: "bold"
    }
}); 
