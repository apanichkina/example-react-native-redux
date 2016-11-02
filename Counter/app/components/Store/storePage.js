
import React, { Component } from 'react';

import { Container, Content, Card, CardItem, Text, View, Thumbnail } from 'native-base';

import styles from './styles';
import { connect } from 'react-redux';
import { popRoute, pushNewRoute } from '../../actions/route';
import { buyStory } from '../../actions/store';
import Story from './story'
class TabOne extends Component { // eslint-disable-line
  static propTypes = {
    popRoute: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
    stories: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      bought: React.PropTypes.bool.isRequired,
      name: React.PropTypes.string.isRequired
    }).isRequired).isRequired,
    onStoryClick: React.PropTypes.func.isRequired
  }

  popRoute() {
    this.props.popRoute();
  }
  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }
  onStoryClick(id) {
    this.props.onStoryClick(id);
  }
  themes = [
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

  render() { // eslint-disable-line
    const { stories } = this.props;
    return (
      <Container style={styles.container}>
        <Content padder>
          <Card>
            {stories.map(story =>
            <Story
                key={story.id}
                {...story}
                onClick={() => this.onStoryClick((story.id))}
                />
            )}
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stories: state.store.stories
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStoryClick: id => dispatch(buyStory(id)),
    popRoute: () => dispatch(popRoute()),
    pushNewRoute: route => dispatch(pushNewRoute(route))
  }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabOne)