import React from 'react'
import { styles } from '../styles'
import { View, Text } from 'react-native'

Result = ({score}) => {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>
        Your score:
      </Text>
      <Text style={styles.resultFigure}>{score}%</Text>
    </View>
  )
}
export default Result