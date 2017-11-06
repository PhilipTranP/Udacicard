import {
  ADD_DECK,
  ADD_CARD,
  CHANGE_POINT
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
