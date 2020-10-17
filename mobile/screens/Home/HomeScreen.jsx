import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native'

import { HomeItems } from './HomeItems'
import Header from '../../components/Header'
import SimpleCard from '../../components/Card/SimpleCard';

export default function Home() {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <SimpleCard title={item.title} route={item.action} />
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Home"} backGo={false} />
            <FlatList
                data={HomeItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        marginTop: 25,
        marginLeft: 18,
        marginRight: 18,
        borderRadius: 5
    },
    container: {
        color: "#FFF",
        backgroundColor: "#368c8c",
        flex: 1,
        justifyContent: "flex-start"
    }
});
