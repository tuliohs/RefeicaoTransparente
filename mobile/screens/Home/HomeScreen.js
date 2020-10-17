import React from 'react';
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    CustomButton,
    CustomButtonText,
} from './styles';

import Header from '../../components/Header'

export default function Home() {
    const navigation = useNavigation();
    //const [produtosField, setProdutosField] = useState('');
    //const [tipoField, setTipoField] = useState('');
    //const [valorField, setValorlField] = useState('');

    const handleSignInScreenClick = () => {
        navigation.navigate('CadastroProdutos')
    }

    const handleMessageClick = () => {
        navigation.navigate('Abacate')
    }

    const handleCadastro = () => {
        navigation.navigate('CadastroProduto')
    }

    const handleSignInMessageClick = () => {
        navigation.navigate('Empresa')
    }

    const handleMessageButtonClick = () => {
        navigation.navigate('Rabanetes')
    }

    return (
        <Container>
            <Header title={"Home"} />
            <CustomButton onPress={handleMessageClick}>
                <CustomButtonText>ABACATE</CustomButtonText>
            </CustomButton>
            <CustomButton onPress={handleMessageButtonClick}>
                <CustomButtonText>RABANETE</CustomButtonText>
            </CustomButton>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <CustomButton onPress={handleCadastro}>
                    <CustomButtonText>Cadastrar Produto</CustomButtonText>
                </CustomButton>
                <CustomButton onPress={handleSignInMessageClick}>
                    <CustomButtonText>Cadastrar Empresa</CustomButtonText>
                </CustomButton>
            </View>
        </Container>
    );
}