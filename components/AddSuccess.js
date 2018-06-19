import React from 'react'
import { styles } from '../styles'
import { View, Text, TouchableOpacity } from 'react-native'

AddSuccess = ({text, handleToggleModal}) => {
  return (
    <View style={styles.successContainer}>
      <Text style={styles.successText}>
        {text} successfully added!
      </Text>
      <TouchableOpacity style={styles.btnOk} onPress={() => handleToggleModal()}>
        <Text style={styles.btnOkText}>OK</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddSuccess