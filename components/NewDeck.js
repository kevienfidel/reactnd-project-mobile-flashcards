import React, { Component } from 'react'
import { styles } from '../styles'
import {connect} from 'react-redux'
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView , Modal } from 'react-native'
import { handleSaveDeck } from '../actions/decks'
import AddSuccess from './AddSuccess'

class NewDeck extends Component{

  state = {
    input: '',
    isModalShown: false
  }

  handleTextChange = (text) => {
    this.setState(() => ({
      input: text,
    }))
  }

  toggleModal = () => {
    this.setState(({isModalShown}) => ({
      isModalShown: !isModalShown
    }))
  }

  handleSubmit = (input) => {
    const {dispatch} = this.props
    const input_o = this.state.input

    this.setState(() => ({
      input: ''
    }))

    dispatch(handleSaveDeck(input))
    .then(() => this.toggleModal())
    .catch((error) =>
      this.setState(() => ({
         input: input_o
      }))
    )
  }

  render(){
    const { input, isModalShown, submitting } = this.state

    return(
      <KeyboardAvoidingView behavior='padding' style={styles.newDeckContainer}>
        <Modal visible={isModalShown} onRequestClose={() => console.log('modal closed')}>
          <AddSuccess text='Deck' handleToggleModal={() => this.toggleModal()}/>
        </Modal>

        <View style={styles.newDeckForm}>
          <Text style={styles.newDeckTitle} >What is the title of your new deck?</Text>
          <TextInput value={input}
                     style={styles.newDeckInput}
                     selectTextOnFocus = {true}
                     onChangeText={(text) => (this.handleTextChange(text))}/>
        </View>
        <View style={styles.newDeckBtnContainer}>
          <TouchableOpacity style={[styles.newDeckBtnSubmit, {opacity: input === '' ? 0.5 : 1}]}
                            disabled={input === '' ? true : false}
                            onPress={() => this.handleSubmit(input)}>
            <Text style={{color:'white', fontSize:20}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(NewDeck)