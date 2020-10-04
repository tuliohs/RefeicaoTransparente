import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    EmpresaMessageButton,
    EmpresaMessageButtonText,
    EmpresaMessageButtonTextBold

} from './styles';

import EmpresaInput from '../../components/SignInput';


import refTransLogo from '../../assets/Logo.svg';


export default () => {

    const navigation = useNavigation();

    const [nomeField, setNomeField] = useState('');
    const [cnpjField, setCnpjField] = userState('');
    const [enderecoField, setEnderecolField] = userState('');
    const [cidadeField, setCidadelField] = userState('');
    const [emailField, setEmaillField] = userState('');
    const [telefoneField, setTelefoneField] = userState('');

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

                <EmpresaInput
                    
                            placeholder="Nome fantasia"
                            value={nomeField}
                            onChangeText={t=>setNomeField(t)}
                />

                <EmpresaInput
                    
                            placeholder="CNPJ"
                            value={cnpjField}
                            onChangeText={t=>setCnpjField(t)}
                />

                <EmpresaInput
                     
                            placeholder="Endereço"
                            value={valorField}
                            onChangeText={t=>setValorField(t)} 
                     
                />
                
                <EmpresaInput
                    
                            placeholder="Cidade"
                            value={cidadeField}
                            onChangeText={t=>setCidadeField(t)}
                />

                <EmpresaInput
                    
                            placeholder="E-mail"
                            value={emailField}
                            onChangeText={t=>setEmailField(t)}
                />

                <EmpresaInput
                                    
                            placeholder="E-mail"
                            value={telefoneField}
                            onChangeText={t=>setTelefoneField(t)}
                        />

                <CustomButton onPress={handleProdutoClick}>
                    <CostonButtonText>CADASTRAR</CostonButtonText>
                </CustomButton>
            </InputArea>

            
           
        </Container>
    );
} 