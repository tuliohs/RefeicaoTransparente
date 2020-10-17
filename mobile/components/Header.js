import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ title = "Refeição Transparente" }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.Container}>
            <View style={styles.Icon} >
                <Ionicons name="md-arrow-back" size={40} color="black" onPress={() => navigation.goBack()} />
            </View>
            <Text style={styles.Title}>{title}</Text>
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    Title: {
        fontSize: 25,
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
        marginLeft: 5,
        paddingTop: 25,
        textAlign: "left",
        alignItems: "flex-start",
        position: "absolute",
        width: "100%"
    }
});