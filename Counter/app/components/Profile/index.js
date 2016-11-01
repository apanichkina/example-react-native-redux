import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, List, ListItem, Button, Icon, InputGroup, Input, View } from 'native-base';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import styles from './styles';
import myTheme from '../../themes/base-theme';
class Profile extends Component {

    static propTypes = {
        openDrawer: React.PropTypes.func,
        closeDrawer: React.PropTypes.func
    };

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Container theme={myTheme} style={styles.container}>

                <Header>
                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name="ios-menu" />
                    </Button>
                    <Title>Профиль</Title>
                </Header>

                <Content style={{padding: 16}}>
                    <Text style={{ color: '#00C497' }} >Залогинен</Text>
                                <Text style={{  paddingTop: 5}} >Возраст ребенка</Text>
                            <InputGroup>
                                <Input placeholder='2' />
                            </InputGroup>
                </Content>
            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: () => dispatch(closeDrawer())
    };
}

export default connect(null, bindAction)(Profile);
