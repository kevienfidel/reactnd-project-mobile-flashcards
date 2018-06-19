import React from 'react'
import { styles } from '../styles'
import { View, Text, TouchableOpacity } from 'react-native'

Result = ({score, deck, navigation, resetQuiz}) => {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>
        Your score:
      </Text>
      <Text style={styles.resultFigure}>{score}%</Text>
      <View style={styles.resultBtnContainer}>
        <TouchableOpacity style={[styles.resultBtn, {backgroundColor: '#3E1B44'}]}
                          onPress={() => resetQuiz()}>
          <Text style={styles.answerBtnText}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.resultBtn, {backgroundColor: '#2A6296'}]}
                          onPress={() => navigation.navigate('Deck', { deckId: deck.id, title: deck.title })}>
          <Text style={styles.resultBtnText}>Go to Deck</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}
export default Result