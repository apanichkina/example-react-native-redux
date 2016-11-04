import React from 'react'
import PropTypes  from 'react-native'
import {  CardItem, Text, Button, Thumbnail } from 'native-base';

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
                <Thumbnail square size={100}  source={{uri: 'http://i.io.ua/img_su/small/0229/11/02291134_n1.jpg'}} />
                <Text>Имя: {this.props.name}</Text>
                <Text note>Длительность: {this.props.minutes}:{this.props.seconds}</Text>
                <Text note>Цена: {this.props.price}</Text>
            </CardItem>

        );
    }
}

export default (Story);