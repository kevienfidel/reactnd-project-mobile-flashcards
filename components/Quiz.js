import React, { Component } from 'react'
import { handleQuizCompleted } from '../actions/decks'
import { styles } from '../styles'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Question from './Question'
import Answer from './Answer'
import Result from './Result'

class Quiz extends Component{
  state = {
    isAnswerViewed: false,
    index: 0,
    score: 0,
    isQuizCompleted: false
  }

  resetQuiz = () => {
    this.flipCard()
    this.setState(() => ({
      isAnswerViewed: false,
      index: 0,
      score: 0,
      isQuizCompleted: false
    }))
  }

  handleQuizCompleted = () => {
    const { dispatch, deckId } = this.props
    dispatch(handleQuizCompleted({id: deckId}))

    clearLocalNotification().then(setLocalNotification)
  }

  handleNextCard = () => {
    const { index } = this.state
    const { totalItems } = this.props

    if(index+1 < totalItems){
      this.setState(() => ({
        index: index+1
      }))
    }else{
      this.setState(() => ({
        isQuizCompleted: true
      }))

      this.handleQuizCompleted()
    }

    this.flipCard()
  }

  handleScoreCount = () => {
    this.setState(({score}) => ({
      score: score+1
    }))
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    })
    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
    })
  }

  flipCard() {
    this.setState(({isAnswerViewed}) => ({
      isAnswerViewed: !isAnswerViewed,
    }))

    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start()
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start()
    }
  }

  render(){
    const { deckId, decks, hasCards, totalItems, navigation } = this.props
    const { isAnswerViewed, index, isQuizCompleted, score } = this.state
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate }
        ]
    }
    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    }

    if (isQuizCompleted){
      const percentage = (score/totalItems)*100
      return(
        <Result navigation={navigation}
                resetQuiz={() => this.resetQuiz()}
                deck={{id: deckId, title: decks[deckId].title}}
                score={parseInt(percentage, 10)}/>
      )
    }else{
      return (
        <View style={styles.quizContainer}>
          <Text style={styles.quizItemNo}>{index+1}/{totalItems}</Text>
          {!isAnswerViewed && (
            <Animated.View style={[styles.quizFlipCard, frontAnimatedStyle, {opacity: this.frontOpacity}]}>
              <Question deckId={deckId} index={index} handleFlipCard={() => this.flipCard()}/>
            </Animated.View>
          )}
          {isAnswerViewed && (
            <Animated.View style={[styles.quizFlipCard, backAnimatedStyle, {opacity: this.backOpacity}]}>
              <Answer deckId={deckId} handleScoreCount={() => this.handleScoreCount()} index={index} handleNextCard={() => this.handleNextCard()} handleFlipCard={() => this.flipCard()}/>
            </Animated.View>
          )}
        </View>
      )
    }
  }
}

function mapStateToProps({decks}, ownProps){
  const {deckId} = ownProps.navigation.state.params
  const totalItems = decks[deckId].questions.length
  return {
    decks,
    deckId,
    totalItems
  }
}

export default connect(mapStateToProps)(Quiz)