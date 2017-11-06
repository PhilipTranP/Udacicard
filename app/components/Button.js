import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableHighlight`
  width: 160;
  height: 40;
  background-color: ${props=> props.theme.LIGHTBLUE};
  border-radius: 5;
  justify-content: center;
  padding-left: 10;
  padding-right 10;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 15;
  color: ${props => props.theme.WHITE};
`;

class Button extends Component {
  render() {
    const { text, onPress, theme } = this.props;

    return (
      <ButtonContainer
        underlayColor={theme.BLACK}
        onPress={onPress}
      >
        <Text>{text}</Text>
      </ButtonContainer>
    );
  }
}

export default withTheme(Button);
