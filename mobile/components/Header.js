import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

//choice betwen  title and subTitle
const Header = ({ title, subTitle, backGo = true }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.Container}>
            {backGo ?
                <View style={styles.Icon} >
                    <Ionicons name="md-arrow-back" size={40} color="black" onPress={() => navigation.goBack()} />
                </View> : <></>}
            <Text style={styles.Title}>{title}</Text>
            <Text style={styles.SubTitle}>{subTitle}</Text>
        </View >
    )
}
export default Header;

const styles = StyleSheet.create({
    Title: {
        fontSize: 30,
        marginLeft: 10,
        fontWeight: "bold",
        color: "white"
    },
    SubTitle: {
        fontSize: 20,
        marginLeft: 10
    },
    Container: {
        flexDirection: "row",
        paddingTop: 25,
        width: '90%',
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    Icon: {
        paddingTop: 25,
        paddingLeft: 10,
        textAlign: "left",
        alignItems: "flex-start",
        position: "absolute",
        width: "100%"
    }
});