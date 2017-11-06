import React, { Component } from 'react';
import styled from 'styled-components/native';

import { Button } from '../components';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: ${props => props.theme.WHITE};
`;

const HeaderText = styled.Text`
  top: 30;
  fontSize: 18;
  margin-left: 20;
  margin-bottom: 20;
  color: ${props => props.theme.WHITE};
`;

const AboutText = styled.Text`
  top: 30;
  fontSize: 15;
  margin-left: 20;
  margin-bottom: 20;
  color: ${props => props.theme.WHITE};
`;

const ButtonContainer = styled.View`
  top: 100;
`

class WelcomeScreen extends Component {
  render() {
    return (
      <ContainerView>
        <TitleText>UdaciCards</TitleText>
          <HeaderText>Quiz Yourself With Questions and Answers.</HeaderText>
          <AboutText></AboutText>
          <AboutText>5 Points Are Deducted For Each Incorrect Answer. You{"'"}ll Earn 10 Points For A Correct Answer.</AboutText>
        <ButtonContainer>
          <Button text="GET STARTED" onPress={() => this.props.navigation.navigate('Main')} />
        </ButtonContainer>
      </ContainerView>
    );
  }
}

export default WelcomeScreen;
