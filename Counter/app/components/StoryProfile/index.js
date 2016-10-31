
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Thumbnail, View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';
import myTheme from '../../themes/base-theme';
var Slider = require('react-native-slider');

const isAuth = false;
const logo_fun = 'ios-happy-outline';
const logo_edu = 'ios-school-outline';
const logo_helper = 'ios-ionitron-outline';
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
          onValueChange: (val) => sliderVal={val}
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


  themes = [
    {
      name: 'Свинка Пепка',
      image: require('../../../img/pepa.jpeg'),
      duration: '20:30',
      price: '20',
      year: '2004',
      category: 'edu',
      description: 'Пеппа – маленькая забавная свинка, которая живет вместе с мамой Свинкой, папой Свином и младшим ' +
      'братиком Джорджем. Несмотря на то, что все они свинки, семья Пеппы живет в обычном доме, а ее родители ходят ' +
      'на работу. Пеппе четыре года, она обожает прыгать по лужам и гулять со своей лучше подружкой, овечкой Сьюзи. ' +
      'Джорджу всего два, он пока еще знает мало слов, но очень любит играть, и его любимая игрушка – Мистер Динозавр. ' +
      'Мама Свинка заботится о своей семье и готовит вкусности, ну а папа Свин – заядлый путешественник. Хрю-хрю!',
      route: ()=>{this.pushNewRoute('story-profile')}
    },
    {
      name: 'Три Кота',
      image: require('../../../img/3kota.jpeg'),
      duration: '20:30',
      price: '20',
      route: ()=>{this.popRoute()}
    }
  ];


  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Title>Card</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>

          <Card style={[styles.mb, { flex: 0 }]}>

            <CardItem>
              {this.themes[0].category === 'fun' ?
                    <Icon name={logo_fun} />
                  : <Icon name={logo_edu} />
              }
              <Text>{this.themes[0].name}</Text>
              <Text note>{this.themes[0].year}</Text>
            </CardItem>

            <CardItem cardBody>
              <Image style={{ resizeMode: 'cover', width: null }} source={this.themes[0].image} />
              <View style={{ flexDirection:'row'}}>
                <Button style={{ margin: 6, flex:1}}>
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
                {isAuth ? <View style={{ flexDirection:'row',flex: 2}}>
                            <Button style={{ margin: 6, flex:1}} >
                              <Icon name="ios-cloud-upload" />
                            </Button>
                            <Button style={{ margin: 6, flex:1}} >
                              <Icon name="ios-trash" />
                            </Button>
                          </View>
                        : <Button style={{ margin: 6, flex: 2}} >
                            <Icon name="ios-basket" />
                            <Text style={{ color: '#fff'}}>{this.themes[0].price} руб.</Text>
                          </Button>
                }

                <Button style={{ margin: 6, flex: 2}} >
                  <Icon name="ios-share-alt" />
                  <Text>Поделиться</Text>
                </Button>
              </View>
              <Text>{this.themes[0].description}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute())
  };
}

export default connect(null, bindAction)(SProfile);
