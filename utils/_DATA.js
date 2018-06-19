let decks = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    title: "React",
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    title: "JavaScript",
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
}

//function generateUID() {
//  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
//}

export function _getInitialData() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...decks}), 1000)
  })
}


//function formatDeck(title) {
//  return {
//    id: generateUID(),
//      title,
//      questions: []
//    }
//}

//export function _saveDeck(title){
//  return new Promise((res, rej) => {
//    const formattedDeck = formatDeck(title)
//
//    setTimeout(() => {
//      decks = {
//        ...decks,
//        [formattedDeck.id]: formattedDeck
//      }

//      res({ [formattedDeck.id]: formattedDeck })
//      }, 1000
//    )
//  })
//}

//export function addCardToDeck({id, card}){
//  return new Promise((res, rej) => {
//    const formattedDeck = formatDeck(title)
//
//    setTimeout(() => {
//      res({ [formattedDeck.id]: formattedDeck })
//      }, 1000
//    )
//  })
//}


