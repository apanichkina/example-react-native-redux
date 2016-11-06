import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, List, ListItem, Button, Icon, InputGroup, Input, View, Tabs, Footer } from 'native-base';
import { TouchableHighlight, Image} from "react-native";
import { openDrawer, closeDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';
import myTheme from '../../themes/base-theme';
import TabOne from './storyPage';
import TabTwo from './alarmPage';
import TabThree from './helperPage.js';
import ActionButton from 'react-native-action-button';
import StoryList from '../../containers/StoryList';
class BProfile extends Component {

    static propTypes = {
        popRoute: React.PropTypes.func
    };

    constructor(props) {
        super(props);
    }
    bears = [
        {
            name: 'Потапыч',
            selected: true,
            route: ()=>{this.pushNewRoute('bear-profile')}
        },
        {
            name: 'Копатыч',
            selected: false,
            route: ()=>{this.pushNewRoute('bear-profile')}
        },
        {
            name: 'Медведич',
            selected: false,
            route: ()=>{this.pushNewRoute('bear-profile')}
        }
    ];
    render() {
        const { popRoute, categories} = this.props;
        return (
            <Container theme={myTheme} style={styles.container}>

                <Header>
                    <Button transparent onPress={()=>popRoute()}>
                        <Icon name="ios-arrow-back" />
                    </Button>
                    <Title>{this.bears[0].name}</Title>
                    <Button transparent onPress={()=>popRoute()}>
                        <Icon name="ios-settings" />
                    </Button>
                </Header>

                <Content>
                    <Tabs locked>
                        {categories.map(category =>
                                <StoryList
                                    key={category.id}
                                    tabLabel={category.name}
                                    filter={category.id}
                                    stories={[]}
                                    content={'BEAR'}
                                    />
                        )}
                    </Tabs>
                </Content>
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
        popRoute: () => dispatch(popRoute())
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BProfile)