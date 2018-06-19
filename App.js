import React from 'react'
import { View, Text } from 'react-native'
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import NewDeck from './components/NewDeck'
import AddCard from './components/AddCard'
import { setLocalNotification } from './utils/helpers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import RootStack from './components/RootStack'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, middleware)
const persistor = persistStore(store)
//persistor.purge()

export default class App extends React.Component {

  componentDidMount(){
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootStack/>
        </PersistGate>
      </Provider>
    )
  }
}
