import React, { Component } from 'react'
import { styles } from '../styles'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component{
  render() {
    const { deckId,  decks, navigation } = this.props
    const {title} = decks[deckId]
    const {length} = decks[deckId].questions
    const isDeckEmpty = length < 1 ? true : false

    return (
      <View style={styles.deckContainer}>
        <View  style={styles.deckTitleContainer}>
          <Text style={styles.deckTitle}>{title}</Text>
          <Text style={styles.deckCards}>{length} card(s)</Text>
        </View>
        <View style={styles.deckBtnContainer}>
          <TouchableOpacity style={[styles.deckBtn, {backgroundColor: '#20184C'}]}
                            onPress={() => navigation.navigate('AddCard', { deckId, title })}>
            <Text style={styles.deckBtnText}>ADD CARD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.deckBtn, {backgroundColor: '#2A6296', opacity: isDeckEmpty ? 0.5 : 1}]}
                            disabled={isDeckEmpty}
                            onPress={() => navigation.navigate('Quiz', { deckId })}>
            <Text style={styles.deckBtnText}> START QUIZ </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStateToProps({ decks }, props){
  const { deckId } = props.navigation.state.params
  return {
    decks,
    deckId
  }
}

export default connect(mapStateToProps)(Deck)