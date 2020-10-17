import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import { useNavigation } from '@react-navigation/native';

export default function AuthScreen() {
    const navigation = useNavigation();
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const validation = (result) => {
        console.log(result)
        if (result === "ABCDE-12345-A2A4" || result === "EDASA-85987-A1A4" || result === "OSIXV-23497-A4A4" || result === "POQWE-32184-A3A4") {
            navigation.navigate('Home');
        }
        else alert("Codigo Inválido")
    }

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        validation(data)
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <SafeAreaView style={styles.body} >
            <View style={[styles.header]}><Button title="back" onPress={() => navigation.navigate('SignIn')}></Button><Text style={styles.title}>Aproxime o QRCode da camera</Text></View>
            <View style={{ flex: 1 }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={[styles.container]}>
                    <BarcodeMask />
                    {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
                </BarCodeScanner>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: "80%"
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 2,
        height: 1,
        width: '80%',
    },
    header: {
        flexDirection: "row",
        borderRadius: 30,
        paddingLeft: 15,
        textAlign: "right",
        height: "10%",
        alignItems: "center",
        marginTop: 15
    },
    body: {
        flex: 1,
        paddingTop: 0
    }
});
