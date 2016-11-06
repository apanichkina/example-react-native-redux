import React, { Component } from 'react';
import { Container, Content, Card} from 'native-base';
import { connect } from 'react-redux';
import { pushNewRoute } from '../actions/route';
import { seeStory } from '../actions/story';
import { setCategoryFilter } from '../actions/storyCategory';

import StorePage from '../components/Store/storyList'

class StorePageContainer extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  static propTypes = {
    pushNewRoute: React.PropTypes.func,
    tabLabel: React.PropTypes.string,
    stories: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired
    }).isRequired).isRequired
  };

  onClick(id) {
    this.props.setCategoryFilter(this.props.tabLabel);
    this.props.onStoryClick(id);
    this.props.pushNewRoute('story-profile')
  }

  render() {
    const { stories } = this.props;
    return (
            <StorePage
                stories={stories}
                onStoryClick={this.onClick}
                />
    )
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

const mapDispatchToProps = (dispatch) => {
  return {
    onStoryClick: id => dispatch(seeStory(id)),
    setCategoryFilter: (name) => dispatch(setCategoryFilter(name)),
    pushNewRoute: route => dispatch(pushNewRoute(route))
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StorePageContainer)