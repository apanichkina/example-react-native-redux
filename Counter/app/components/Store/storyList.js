import React, { Component } from 'react';
import { Container, Content, Card} from 'native-base';
import styles from './styles';
import Story from './storyListItem'

export default class StorePagePresentational extends Component {

  render() {
    const { stories, onStoryClick  } = this.props;
    return (
      <Container style={styles.container}>
        <Content padder>
          <Card>
            {stories.map(story =>
            <Story
                key={story.id}
                {...story}
                onClick={() => onStoryClick((story.id))}
                />
            )}
          </Card>
        </Content>
      </Container>
    );
  }
}

StorePagePresentational.propTypes = {
  stories: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired
  }).isRequired).isRequired,
  onStoryClick: React.PropTypes.func
};