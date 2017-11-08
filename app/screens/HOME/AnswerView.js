import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { changePoint } from '../../actions'
import * as Progress from 'react-native-progress'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { Button } from '../../components'
import { colors } from '../../utils/constants'
import Answer from './Answer'



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

const IncorrectText = styled.Text`
  color: ${props => props.theme.PRIMARYBLUE};
  align-items: flex-start;
  margin-right: 40;
  fontSize: 18;
  line-height: 18;
`;
const CorrectText = styled.Text`
  color: ${props => props.theme.PRIMARYBLUE};
  align-items: flex-end;
  margin-left: 40;
  fontSize: 18;
  line-height: 18;
`;



const ButtonWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

class AnswerView extends Component {

    state = {
     questions: [],
     currentCard: 0,
     correctAnswer: 0,
     incorrectAnswer: 0,
     points: 0
   }

    componentDidMount() {
      const { deck, currentCard } = this.props.navigation.state.params
      this.setState({
          points : this.props.card.points,
          questions: deck.questions,
          currentCard: currentCard ? currentCard : 0
        })
    }

    correctPress = () => {
      const { deck, nextQuestion } = this.props.navigation.state.params
      const pointAdd = this.state.points > (this.state.questions.length -1) * 10 ? 10 : 10
      this.setState({ currentCard: this.state.currentCard + 1})
      this.props.changePoint(deck.id, this.state.points + pointAdd)
      if(this.state.points > (this.state.questions.length -1)* 10 || this.state.points === (this.state.questions.length -1)* 10){
       this.props.changePoint(deck.id, 0)
       this.props.navigation.navigate('RestartView', {deck: deck})
     } else {
       this.setState({ currentCard: this.state.currentCard + 1})
       this.props.navigation.navigate('QuestionView', {deck: deck, currentCard: this.state.currentCard})
     }
    }

    inCorrectPress = () => {
      const pointSubstract = this.state.points < 1 ? 0 : 5
      const { deck, id, nextQuestion } = this.props.navigation.state.params
      this.setState({ currentCard: this.state.currentCard + 1 })
      this.props.changePoint(deck.id, this.state.points - pointSubstract)
      this.props.navigation.navigate('QuestionView', {deck: deck, currentCard: this.state.currentCard})
    }

    render() {
      const { navigation } = this.props
      const { deck, currentCard, points } = navigation.state.params
      const totalPoints = deck.questions.length ? deck.questions.length*10 : 1
      return (
        <ContainerView>
          <BarContainer>
            <BarText>
              Your Score: {this.state.points} / {totalPoints}
            </BarText>
            <Progress.Bar progress={this.state.points/totalPoints} width={null}/>
          </BarContainer>
          <CardContainerWrapper>
            <CardContainer>
                <FontAwesome name="home" size={30} color={colors.PRIMARYBLUE} onPress={() => navigation.navigate('Home')}/>
                <CardText>
                {this.state.questions.map((question, index) => (
                    <Answer
                      key={index}
                      question={question}
                      show={currentCard === index}
                    />
                  ))}
                </CardText>
                <AnwerButtonWrapper>
                  <TouchableHighlight onPress={this.inCorrectPress}>
                    <IncorrectText >Incorrect</IncorrectText>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this.correctPress}>
                    <CorrectText>Correct</CorrectText>
                  </TouchableHighlight>
                </AnwerButtonWrapper>
            </CardContainer>
          </CardContainerWrapper>
          <ButtonWrapper>
            <Button text="Show Question" onPress={() => navigation.navigate('QuestionView',  {deck: deck})}></Button>
          </ButtonWrapper>
        </ContainerView>
      )
    }
  }


  function mapStateToProps({ decks }, { navigation }) {
    let { deck } = navigation.state.params
    let card = decks.find(item => item.id === deck.id)
    return {
      card
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      changePoint: (deckId, points) => dispatch(changePoint(deckId, points)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AnswerView)
