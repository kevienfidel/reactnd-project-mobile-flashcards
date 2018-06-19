import React from 'react'
import DeckList from './DeckList'
import Deck from './Deck'
import Quiz from './Quiz'
import NewDeck from './NewDeck'
import AddCard from './AddCard'
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'

const Tabs = createMaterialTopTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    }
  },
},
{
  navigationOptions: {
  },
  tabBarOptions: {
    style: {
      height: 56,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const RootStack = createStackNavigator({
  Root: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#47A6FF',
      }
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#47A6FF'
      },
      title: 'Quiz'
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#47A6FF'
      },
      title: 'Add Card'
    }
  },
  InitialRouteName: 'Root'
})
export default RootStack