import React, { Component } from 'react'
import { styles } from '../styles'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Modal } from 'react-native'
import { handleAddCardToDeck } from '../actions/cards'
import { connect } from 'react-redux'

class AddCard extends Component{
  state = {
    question: '',
    answer: '',
    isModalShown: false
  }

  handleTextChange = (text, key) => {
    this.setState(() => ({
      [key]: text
    }))
  }

  toggleModal = () => {
    this.setState(({isModalShown}) => ({
      isModalShown: !isModalShown
    }))
  }

  handleSubmit = (id, card) => {
    const { dispatch } = this.props
    const question_o = this.state.question
    const answer_o = this.state.answer

    this.setState(() => ({
      answer: '',
      question: ''
    }))

    dispatch(handleAddCardToDeck(id, card))
    .then(() => this.toggleModal())
    .catch((error) =>
      this.setState(() => ({
        answer: answer_o,
        question: question_o
      }))
    )
  }

  render(){
    const {question, answer, isModalShown} = this.state
    const {deckId, title} = this.props.navigation.state.params
    const isInvalid = (answer === '') ? true : (question === '')
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.addCardContainer} enabled>
        <Modal visible={isModalShown} onRequestClose={() => console.log('modal closed')}>
          <AddSuccess text='Card' handleToggleModal={() => this.toggleModal()}/>
        </Modal>

        <View style={styles.addCardFieldContainer}>
          <Text style={styles.addCardTitle}>{title}</Text>
          <Text style={styles.addCardField} >Question:</Text>
          <TextInput value={question}
                     style={styles.addCardInput}
                     selectTextOnFocus = {true}
                     onChangeText={(text) => (this.handleTextChange(text, 'question'))}
                     multiline = {true}
                     numberOfLines = {3}/>
          <Text style={styles.addCardField} >Answer:</Text>
          <TextInput value={answer}
                     style={styles.addCardInput}
                     selectTextOnFocus = {true}
                     onChangeText={(text) => (this.handleTextChange(text, 'answer'))}
                     multiline = {true}
                     numberOfLines = {3}/>
        </View>
        <View style={{flex:1,
                      justifyContent:'flex-end',
                      marginBottom:115,
                    }}>
          <TouchableOpacity style={[styles.addCardBtnContainer, {opacity: isInvalid ? 0.5 : 1}]}
                            disabled={ isInvalid }
                            onPress={() => this.handleSubmit(deckId, {answer, question})}>
            <Text style={{color:'white', fontSize:20}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(AddCard)