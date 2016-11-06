
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Thumbnail, View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import { buyStory } from '../../actions/store';
import { fetchBuyStory } from '../../actions/store';
import styles from './styles';
import myTheme from '../../themes/base-theme';
var Slider = require('react-native-slider');


const illustration_default = require('../../../img/illustration2.jpg');
const logo_fun = 'ios-happy-outline';
const logo_edu = 'ios-school-outline';
const logo_helper = 'ios-ionitron-outline';
const logo_default = 'ios-book-outline';
// Развлекательные ios-happy-outline
// Обучающие ios-school-outline
// Помощник ios-ionitron-outline
var sliderVal = 0.8;

class SliderContainer extends React.Component{
  render() {

    return (
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.caption} numberOfLines={1}>{this.props.caption}</Text>
            <Text style={styles.value} numberOfLines={1}>{sliderVal}</Text>
          </View>
          {this._renderChildren()}
        </View>
    );
  }

  _renderChildren() {
    return React.Children.map(this.props.children, (child) => {
      if (child.type === Slider
          || child.type === ReactNative.Slider) {
        var value = sliderVal;
        return React.cloneElement(child, {
          value: value,
          onValueChange: (val) => sliderVal=val
        });
      } else {
        return child;
      }
    });
  }
};
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

  render() {
    const { story, isBought, category } = this.props;
      console.log(story)
      console.log(isBought)
      console.log(category)
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Title>Сказка</Title>

          <Button transparent onPress={()=>this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>
        </Header>

        <Content padder>

          <Card style={[styles.mb, { flex: 0 }]}>

            <CardItem>
              {story.category === 1 ?
                  <Icon name={logo_fun} />
                  : <Icon name={logo_default} />
              }
              <Text>{story.name}</Text>
                <Text note>{category}</Text>
            </CardItem>

            <CardItem cardBody >
                <Image style={{ resizeMode: 'cover', width: null}} source={story.illustration ?
                   story.illustration
                  : illustration_default}/>

              <View style={{ flexDirection:'row'}}>
                <Button style={{ margin: 6, marginLeft:0, flex:1}}>
                  <Icon name="ios-play" style={{ color: '#fff', margin: 5 }}/>
                </Button>

                <View style={{flex:7}}>
                  <SliderContainer caption=''>
                <Slider
                    value={sliderVal}
                    onValueChange={(value) => sliderVal={value}}
                    style={styles.slider_container}
                    trackStyle={styles.track}
                    thumbStyle={styles.thumb}
                    minimumTrackTintColor='#B39DDB'
                    thumbTouchSize={{width: 50, height: 40}}
                    />
                    </SliderContainer>
                </View>

              </View>
              {/* <Text style={{ paddingTop: 8, flex:1, fontSize: 15 }}>{this.themes[0].duration}</Text> */}
              <View style={{ flexDirection:'row'  }}>
                {isBought ? <View style={{ flexDirection:'row',flex: 2}}>
                            <Button style={{ margin: 6, marginLeft:0,marginRight:0, flex:1}} >
                              <Icon name="ios-cloud-upload" />
                            </Button>
                            <Button style={{ margin: 6, flex:1}} >
                              <Icon name="ios-trash" />
                            </Button>
                          </View>
                        : <Button style={{ margin: 6, marginLeft:0, flex: 2}}
                                  onPress={() => this.buyStory((story.id))}>
                            <Icon name="ios-basket" />
                            <Text style={{ color: '#fff'}}>{story.price} руб.</Text>
                          </Button>
                }

                <Button style={{ margin: 6, marginLeft:0,marginRight:0, flex: 2}} >
                  <Icon name="ios-share-alt" />
                  <Text>Поделиться</Text>
                </Button>
              </View>
              <Text>{story.description}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    story: state.storyFromServer.SHOP.stories[state.story.storyId],
    isBought: !!state.storyFromServer.USER.stories[state.story.storyId],
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