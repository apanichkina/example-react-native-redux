import React from 'react'
import PropTypes  from 'react'
import {  CardItem, Text, Button, Thumbnail } from 'native-base';

export default class Story extends React.Component {

    render() {
        const { onClick, name, category, minutes, seconds, price } = this.props;
        return (
            <CardItem button onPress={onClick}>
                <Thumbnail square size={100}  source={{uri: 'http://i.io.ua/img_su/small/0229/11/02291134_n1.jpg'}} />
                <Text>Имя: {name}</Text>
                <Text note>Длительность: {minutes}:{seconds}</Text>
                <Text note>Цена: {price}</Text>
            </CardItem>

        );
    }
}
Story.propTypes = {
    onClick: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    category: React.PropTypes.number.isRequired,
    minutes: React.PropTypes.number.isRequired,
    seconds: React.PropTypes.number.isRequired,
    price: React.PropTypes.number.isRequired
};