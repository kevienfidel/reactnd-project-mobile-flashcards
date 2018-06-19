import { _getInitialData } from '../utils/_DATA.js'
import { saveDeck, setDeckStatus } from '../utils/api.js'
import { RECEIVE_DECKS, ADD_NEW_DECK, DECK_STATUS_COMPLETED } from './types'

function receiveDecks(decks){
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

function setDeckStatusCompleted(decks){
  return {
    type: DECK_STATUS_COMPLETED,
    decks
  }
}

export function addNewDeck(deck){
  return {
    type: ADD_NEW_DECK,
    deck
  }
}

export function handleInitialData(){
  return (dispatch) => {
    return _getInitialData()
      .then((decks) => {
        dispatch(receiveDecks(decks))
      })
  }
}

export function getCurrentDecks(){
  return (dispatch, getState) => {
    const {decks} = getState()
    dispatch(receiveDecks(decks))
  }
}

export function handleSaveDeck(title) {
  return (dispatch) => {
    return saveDeck(title).then((deck) => dispatch(addNewDeck(deck)))
  }
}

export function handleQuizCompleted({id}) {
  return (dispatch, getState) => {
    const {decks} = getState()
    const info = {
      id,
      decks,
    }
    return setDeckStatus(info).then((deckStatusAdded) =>  dispatch(setDeckStatusCompleted(deckStatusAdded)))
                              .then(() => dispatch(getCurrentDecks()))
  }
}

