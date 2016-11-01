
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, View, Button, Icon, Tabs } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import myTheme from '../../themes/base-theme';

import TabOne from './storePage';

class Store extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func
  }


  render() {
    return (
      <Container theme={myTheme}>
        <Header>
          <Title>Магазин сказок</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <View>
          <Tabs locked>
            <TabOne tabLabel="Сказки" />
            <TabOne tabLabel="Образовалки" />
            <TabOne tabLabel="Помощник" />
          </Tabs>
        </View>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer())
  };
}

export default connect(null, bindAction)(Store);
