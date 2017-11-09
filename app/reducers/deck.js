import { initialState } from './initialState'
import {
  ADD_DECK,
  ADD_CARD,
  CHANGE_POINT,
  ADD_CORRECT,
  ADD_INCORRECT,
} from '../actions/types'


function decks(state = initialState, action) {

  const { deck, deckId, card, points } = action

  switch (action.type) {
    case ADD_DECK: {
      return state.concat(deck).reverse()
    }
    case ADD_CARD: {
      const index = state.findIndex(data => data.id === deckId)
      const deck = state.find(data => data.id === deckId)
      deck.questions.push(card)
      return [
        ...state.slice(0, index),
        deck,
        ...state.slice(index + 1)
      ]
    }
    case CHANGE_POINT: {
      return state.map(deck => (deck.id === action.deckId) ? {...deck, points: action.points} : deck)
    }
    case ADD_CORRECT: {
      return state.map(deck => (deck.id === action.deckId) ? {...deck, correctAnswer: action.correctAnswer} : deck)
    }
    case ADD_INCORRECT: {
      return state.map(deck => (deck.id === action.deckId) ? {...deck, incorrectAnswer: action.incorrectAnswer} : deck)
    }
    default:
     return state
  }
}

export default decks
