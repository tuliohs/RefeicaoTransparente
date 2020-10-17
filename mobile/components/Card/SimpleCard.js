import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Avatar, Card, IconButton } from 'react-native-paper';

export default function SimpleCard({ title, subTitle, action }) {
    const navigation = useNavigation()
    return (
        <Card.Title
            title={title}
            subtitle={subTitle}
            left={(props) => <Avatar.Icon {...props} icon="folder" style={{ backgroundColor: "#368c8c" }} />}
            right={(props) => <IconButton {...props} icon="equal" onPress={() => navigation.navigate('Produto')} />}
        />
    );
}