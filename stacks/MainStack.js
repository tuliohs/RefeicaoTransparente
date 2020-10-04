import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//paginas
import HomeScreen from '../screens/Home/HomeScreen'
import SigInSreen from '../screens/SignIn/SigInSreen'

//cria a stack que permite o empilhamento de telas
const Stack = createStackNavigator();

const MainStack = () => {
    return <Stack.Navigator initialRouteName="SigIn">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SigIn" component={SigInSreen} />
    </Stack.Navigator>
}
export default MainStack;