import { ADD_NEW_CARD } from './types'
import { addCardToDeck } from '../utils/api'
import { getCurrentDecks } from './decks'

function addNewCard(card){
  return {
    type: ADD_NEW_CARD,
    card
  }
}

export function handleAddCardToDeck(id, card) {
  return (dispatch, getState) => {
    const {decks} = getState()
    const info = {
      id,
      decks,
      card,
    }
    return addCardToDeck(info).then((cardAddedToDeck) =>  dispatch(addNewCard(cardAddedToDeck)))
                              .then(() => dispatch(getCurrentDecks()))
  }
}