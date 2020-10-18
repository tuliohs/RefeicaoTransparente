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
import EmailIcon from '../../../assets/email.png';
import LockIcon from '../../../assets/lock.png';

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
        if (emailField.toUpperCase() === 'ADMIN' && passwordField === 'admin')
            navigation.navigate('Auth')
        else messageAlert('Usuario ou Senha Inválidos')
    }
    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.InputArea}  >
                <SignInput icon={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    change={setEmailField}
                />
                <SignInput icon={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    change={setPasswordlField}
                    password={true} />
                <TouchableOpacity style={styles.CustomButton} onPress={() => handleSignClick()}>
                    <Text style={styles.CustomButtonText}> LOGIN</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.CustomButtonText}> Usuario:"admin" e Senha: "admin"</Text>
            <TouchableOpacity style={styles.SignMessageButton} onPress={() => navigation.navigate('SingUp')}>
                <Text style={styles.SignMessageButtonText}>Criar Usuário e Senha.</Text>
                <Text style={styles.SignMessageButtonBold}>Aqui!</Text>
            </TouchableOpacity>
        </SafeAreaView >
    );
}
export default LoginScreen