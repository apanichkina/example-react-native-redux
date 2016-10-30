import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Content, Text, List, ListItem, Icon, View } from 'native-base';

import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';
import sidebarTheme from './sidebar-theme';
import styles from './style';

const drawerCover = require('../../../img/pepa.jpeg');
const drawerImage = require('../../../img/3kota.jpeg');

class SideBar extends Component {

    static propTypes = {
        closeDrawer: React.PropTypes.func,
        replaceOrPushRoute: React.PropTypes.func,
        drawerState: React.PropTypes.string,  //eslint-disable-line
    }

    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4,
        };
    }

    navigateTo(route) {
        this.props.closeDrawer();
        this.props.replaceOrPushRoute(route);
    }

    render() {
        return (
            <Content
                theme={sidebarTheme}
                style={styles.sidebar}
                >
                <Image source={drawerCover} style={styles.drawerCover}>
                    <Image
                        square
                        style={styles.drawerImage}
                        source={drawerImage}
                        />
                </Image>
                <List>
                    <ListItem button iconLeft onPress={() => this.navigateTo('anatomy')} >
                        <View style={styles.listItemContainer}>
                            <View style={[styles.iconContainer, { backgroundColor: '#0209D8', paddingLeft: 14 }]}>
                                <Icon name="ios-phone-portrait-outline" style={styles.sidebarIcon} />
                            </View>
                            <Text style={styles.text}>Anatomy</Text>
                        </View>
                    </ListItem>
                    <ListItem button iconLeft onPress={() => this.navigateTo('counter')} >
                        <View style={styles.listItemContainer}>
                            <View style={[styles.iconContainer, { backgroundColor: '#0209D8', paddingLeft: 14 }]}>
                                <Icon name="ios-phone-portrait-outline" style={styles.sidebarIcon} />
                            </View>
                            <Text style={styles.text}>Counter</Text>
                        </View>
                    </ListItem>

                </List>
            </Content>
        );
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: () => dispatch(closeDrawer()),
        replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
    };
}

const mapStateToProps = state => ({
    drawerState: state.drawer.drawerState
});

export default connect(mapStateToProps, bindAction)(SideBar);