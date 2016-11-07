
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Thumbnail, View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import { buyStory } from '../../actions/store';
import { fetchBuyStory } from '../../actions/store';
import StoryCard from './storyCard'
import styles from './styles';
import myTheme from '../../themes/base-theme';
var Slider = require('react-native-slider');

const logo_fun = 'ios-happy-outline';
const logo_edu = 'ios-school-outline';
const logo_night = 'ios-moon-outline';
const logo_helper = 'ios-ionitron-outline';
const logo_default = 'ios-book-outline';


class SProfile extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func
  };

  popRoute() {
    this.props.popRoute();
  }
  buyStory(id) {
    this.props.buyStory(id);

  }
  uploadStory(id) {
      console.log('upload'+id);
      //this.props.buyStory(id);

  }
  deleteStory(id) {
      console.log('delete'+id);
     // this.props.buyStory(id);

  }

  render() {
    const { story, isBought, category, isUpload } = this.props;
      let logo = '';
      switch(category) {
          case "сказки":
              logo = logo_fun;
              break;
          case "колыбельные":
              logo = logo_night;
              break;
          case "помощник":
              logo = logo_helper;
              break;
          default:
              logo = logo_default;
              break;
      }
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Title>Сказка</Title>

          <Button transparent onPress={()=>this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>
        </Header>

        <Content padder>
            <StoryCard
                {...story}
                onBuyClick={()=>{this.buyStory(story.id)}}
                onUploadClick={()=>{this.uploadStory(story.id)}}
                onDeleteClick={()=>{this.deleteStory(story.id)}}
                isUpload={isUpload}
                isBought={isBought}
                logo={logo}
                category={category}
                illustration={{uri: 'https://storage.googleapis.com/hardteddy_images/small/66.jpg'}}
                />

        </Content>
      </Container>
    );
  }
}


const findElementByValue = (array, value) => {
    return array.indexOf(value) !== -1;


};
const mapStateToProps = (state) => {
  return {
    story: state.storyFromServer.SHOP.stories[state.story.storyId],
    isBought: !!state.storyFromServer.USER.stories[state.story.storyId],
    isUpload: findElementByValue(state.bear.bearStories,state.story.storyId),
    category: state.storyCategory.categoryFilter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyStory: id => dispatch(fetchBuyStory(id)),
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute())
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SProfile)