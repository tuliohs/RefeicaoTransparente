import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStack from './MainStack';

//paginas de usuario e autenticação
import SignInScreen from '../screens/User/SignIn/SignInScreen'
import AuthScreen from '../screens/User/Auth/AuthScreen'

//Outras Paginas
import HomeScreen from '../screens/Home/HomeScreen'
import CategoriaScreen from '../screens/Categoria/CategoriaScreen'
import ProdutoScreen from '../screens/Produto/ProdutoScreen'

const Drawer = createDrawerNavigator();

export default function LeftDrawer() {

    return <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainStack} />
        <Drawer.Screen name="SignIn" component={SignInScreen} />
        <Drawer.Screen name="Auth" component={AuthScreen} />
        <Drawer.Screen name="Categoria" component={CategoriaScreen} />
        <Drawer.Screen name="Produto" component={ProdutoScreen} />
    </Drawer.Navigator>
}