import React from 'react'
import PropTypes  from 'react-native'
import {  CardItem, Text, Button } from 'native-base';

class Story extends React.Component {
    static propTypes = {
        onClick: React.PropTypes.func.isRequired,
        name: React.PropTypes.string.isRequired,
        category: React.PropTypes.number.isRequired,
        minutes: React.PropTypes.number.isRequired,
        seconds: React.PropTypes.number.isRequired,
        price: React.PropTypes.number.isRequired
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <CardItem button onPress={this.props.onClick}>
                <Text>Имя: {this.props.name}</Text>
                <Text>Категория: {this.props.category}</Text>
                <Text note>Длительность: {this.props.minutes}:{this.props.seconds}</Text>
                <Text note>Цена: {this.props.price}</Text>
            </CardItem>

        );
    }
}

export default (Story);