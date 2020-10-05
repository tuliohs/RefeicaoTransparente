import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//paginas
import HomeScreen from '../screens/Home/HomeScreen'
import SignInSreen from '../screens/SignIn/SignInSreen'
import SignUpScreen from '../screens/SignUp/SignUpScreen'

//cria a stack que permite o empilhamento de telas
const Stack = createStackNavigator();

const MainStack = () => {
    return <Stack.Navigator initialRouteName="SignIn" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignInSreen} />
        <Stack.Screen name="SingUp" component={SignUpScreen} />
    </Stack.Navigator>
}
export default MainStack;