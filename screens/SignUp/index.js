import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold

} from './styles';

import SignInput from '../../components/SignInput';


import refTransLogo from '../../assets/Logo.svg';
import EmailIcon from '../../assets/email.svg';
import PersonIcon from '../../assets/person.svg';
import LockIcon from '../../assets/lock.svg';


export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = userState('');
    const [passwordField, setPasswordlField] = userState('');

    const handleSignClick = () => {

    }
    
    const handleMessageButtonClick = () => {

        navigation.reset({
            routes: [{nome: 'SignIn'}]
        });
    }
    
    return (
        <Container>
            <refTransLogo width="100%" heigth="160" />

            <InputArea>

                <SignInput
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                    value={nomeField}
                    onChangeText={t=>setNameField(t)}
                />

                <SignInput
                    IconSvg={EmailIcon}
                            placeholder="Digite se e-mail"
                            value={emailField}
                            onChangeText={t=>setEmailField(t)}
                />

                <SignInput
                    IconSvg={LockIcon} 
                            placeholder="Digite sua senha"
                />value={passwordField}
                            onChangeText={t=>setPasswordlField(t)}
                            password={true}
                

                <CustomButton onPress={handleSiginClick}>
                    <CostonButtonText>CADASTRAR</CostonButtonText>
                </CustomButton>
            </InputArea>

            
            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButton>Já possui uma conta?.</SignMessageButton>
                <SignMessageButtonBold>Faça Login!</SignMessageButtonBold>
            </SignMessageButton>

        </Container>
    );
} 