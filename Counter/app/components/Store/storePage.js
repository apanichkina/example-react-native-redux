import React, { Component } from 'react';
import { Container, Content, Card} from 'native-base';
import styles from './styles';
import { connect } from 'react-redux';
import { pushNewRoute } from '../../actions/route';
import { seeStory } from '../../actions/story';
import Story from './story'

class StorePage extends Component {
  static propTypes = {
    pushNewRoute: React.PropTypes.func,
    stories: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired
    }).isRequired).isRequired
  };

  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }
  onStoryClick(id) {
    this.props.onStoryClick(id);
    this.pushNewRoute('story-profile')
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

  render() {
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
const getFilteredStories = (stories, filter) => {
      return stories.filter(t => t.categoryId === filter)
};

const mapStateToProps = (state,ownProps) => {
  return {
    stories: getFilteredStories(state.store.stories,ownProps.filter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStoryClick: id => dispatch(seeStory(id)),
    pushNewRoute: route => dispatch(pushNewRoute(route))
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StorePage)