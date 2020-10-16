import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

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

//cria a stack que permite o empilhamento de telas
const Stack = createStackNavigator();

const MainStack = () => {
    return <Stack.Navigator initialRouteName="SignIn" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="SingUp" component={SignUpScreen} />
        <Stack.Screen name="CadastroProduto" component={CadastroProduto} />
        <Stack.Screen name="Categoria" component={CategoriaScreen} />
        <Stack.Screen name="Beneficio" component={BeneficioScreen} />
        <Stack.Screen name="Maleficio" component={MaleficioScreen} />
    </Stack.Navigator>
}
export default MainStack;