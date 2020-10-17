import React from 'react';
import { View, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    CustomButton,
    CustomButtonText,
} from './styles';

import { ProdutoItems } from './ProdutoItems'
import Header from '../../components/Header'
import ImageCard from '../../components/Card/ImageCard';


export default function ProdutoScreen() {

    const navigation = useNavigation();

    const handleSignInScreenClick = () => {
        navigation.navigate('CadastroProdutos')
    }
    const renderItem = ({ item }) => (
        <ImageCard title={item.title} subTitle={item.subTitle} image={item.image} />
    );
    return (
        <Container>
            <Header title={"Produtos"} />
            <View style={{ padding: 8 }}>
                <FlatList
                    data={ProdutoItems}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", width: "100%" }}>
                <CustomButton onPress={handleSignInScreenClick}>
                    <CustomButtonText>Cadastrar Novo</CustomButtonText>
                </CustomButton>
            </View>
        </Container>
    );
}