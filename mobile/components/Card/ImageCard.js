import React from 'react'
import { Button, Card, Title, Paragraph } from 'react-native-paper';

export default function ImageCard({ title, subTitle, image }) {
    return (
        <Card style={{ margin: 12 }}>
            <Card.Content>
                <Title>{title}</Title>
                <Paragraph>{subTitle}</Paragraph>
            </Card.Content>
            <Card.Cover source={image} />
            <Card.Actions>
                <Button>Acessar</Button>
                <Button>Beneficios</Button>
            </Card.Actions>
        </Card>
    );
}