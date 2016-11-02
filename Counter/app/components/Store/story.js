import React from 'react'
import PropTypes  from 'react-native'
import {  CardItem, Text } from 'native-base';

class Story extends React.Component { // eslint-disable-line
    static propTypes = {
        onClick: React.PropTypes.func.isRequired,
        bought: React.PropTypes.bool.isRequired,
        name: React.PropTypes.string.isRequired,
        categoryId: React.PropTypes.number.isRequired
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <CardItem button onPress={this.props.onClick}>
                <Text>Имя: {this.props.name}</Text>
                <Text>Категория: {this.props.categoryId}</Text>
                <Text note> { this.props.bought ? 'Уже куплен:' : 'Купить'}</Text>
            </CardItem>

        );
    }
}

export default (Story);