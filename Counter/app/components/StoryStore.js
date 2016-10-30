import React, { Component } from 'react';
import { Container, Header, Content, Title, Card, CardItem, Text, Thumbnail, Button, Icon } from 'native-base';
import {Actions} from "react-native-router-flux";
import { connect } from 'react-redux';
import { popRoute } from '../actions/route';


class StoryStore extends React.Component {
    constructor(props) {
        super(props);
        console.log('LAUNCH', props);
    }

    static propTypes = {
        popRoute: React.PropTypes.func
    }

    popRoute() {
        this.props.popRoute();
    }

    themes = [
    {
        name: 'Свинка Пепка',
        image: require('../../img/pepa.jpeg'),
        route: ()=>{this.popRoute()}
    },
    {
        name: 'Три Кота',
        image: require('../../img/3kota.jpeg'),
        route: ()=>{this.popRoute()}
    }
    ];

    render() {
        return (
            <Container>
                    <Header>

                        <Button transparent onPress={() => this.popRoute()}>
                            <Icon name='ios-arrow-back' />
                        </Button>
                        <Title>StoryStore</Title>
                    </Header>
                <Content>
                    <Card dataArray={this.themes}
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
function bindAction(dispatch) {
    return {
        popRoute: () => dispatch(popRoute())
    };
}

export default connect(null, bindAction)(StoryStore);