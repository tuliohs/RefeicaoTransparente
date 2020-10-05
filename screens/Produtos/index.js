import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    ProdutoMessageButton,
    ProdutoMessageButtonText,
    ProdutoMessageButtonTextBold
} from './styles';

import SignInput from '../../components/SignInput';
import refTransLogo from '../../assets/Logo.svg';
export default () => {

    const navigation = useNavigation();
    const [produtoField, setProdutoField] = useState('');
    const [tipoField, setTipoField] = userState('');
    const [valorField, setValorlField] = userState('');
    const handleSignClick = () => {
    }
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ nome: 'SignIn' }]
        });
    }
    return (
        <Container>
            <refTransLogo width="100%" heigth="160" />
            <InputArea>
                <ProdutoInput
                    placeholder="Nome do Produto"
                    value={produtoField}
                    onChangeText={t => setProdutoField(t)}
                />
                <ProdutoInput
                    placeholder="Verdura, Legume, Grãos, Raiz..."
                    value={tipoField}
                    onChangeText={t => setTipoField(t)}
                />
                <ProdutoInput
                    placeholder="Valor Nutricional"
                    value={valorField}
                    onChangeText={t => setValorField(t)}
                />
                <CustomButton onPress={handleProdutoClick}>
                    <CostonButtonText>CADASTRAR</CostonButtonText>
                </CustomButton>
            </InputArea>
        </Container>
    );
} 