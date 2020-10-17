import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
} from './styles';

import SignInput from '../../components/SignInput';

export default function CadastroScreen() {

    const navigation = useNavigation();
    const [produtosField, setProdutosField] = useState('');
    const [tipoField, setTipoField] = useState('');
    const [valorField, setValorlField] = useState('');

    const handleSignInClick = () => {
        navigation.navigate('Home')
    }

    const handleMessageButtonClick = () => {
        navigation.navigate('Home')
    }

    return (
        <Container>
            <refTransLogo width="100%" heigth="160" />
            <InputArea>
                <SignInput
                    placeholder="Nome do Produto"
                    value={produtosField}
                    onChangeText={t => setProdutosField(t)}
                />
                <SignInput
                    placeholder="Verdura, Legume, Grãos"
                    value={tipoField}
                    onChangeText={t => setTipoField(t)}
                />
                <SignInput
                    placeholder="Valor Nutricional"
                    value={valorField}
                    onChangeText={t => setValorField(t)}
                />

                <CustomButton onPress={handleSignInClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>


            </InputArea>
        </Container>
    );
}

