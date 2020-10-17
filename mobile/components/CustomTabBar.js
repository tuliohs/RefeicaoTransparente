import React from 'react';
import styled from 'styled-components/native';

/*import HomeIcon from '../assets/home.svg';
import ContatoIcon from '../assets/today.svg';
import Search from '../assets/search.svg';*/

const TabArea = styled.View`
    height: 60;
    background-color: #368c8c;
    flex-direction: row
`;

const TabItem = styled.TouchableOpacity`
    flex: 1
    justify-content: center;
    align-items: center;
`;

export default ({ state, navigation }) => {

    const goto = (screenName) => {
        navigation.navigate(sceenName);
    }
    return (

        <TabArea>
            <TabItem onPress={() => BottomTabBar('Home')}>
                <HomeIcom width="24" height="24" fill="#FFFFFF" />
            </TabItem>

            <TabItem onPress={() => BottomTabBar('Contato')}>
                <ContatoIcom width="24" height="24" fill="#FFFFFF" />
            </TabItem>

            <TabItem onPress={() => BottomTabBar('Search')}>
                <SearchIcom width="24" height="24" fill="#FFFFFF" />
            </TabItem>

        </TabArea>


    );
}