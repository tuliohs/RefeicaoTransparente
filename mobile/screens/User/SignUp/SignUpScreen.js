import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles'

import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
} from 'react-native'


import EmailIcon from '../../../assets/email.png';
import LockIcon from '../../../assets/lock.png';
import PersonIcon from '../../../assets/person.png';
import SignInput from '../../../components/SignInput';

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordlField] = useState('');

    const handleSingUpClick = () => {
    }
    const handleMessageButtonClick = () => navigation.goBack()

    return (
        <SafeAreaView style={styles.Container}>
            {/*<refTransLogo width="100%" heigth="160" />*/}
            <View style={styles.InputArea}>
                <SignInput
                    icon={PersonIcon}
                    placeholder="Digite seu nome"
                    value={nameField}
                    change={setNameField}
                />
                <SignInput
                    icon={EmailIcon}
                    placeholder="Digite se e-mail"
                    value={emailField}
                    change={setEmailField}
                />
                <SignInput
                    icon={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    change={setPasswordlField}
                    password={true} />
                <TouchableOpacity style={styles.CustomButton} onPress={handleSingUpClick}>
                    <Text style={styles.CustomButtonText}>CADASTRAR</Text>
                </TouchableOpacity >
            </View>
            <TouchableOpacity style={styles.SignMessageButton} onPress={handleMessageButtonClick}>
                <Text style={styles.SignMessageButtonText}>Já possui uma conta?</Text>
                <Text style={styles.SignMessageButtonBold}>Faça Login!</Text>
            </TouchableOpacity>
        </SafeAreaView >
    );
}

export default SignUpScreen;