import React, { Component } from 'react'
import styled from 'styled-components/native';
import { StyleSheet, Text, Image, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../../actions'
import { Button } from '../../components';
import { colors } from '../../utils/constants';
import { changePoint, addCorrectAnswer, addIncorrectAnswer } from '../../actions'


const ContainerView = styled.View`
  flex: 1;
  background-color: transparent;
`;

const FormCardContainer = styled.View`
  flex: 4;
  justify-content: center;
  padding-left: 30;
  padding-right: 30;
`;

const CardContainer = styled.View`
  flex: 5;
  margin-top: 50;
  justify-content: center;
  padding-left: 30;
  padding-right: 30;
`;
const CongratCard = styled.View`
  flex: .8;
  background-color: chartreuse;
  border-radius: 10;
  shadow-radius: 0;
  shadow-opacity: 0.8;
  shadow-color: rgba(0, 0, 0, 0.24);

  margin-bottom: 20;
`;
const Card = styled.View`
  flex: .8;
  background-color: papayawhip ;
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
`;

const TitleText = styled.Text`
  font-size: 25;
`;

const QuantityText = styled.Text`
  margin-top: 30;
  color: #666;
`;

const AddCardButtonWrapper = styled.View`
  margin-top: 40;
  width: 150;
  height: 60;
`;

const ButtonWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;


const InputWrapper = styled.View`
    margin-top: 45;
    margin-left: 45;
    padding-top: 10;
    padding-left: 10;
    border-color: #4F6D7A;
    border-width: 1;
    height: 45;
    width: 250;
`;

const InputTextWrapper = styled.View`
    margin-top: 15;
    margin-left: 15;
    padding-top: 10;
    padding-left: 10;
    height: 100;
    width: 300;
`;

const AddCardText = styled.Text`
  color: ${props => props.theme.PRIMARYBLUE};
  margin-top: 50;
`;

const ButtonResetQuiz = styled.View`
  margin-right: 10;
`;

const ButtonGoToHome = styled.View`
  margin-left: 10;
`;

class RestartView extends Component {

  state = {
    openForms: true,
    points: 0,
    correctAnswer: 0,
    incorrectAnswer: 0,
    question: '',
    answer: '',
  }

  componentDidMount() {
    const { deck, currentCard, correctAnswer, incorrectAnswer, points } = this.props.navigation.state.params
    this.setState({
        points,
        correctAnswer,
        incorrectAnswer
      })
  }

  static navigationOptions = ({ navigation }) => {
  const { deck } = navigation.state.params
    return {
      title: deck.title
    }
  }

  openAddCardForms = () => {
    this.setState({openForms: false})
  }
  addPoint = (points) => {
    this.setState({points})
  }

  submitCard = () => {
    const { question, answer } = this.state
    const { addCard, navigation } = this.props
    const { deck } = navigation.state.params

    if (question.length === 0 || answer.length === 0) {
      alert('Question and Answer can not be empty')
      return
    }

    addCard(deck.id, {question, answer})
    this.setState({question: '', answer: ''})
    navigation.navigate('Home')
  }

  resetQuiz = () => {
    const { changePoint, addCorrectAnswer, addIncorrectAnswer, navigation } = this.props
    const { deck } = navigation.state.params
    changePoint(deck.id, 0)
    addCorrectAnswer(deck.id, 0)
    addIncorrectAnswer(deck.id, 0)
    navigation.navigate('QuestionView', {deck: deck})
  }
  render() {
    const { navigation, card } = this.props
    const { deck, correctAnswer, incorrectAnswer } = navigation.state.params
    const numberOfCard = deck.questions.length < 2 ? deck.questions.length + " Card" : deck.questions.length + " Cards"
    return (
      <ContainerView>
      {this.state.openForms
        ?
            <CardContainer>
                <CongratCard>
                    <CardText>
                      <QuantityText>Correct Answer: {card.correctAnswer} </QuantityText>
                      <QuantityText>Incorrect Answer: {card.incorrectAnswer} </QuantityText>
                    </CardText>
                </CongratCard>
                <Card>
                    <CardText>
                      <TitleText>{deck.title}</TitleText>
                        <QuantityText>{numberOfCard} - {card.points} points earned </QuantityText>
                        <AddCardText onPress={this.openAddCardForms}>Add Card</AddCardText>
                    </CardText>
                </Card>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 50}}>
                   <ButtonResetQuiz>
                      <Button text="Reset Quiz" onPress={this.resetQuiz}></Button>
                    </ButtonResetQuiz>
                    <ButtonGoToHome>
                      <Button text="Go To Deck" onPress={() => navigation.navigate('CardView', {deck: deck})}></Button>
                    </ButtonGoToHome>
                 </View>
            </CardContainer>
        :

          <FormCardContainer>
            <Card>
                <InputTextWrapper>
                  <Text><Text style={{fontWeight: '500'}}>Question: </Text> {this.state.question}</Text>
                  <Text><Text style={{fontWeight: '500'}}>Answer: </Text> {this.state.answer}</Text>
                </InputTextWrapper>
                <InputWrapper>
                  <TextInput
                   placeholder="Question"
                   returnKeyType="done"
                   onChangeText={(text) => this.setState({question: text})}
                   value={this.state.question}
                  />
                </InputWrapper>
                <InputWrapper>
                  <TextInput
                   placeholder="Answer"
                   returnKeyType="done"
                   onChangeText={(text) => this.setState({answer: text})}
                   value={this.state.answer}
                  />
                </InputWrapper>

                    <ButtonWrapper>
                        <Button text="Add Card" onPress={this.submitCard}></Button>
                    </ButtonWrapper>
            </Card>
          </FormCardContainer>
      }
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
      addCard: (deckId, card) => dispatch(addCard(deckId, card)),
      changePoint: (deckId, points) => dispatch(changePoint(deckId, points)),
      addCorrectAnswer: (deckId, correctAnswer) => dispatch(addCorrectAnswer(deckId, correctAnswer)),
      addIncorrectAnswer: (deckId, incorrectAnswer) => dispatch(addIncorrectAnswer(deckId, incorrectAnswer))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(RestartView)
