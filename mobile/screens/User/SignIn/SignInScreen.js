import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    Button,
    Alert
} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles'
import SignInput from '../../../components/SignInput';

//import refTransLogo from '../../assets/Logo.svg';
import EmailIcon from '../../../assets/email.svg';
import LockIcon from '../../../assets/lock.svg';

const LoginScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordlField] = useState('');

    const messageAlert = () =>
        console.log('adf')
    Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed')
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
    );


    const handleSignClick = () => {
        if (emailField === 'admin' && passwordField === 'admin')
            navigation.navigate('Home')
        else messageAlert()
    }

    const handleMessageButtonClick = () => {
        /*navigation.reset({
            routes: [{ nome: 'SignUp' }]
        });*/
        navigation.navigate('SingUp')
    }

    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.InputArea}  >
                <SignInput IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    change={setEmailField}
                />
                <SignInput IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    change={setPasswordlField}
                    password={true} />
                <TouchableOpacity style={styles.CustomButton} onPress={messageAlert}>
                    <Text style={styles.CustomButtonText}> LOGIN</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.SignMessageButton} onPress={handleMessageButtonClick}>
                <Text style={styles.SignMessageButtonText}>Criar Usuário e Senha.</Text>
                <Text style={styles.SignMessageButtonBold}>Aqui!</Text>
            </TouchableOpacity>
        </SafeAreaView >
    );
}
export default LoginScreen