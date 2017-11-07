import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addDeck } from '../../actions'
import { Button } from '../../components'


const AddDeckContainer = styled.View`
  margin-top: 50;
  flex: 5;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ButtonSubmitToCard = styled.View`
  margin-right: 10;
`;

const ButtonSubmitToHome = styled.View`
  margin-left: 10;
`;


class NewDeskScreen extends Component {

  state = {
    id: Math.random().toString(36).substr(-8),
    title: '',
    points: 0,
    imageUrl: 'https://source.unsplash.com/random',
    questions: [],
  };

  submitToCard = () => {
    const { id, title, imageUrl, points, questions } = this.state
    const { addDeck } = this.props

    if (title.length === 0) {
      alert('Please fill title field')
      return
  }

  const deck = {id, title, imageUrl, points, questions}
    addDeck(deck)
    this.reset()
    this.props.navigation.navigate('AddQuestion', {deck})
  }

  submitToHome = () => {
    const { id, title, imageUrl, points, questions } = this.state
    const { addDeck } = this.props

    if (title.length === 0) {
      alert('Please fill title field')
      return
  }

  const deck = {id, title, imageUrl, points, questions}
    addDeck(deck)
    this.reset()
    this.props.navigation.navigate('Home')
  }

  reset = () => {
    this.setState({
      title: '',
    })
  }

  render() {
    return (
      <AddDeckContainer>
          <TextInput
            style={{height: 60, width: 350, borderColor: 'gray', borderWidth: 1, paddingLeft: 30, color: 'white', fontSize: 30}}
            placeholder={'Deck Title'}
            onChangeText={(text) => this.setState({title: text})}
            value={this.state.title}
          />
        <ButtonWrapper>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 50}}>
             <ButtonSubmitToCard>
                <Button text="Add Card Now" onPress={this.submitToCard}></Button>
              </ButtonSubmitToCard>
              <ButtonSubmitToHome>
                <Button text="Add Card Later" onPress={this.submitToHome}></Button>
              </ButtonSubmitToHome>
           </View>
        </ButtonWrapper>
      </AddDeckContainer>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return {
    addDeck : (deck) => dispatch(addDeck(deck)),
  }
}


export default connect(null, mapDispatchToProps)(NewDeskScreen);
