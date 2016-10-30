import React, { Component } from 'react';
import { Container, Header, Content, Title, Card, CardItem, Text, Thumbnail, Button, Icon } from 'native-base';
import {Actions} from "react-native-router-flux";

let themes = [
    {
        name: 'Свинка Пепка',
        image: require('../../img/pepa.jpeg'),
        route: ()=>{Actions.pop()}
    },
    {
        name: 'Три Кота',
        image: require('../../img/3kota.jpeg'),
        route: ()=>{Actions.pop()}
    },
];

class StoryStore extends React.Component {
    constructor(props) {
        super(props);
        console.log('LAUNCH', props);
    }

    render() {
        return (
            <Container>
                    <Header>
                        <Button transparent onPress={Actions.pop}>
                            <Icon name='ios-arrow-back' />
                        </Button>

                        <Title>StoryStore</Title>

                        <Button transparent>
                            <Icon name='ios-menu' />
                        </Button>
                    </Header>
                <Content>
                    <Card dataArray={themes}
                          renderRow={(theme) =>
                            <CardItem button onPress={theme.route}>
                                <Thumbnail source={theme.image} />
                                <Text>{theme.name}</Text>
                            </CardItem>
                        }>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default (StoryStore);