import { RECEIVE_DECKS, ADD_NEW_DECK, ADD_NEW_CARD, DECK_STATUS_COMPLETED } from '../actions/types'
import { combineReducers } from 'redux'

function decks(state = {}, action ){
  switch(action.type){
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_NEW_DECK:
      return {
        ...state,
        ...action.deck
      }
    case ADD_NEW_CARD:
      return {
        ...state,
        ...action.card
      }
    case DECK_STATUS_COMPLETED:
       return {
         ...state,
         ...action.decks
       }
    default:
        return state
    }
}
export default combineReducers({ decks })