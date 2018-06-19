import React, { Component } from 'react'
import { styles } from '../styles'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
import { connect } from 'react-redux'

class Answer extends Component{

  handleAnswer = (answer) => {
    const { handleScoreCount, handleNextCard } = this.props
    if(answer==='correct'){
      handleScoreCount()
    }
    handleNextCard()
  }
  render(){

    const { answer, handleFlipCard, handleNextCard } = this.props
    return(
      <View style={styles.answerContainer}>
        <View style={styles.answer}>
          <Text style={styles.answerText}>{answer}</Text>
          <TouchableOpacity style={styles.answerBtnViewQuestion} onPress={() => handleFlipCard()} >
            <Text style={styles.answerBtnViewQuestionText} >Question</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.answerBtnContainer}>
          <TouchableOpacity style={[styles.answerBtn, {backgroundColor: '#3E1B44'}]}
                            onPress={() => this.handleAnswer('correct')}>
            <Text style={styles.answerBtnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.answerBtn, {backgroundColor: '#2A6296'}]}
                            onPress={() => this.handleAnswer('incorrect')}>
            <Text style={styles.answerBtnText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStateToProps({decks}, ownProps){
  const { deckId, index, handleFlipCard, handleScoreCount, handleNextCard } = ownProps
  const item = decks[deckId].questions[index]
  return {
    decks,
    answer: item.answer,
    handleFlipCard,
    handleScoreCount,
    handleNextCard
  }
}

export default connect(mapStateToProps)(Answer)