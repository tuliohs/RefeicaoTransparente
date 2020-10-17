import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStack from './MainStack';

//paginas de usuario e autenticação
import SignInScreen from '../screens/User/SignIn/SignInScreen'
import SignUpScreen from '../screens/User/SignUp/SignUpScreen'
import AuthScreen from '../screens/User/Auth/AuthScreen'

//Outras Paginas
import HomeScreen from '../screens/Home/HomeScreen'
import CadastroProduto from '../screens/Produto/Cadastro/CadastroScreen'
import CategoriaScreen from '../screens/Categoria/CategoriaScreen'
import BeneficioScreen from '../screens/Beneficio/BeneficioScreen'
import MaleficioScreen from '../screens/Maleficio/MaleficioScreen'

const Drawer = createDrawerNavigator();

export default function LeftDrawer() {

    return <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainStack} />
        <Drawer.Screen name="SignIn" component={SignInScreen} />
        <Drawer.Screen name="Auth" component={AuthScreen} />
        <Drawer.Screen name="CadastroProduto" component={CadastroProduto} />
        <Drawer.Screen name="Categoria" component={CategoriaScreen} />
        <Drawer.Screen name="Beneficio" component={BeneficioScreen} />
        <Drawer.Screen name="Maleficio" component={MaleficioScreen} />
    </Drawer.Navigator>
}