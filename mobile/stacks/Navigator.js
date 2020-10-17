import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import LeftDrawer from './LeftDrawer';

const Navigator = () => {
    return (
        <NavigationContainer>
            <LeftDrawer />
        </NavigationContainer>
    );
}
export default Navigator;