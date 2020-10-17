import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    Alert
} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styles'
import SignInput from '../../../components/SignInput';
import EmailIcon from '../../../assets/email.svg';
import LockIcon from '../../../assets/lock.svg';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordlField] = useState('');
    const messageAlert = (message) => Alert.alert(
        'Atenção',
        message,
        { text: 'OK', onPress: () => console.log('OK Pressed') }
    );
    const handleSignClick = () => {
        navigation.navigate('Auth')
        return;
        if (emailField === 'admin' && passwordField === 'admin')
            navigation.navigate('Auth')
        else messageAlert('Usuario ou Senha Inválidos')
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
                <TouchableOpacity style={styles.CustomButton} onPress={() => handleSignClick()}>
                    <Text style={styles.CustomButtonText}> LOGIN</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.SignMessageButton} onPress={() => navigation.navigate('SingUp')}>
                <Text style={styles.SignMessageButtonText}>Criar Usuário e Senha.</Text>
                <Text style={styles.SignMessageButtonBold}>Aqui!</Text>
            </TouchableOpacity>
        </SafeAreaView >
    );
}
export default LoginScreen