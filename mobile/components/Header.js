import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'


const Header = ({ title = "Refeição Transparente" }) => {
    return (
        <View style={styles.Container}><Image /><Text style={styles.Title}>{title}</Text></View>

    )
}
export default Header;



const styles = StyleSheet.create({
    Title: {
        fontSize: 30,
    },
    Container: {
        paddingTop: 25,
    }
});