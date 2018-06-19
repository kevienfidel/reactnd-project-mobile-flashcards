import { generateUID } from '../utils/helpers'

function formatDeck(title) {
  return {
    id: generateUID(),
      title,
      questions: []
    }
}

export function saveDeck (title) {
  return new Promise((res, rej) => {
    const formattedDeck = formatDeck(title)

    setTimeout(() => {
      res({ [formattedDeck.id]: formattedDeck }) }, 1000)
  })
}

export function addCardToDeck({id, card, decks}){
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        ...decks,
        [id]: {
          questions: [
            ...decks[id].questions,
            card
          ],
          title: decks[id].title
        }
      })
    }, 1000)
  })
}

export function setDeckStatus({id, decks}){
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        ...decks,
        [id]: {
          questions: [
            ...decks[id].questions,
          ],
          title: decks[id].title,
          status: 'completed'
        }
      })
    }, 1000)
  })
}

