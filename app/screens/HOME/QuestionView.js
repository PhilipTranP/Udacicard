import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { Button } from '../../components'
import { colors } from '../../utils/constants'
import Question from './Question'



const ContainerView = styled.View`
  flex: 1;
  background-color: transparent;
`;

const CardContainerWrapper = styled.View`
  flex: 5;
  justify-content: center;
  padding-left: 30;
  margin-top: -50;
  padding-right: 30;
`;

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
  width: 350;
  height: 600;
`;

const TitleText = styled.Text`
  fontSize: 35;
`;

const QuantityText = styled.Text`
  color: #666;
`;

const BarContainer = styled.View`
  flex: 1;
  padding-left: 40;
  padding-right: 40;
  opacity: .8;
  justify-content: center;
`;

const BarText = styled.Text`
  color: #FFFFFF;
  fontSize: 18;
  line-height: 18;
`;

const AnwerButtonWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #deb887;
  height: 60;
`;


const PrevQuestion = styled.View`
  align-items: flex-start;
  margin-right: 100;
`;
const NextQuestion = styled.View`
  align-items: flex-end;
  margin-left: 100;
`;

const ButtonWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

class QuestionView extends Component {

    state = {
     questions: [],
     currentCard: 0,
     totalScore: null
   }

    componentDidMount() {
      const { deck, totalScore } = this.props.navigation.state.params
      this.setState({
          questions : deck.questions,
          totalScore:totalScore
        })
    }

    prevQuestion = () => {
      const { deck } = this.props.navigation.state.params
      this.setState({ currentCard: this.state.currentCard - 1})
    }

    nextQuestion = () => {
      const { deck } = this.props.navigation.state.params
      this.setState({ currentCard: this.state.currentCard + 1})
    }

    render() {
      const { navigation } = this.props
      const { deck, addPoints, points } = navigation.state.params
      const { currentCard } = this.state
      return (
        <ContainerView>
          <BarContainer>
            <BarText>
              {this.state.currentCard + 1} {' '} of {' '}{deck.questions.length}
            </BarText>
            <Progress.Bar progress={this.state.currentCard + 1/deck.questions.length} width={null}/>
          </BarContainer>
          <CardContainerWrapper>
            <CardContainer>
                <FontAwesome name="home" size={30} color={colors.PRIMARYBLUE} onPress={() => navigation.navigate('Home')}/>
                <CardText>
                {this.state.questions.map((question, index) => (
                    <Question
                      key={index}
                      question={question}
                      show={currentCard === index}
                    />
                  ))}
                </CardText>
                <AnwerButtonWrapper>
                  {this.state.currentCard > 0
                    ?
                        <TouchableOpacity onPress={this.prevQuestion}>
                          <PrevQuestion><FontAwesome name="arrow-left" size={30} color={colors.PRIMARYBLUE} />
                          </PrevQuestion>
                        </TouchableOpacity>
                    : null
                  }
                  {  this.state.currentCard < deck.questions.length
                    ?
                      <TouchableOpacity onPress={this.nextQuestion}>
                        <NextQuestion><FontAwesome name="arrow-right" size={30} color={colors.PRIMARYBLUE}/></NextQuestion>
                      </TouchableOpacity>
                     : null
                  }

                </AnwerButtonWrapper>
            </CardContainer>
          </CardContainerWrapper>
          <ButtonWrapper>
            <Button text="Show Answer" onPress={() => navigation.navigate('AnswerView', {deck: deck, currentCard: this.state.currentCard})}></Button>
          </ButtonWrapper>
        </ContainerView>
      )
    }
  }

export default QuestionView
