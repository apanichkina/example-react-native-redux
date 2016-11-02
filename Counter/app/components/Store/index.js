import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, View, Button, Icon, Tabs } from 'native-base';
import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import myTheme from '../../themes/base-theme';
import StorePage from './storePage';

class Store extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func
  };

  render() {
    const { categories } = this.props;
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
            {categories.map(category =>
                  <StorePage
                      key={category.id}
                      tabLabel={category.name}
                      onPress={console.log('Aaa')}
                      filter={category.id}
                      />
          )}
          </Tabs>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.storyCategory.categories
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDrawer: () => dispatch(openDrawer())
  }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Store)