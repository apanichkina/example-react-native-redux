import React, { Component } from 'react';
import { Container, Content, Card} from 'native-base';
import styles from './styles';
import { connect } from 'react-redux';
import { pushNewRoute } from '../../actions/route';
import { seeStory } from '../../actions/story';
import { setCategoryFilter } from '../../actions/storyCategory';

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
    this.props.setCategoryFilter();
    this.props.onStoryClick(id);
    this.pushNewRoute('story-profile')
  }

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
      return stories.filter(t => t.category == filter)
};

const mapStateToProps = (state,ownProps) => {
  return {
    stories: getFilteredStories(state.storyFromServer.SHOP.stories,ownProps.filter)
  }
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onStoryClick: id => dispatch(seeStory(id)),
    setCategoryFilter: () => dispatch(setCategoryFilter(ownProps.tabLabel)),
    pushNewRoute: route => dispatch(pushNewRoute(route))
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StorePage)