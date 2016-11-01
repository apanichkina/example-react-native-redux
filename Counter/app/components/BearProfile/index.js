import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, List, ListItem, Button, Icon, InputGroup, Input, View, Tabs } from 'native-base';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';
import myTheme from '../../themes/base-theme';
import TabOne from './storyPage';
import TabTwo from './alarmPage';
import TabThree from './helperPage.js';

class BProfile extends Component {

    static propTypes = {
        openDrawer: React.PropTypes.func,
        closeDrawer: React.PropTypes.func,
        popRoute: React.PropTypes.func
    };
    popRoute() {
        this.props.popRoute();
    }
    constructor(props) {
        super(props);
    }
    bears = [
        {
            name: 'Потапыч',
            selected: true,
            route: ()=>{this.pushNewRoute('bear-profile')}
        },
        {
            name: 'Копатыч',
            selected: false,
            route: ()=>{this.pushNewRoute('bear-profile')}
        },
        {
            name: 'Медведич',
            selected: false,
            route: ()=>{this.pushNewRoute('bear-profile')}
        }
    ];
    render() {
        return (
            <Container theme={myTheme} style={styles.container}>

                <Header>
                    <Button transparent onPress={()=>this.popRoute()}>
                        <Icon name="ios-arrow-back" />
                    </Button>
                    <Title>{this.bears[0].name}</Title>
                    <Button transparent onPress={()=>this.popRoute()}>
                        <Icon name="ios-settings" />
                    </Button>
                </Header>

                <Content>
                    <Tabs locked>
                        <TabOne tabLabel="Сказки" />
                        <TabTwo tabLabel="Будильник" />
                        <TabThree tabLabel="Помощник" />
                    </Tabs>
                </Content>
            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: () => dispatch(closeDrawer()),
        popRoute: () => dispatch(popRoute())
    };
}

export default connect(null, bindAction)(BProfile);
