import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import {View, Text} from "react-native";

import { connect } from 'react-redux';
import { openDrawer } from '../actions/drawer';
import { popRoute, pushNewRoute } from '../actions/route';
import AppNavigator from '../containers/AppNavigator'
class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log('LAUNCH', props);
    }
    static propTypes = {
        openDrawer: React.PropTypes.func,
        popRoute: React.PropTypes.func,
        pushNewRoute: React.PropTypes.func
    }
    popRoute() {
        this.props.popRoute();
    }

    pushNewRoute(route) {
        this.props.pushNewRoute(route);
    }
    render() {
        return (
            <Container>
                <Header>
                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name="ios-menu" />
                    </Button>
                    <Title>Welcome</Title>
                </Header>

                <Content>
                    <View>
                        <Text>Home Page</Text>

                    </View>
                    <Button style={{ backgroundColor: '#6FAF98', alignSelf: 'center' }} onPress={() => this.pushNewRoute('store')}>Go to Store</Button>
                </Content>

                <Footer>
                </Footer>
            </Container>
        );
    }
}
function bindAction(dispatch) {
    return {
        popRoute: () => dispatch(popRoute()),
        openDrawer: () => dispatch(openDrawer()),
        pushNewRoute: route => dispatch(pushNewRoute(route))
    };
}

export default connect(null, bindAction)(Home);