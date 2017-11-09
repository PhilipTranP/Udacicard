import {
  ADD_DECK,
  ADD_CARD,
  CHANGE_POINT,
  ADD_CORRECT,
  ADD_INCORRECT
} from './types'

export const addDeck = (deck) => ({
  type: ADD_DECK,
  deck,
})

export const addCard = (deckId, card) => ({
  type: ADD_CARD,
  deckId,
  card,
})

export const changePoint = (deckId, points) => ({
  type: CHANGE_POINT,
  deckId,
  points,
})

export const addCorrectAnswer = (deckId, correctAnswer) => ({
  type: ADD_CORRECT,
  deckId,
  correctAnswer,
})

export const addIncorrectAnswer = (deckId, incorrectAnswer) => ({
  type: ADD_INCORRECT,
  deckId,
  incorrectAnswer,
})
