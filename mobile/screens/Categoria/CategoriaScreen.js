import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    styleSheet,
    text,
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    ProdutosMessageButton,
    ProdutosMessageButtonText,
   // ProdutosMessageButtonTextBold
} from './styles';


const SignInScreen = () => {

    //const navigation = useNavigation();
    //const [emailField, setEmailField] = useState('');
    //const [passwordField, setPasswordlField] = useState('');
    //essa const indica a pagina destino
    
        navigation.navigate('SignIn')
    }


//import SignInput from '../../components/SignInput';
//import refTransLogo from '../../assets/Logo.svg';

    export default function CategoriaScreen () {

    const navigation = useNavigation();
    
    //const [produtosField, setProdutosField] = useState('');
    //const [tipoField, setTipoField] = useState('');
    //const [valorField, setValorlField] = useState('');

    const handleSignInClick = () => {
        navigation.navigate('Home')
    }

    const handleMessageButtonClick = () => {
        
        navigation.navigate('Maleficio')
    }

    const handleButtonClick = () => {
        
        navigation.navigate('Beneficios')
    }
    
    
    
    return (
        

       
        <Container>      
                       
                       A fruta ajuda a estabilizar a pressão arterial, elimina toxinas do organismo, melhora a visão, 
                       combate a insônia e evita a desidratação. Fonte de antioxidantes, o morango combate os radicais livres 
                       em nosso organismo e retarda o envelhecimento.
               

               
                     <CustomButton onPress={handleButtonClick}>
                    <CustomButtonText>BENEFÍCIOS</CustomButtonText>
                </CustomButton>

                <CustomButton onPress={handleMessageButtonClick}>
                    <CustomButtonText>MALEFÍCIOS</CustomButtonText>
                </CustomButton>


                <CustomButton onPress={handleSignInClick}>
                    <CustomButtonText>VOLTAR</CustomButtonText>
                </CustomButton>


        </Container>




    );
}

