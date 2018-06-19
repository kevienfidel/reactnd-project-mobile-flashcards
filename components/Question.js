import React, { Component } from 'react'
import { styles } from '../styles'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
import { connect } from 'react-redux'

class Question extends Component{

  render(){
    const { question, handleFlipCard} = this.props

    return(
      <View style={styles.questionContainer}>
        <View style={styles.question}>
          <Text style={styles.questionText} >{question}</Text>
        </View>
        <View style={styles.questionBtnContainer}>
          <TouchableOpacity style={styles.questionBtn}
                            onPress={() => handleFlipCard()}>
            <Text style={styles.questionBtnText}>Answer</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStateToProps({decks}, ownProps){
  const { deckId, index, handleFlipCard } = ownProps
  const item = decks[deckId].questions[index]
  return {
    decks,
    question: item.question,
    handleFlipCard
  }
}

export default connect(mapStateToProps)(Question)