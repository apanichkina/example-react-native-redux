
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, View, Button, Icon, Tabs, Spinner } from 'native-base';
import { openDrawer } from '../actions/drawer';
import { popRoute } from '../actions/route';
import { fetchStories } from '../actions/storyFromServer';
import myTheme from '../themes/base-theme';
import StorePage from './StoryList';
import { PossiblePurposes } from '../actions/actionTypes'
class Store extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    fetchStories: React.PropTypes.func
  };
    componentWillMount() {
        this.props.fetchStories();
    }
  render() {
    const { categories, isFetching, openDrawer } = this.props;
    return (
      <Container theme={myTheme}>
        <Header>
          <Title>Магазин сказок</Title>

          <Button transparent onPress={openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <View>
          <Tabs locked>
            {categories.map(category =>
                  <StorePage
                      key={category.id}
                      tabLabel={category.name}
                      filter={category.id}
                      />
          )}
          </Tabs>
            { isFetching ? <Spinner color='red' /> : null}
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      categories: state.storyCategory.categories,
      isFetching: state.storyFromServer.SHOP.isFetching
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDrawer: () => dispatch(openDrawer()),
    fetchStories: () => dispatch(fetchStories(PossiblePurposes.SHOP))
  }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Store)