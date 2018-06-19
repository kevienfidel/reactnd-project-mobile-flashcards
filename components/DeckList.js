import React, { Component } from 'react'
import { styles } from '../styles'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import { handleInitialData, getCurrentDecks } from '../actions/decks'

class DeckList extends Component{

  renderSeparator = () => {
    return (
      <View style={styles.listSeparator}/>
    )
  }

  componentDidMount(){
    const { dispatch, decks } = this.props
    const isDataInitialized = Object.keys(decks).length > 0 ? true : false
    isDataInitialized ? dispatch(getCurrentDecks()) : dispatch(handleInitialData())
  }

  render(){
    const {decks, deckIds, navigation} = this.props

    return(
      <View style={styles.deckList}>
        <List containerStyle={styles.list}>
          <FlatList data={deckIds}
                    renderItem={({item}) => (
                      <TouchableOpacity onPress={() => navigation.navigate('Deck', { deckId: item, title: decks[item].title })}>
                        <ListItem title={decks[item].title}
                                  titleStyle={{color:'white', fontSize:25}}
                                  badge={{ value: `${decks[item].questions.length} card(s)`,
                                           containerStyle: { backgroundColor: '#20184C' }
                                        }}
                                  containerStyle={{borderBottomWidth: 0}}/>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item) => decks[item].title}
                    ItemSeparatorComponent={this.renderSeparator}
          />
        </List>
      </View>
    )
  }
}

function mapStateToProps({ decks }){
  return {
    decks,
    deckIds: Object.keys(decks),
  }
}

export default connect(mapStateToProps)(DeckList)
