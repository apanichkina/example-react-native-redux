
import React, { Component } from 'react';

import { Container, Content, Card, CardItem, Text, View, Thumbnail } from 'native-base';

import styles from './styles';
import { connect } from 'react-redux';
import { popRoute } from '../../actions/route';

class TabOne extends Component { // eslint-disable-line
  static propTypes = {
    popRoute: React.PropTypes.func
  }

  popRoute() {
    this.props.popRoute();
  }

  themes = [
    {
      name: 'Свинка Пепка',
      image: require('../../../img/pepa.jpeg'),
      duration: '20:30',
      price: 20,
      route: ()=>{this.popRoute()}
    },
    {
      name: 'Три Кота',
      image: require('../../../img/3kota.jpeg'),
      duration: '20:30',
      price: 20,
      route: ()=>{this.popRoute()}
    }
  ];

  render() { // eslint-disable-line
    return (
      <Container style={styles.container}>
        <Content padder>
          <Card dataArray={this.themes}
                renderRow={(theme) =>
                            <CardItem button onPress={theme.route}>
                                <Thumbnail square size={100} source={theme.image} />
                                <Text>{theme.name}</Text>
                                <Text note>Длительность: {theme.duration}</Text>
                                <Text note>Цена: {theme.price}</Text>
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

export default connect(null, bindAction)(TabOne);