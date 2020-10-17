import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//paginas de usuario e autenticação
import SignInScreen from '../screens/User/SignIn/SignInScreen'
import SignUpScreen from '../screens/User/SignUp/SignUpScreen'
import AuthScreen from '../screens/User/Auth/AuthScreen'
//Outras Paginas
import HomeScreen from '../screens/Home/HomeScreen'
import CategoriaScreen from '../screens/Categoria/CategoriaScreen'
import BeneficioScreen from '../screens/Beneficio/BeneficioScreen'
import MaleficioScreen from '../screens/Maleficio/MaleficioScreen'
import ProdutoScreen from '../screens/Produto/ProdutoScreen'
import CadastroScreen from '../screens/Produto/CadastroScreen'

//cria a stack que permite o empilhamento de telas 
const Stack = createStackNavigator();

const MainStack = () => {
    return <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="SingUp" component={SignUpScreen} />
        <Stack.Screen name="CadastroProduto" component={CadastroScreen} />
        <Stack.Screen name="Produto" component={ProdutoScreen} />
        <Stack.Screen name="Categoria" component={CategoriaScreen} />
        <Stack.Screen name="Beneficio" component={BeneficioScreen} />
        <Stack.Screen name="Maleficio" component={MaleficioScreen} />
    </Stack.Navigator>
}
export default MainStack;