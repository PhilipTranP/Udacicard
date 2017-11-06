import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { colors } from '../utils/constants';
import {
  TabNavigator
} from 'react-navigation';
import CardList from '../screens/HOME/CardList';

const CardContainer = styled.View`
  flex: .8;
  background-color: papayawhip;
  border-radius: 10;
  shadow-radius: 0;
  shadow-opacity: 0.8;
  shadow-color: rgba(0, 0, 0, 0.24);
  shadow-offset: {
    width: 0;
    height: 2;
  }
`;

const CardText = styled.View`
  flex: 4;
  align-items: center;
  justify-content: center;
  padding-left: 30;
  padding-right: 30;
`;

const TitleText = styled.Text`
  font-size: 35;
`;

const QuantityText = styled.Text`
  color: #666;
`;


export default class Card extends Component {
  static navigationOptions = ({ navigation }) => {
  const { title } = navigation.state.params
    return {
      title: title
    }
  }
  render() {
    const { navigation } = this.props
    return (
      <CardContainer>
        <FontAwesome name="home" size={30} color={colors.PRIMARYBLUE} onPress={() => navigation.navigate('Home')}/>
        <CardText>
          <TitleText>React Native</TitleText>

          {8 > 0 ? (
            <QuantityText>5 cards</QuantityText>

          ) : (
            <QuantityText>
             Deck is empty
            </QuantityText>
          )}
        </CardText>
      </CardContainer>
    )
  }
}
