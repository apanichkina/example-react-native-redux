
import React, { Component } from 'react';

import { Container, Content, Card, CardItem, Text, View, Thumbnail, List, ListItem, Icon } from 'native-base';

import styles from './styles';
import { connect } from 'react-redux';
import { popRoute, pushNewRoute } from '../../actions/route';
import ActionButton from 'react-native-action-button';

class TabOne extends Component { // eslint-disable-line
  static propTypes = {
    popRoute: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func
  }

  popRoute() {
    this.props.popRoute();
  }
  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }
  themes_edu = [
    {
      name: 'Свинка Пепка',
      image: require('../../../img/pepa.jpeg'),
      duration: '20:30',
      price: 20,
      route: ()=>{this.pushNewRoute('story-profile')}
    },
    {
      name: 'Три Кота',
      image: require('../../../img/3kota.jpeg'),
      duration: '20:30',
      price: 20,
      route: ()=>{this.pushNewRoute('story-profile')}
    }
  ];
  themes_fun = [
    {
      name: 'Свинка Пепка',
      image: require('../../../img/pepa.jpeg'),
      duration: '20:30',
      price: 20,
      route: ()=>{this.pushNewRoute('story-profile')}
    },
    {
      name: 'Маша и медведь',
      image: require('../../../img/masha.jpeg'),
      duration: '20:30',
      price: 20,
      route: ()=>{this.pushNewRoute('story-profile')}
    }
  ];


  render() { // eslint-disable-line
    return (
      <Container >
        <Content padder slyles={{flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'}}>

            <List style={{
    backgroundColor: 'red'}}>
            <ListItem itemDivider>
              <Text>Образовательные</Text>
            </ListItem>
            <Card dataArray={this.themes_edu}
                  renderRow={(theme) =>
                            <CardItem button onPress={theme.route}>
                                <Thumbnail square size={100} source={theme.image} />
                                <Text>{theme.name}</Text>
                                <Text note>Длительность: {theme.duration}</Text>
                                <Text note>Цена: {theme.price}</Text>
                            </CardItem>
                        }>
            </Card>
            <ListItem itemDivider>
              <Text>Развлекательные</Text>
            </ListItem>
            <Card dataArray={this.themes_fun}
                  renderRow={(theme) =>
                            <CardItem button onPress={theme.route}>
                                <Thumbnail square size={100} source={theme.image} />
                                <Text>{theme.name}</Text>
                                <Text note>Длительность: {theme.duration}</Text>
                                <Text note>Цена: {theme.price}</Text>
                            </CardItem>
                        }>
            </Card>

          </List>
            <View style={{width: 100,height: 200,top: 250,left: 50,position: 'absolute'}}>
            <ActionButton
                buttonColor="#1abc9c"
                onPress={() => { console.log("hi")}}
                >
            </ActionButton>
                </View>
        </Content>
      </Container>
    );
  }
}
function bindAction(dispatch) {
  return {
    popRoute: () => dispatch(popRoute()),
    pushNewRoute: route => dispatch(pushNewRoute(route))
  };
}

export default connect(null, bindAction)(TabOne);