import React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    deckList: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor:'#47A6FF',
    },
    list: {
      borderTopWidth:0,
      borderBottomWidth: 0,
      backgroundColor:'#47A6FF'
    },
    listSeparator: {
      height:1,
      width: '90%',
      backgroundColor: '#CED0CE',
      marginLeft: '5%'
    },
    newDeckContainer: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#47A6FF'
    },
    newDeckForm: {
      flex:6,
      justifyContent:'center',
      alignItems:'center'
    },
    newDeckTitle: {
      color:'white',
      fontSize:20,
      textAlign:'center',
      padding:20
    },
    newDeckInput: {
      height:50,
      width:300,
      textAlign:'center',
      color: '#20184C',
      fontSize:18,
      backgroundColor: 'white',
      borderRadius:5,
      borderColor: '#20184C',
      borderWidth: 2
    },
    newDeckBtnContainer: {
      flex:1,
      justifyContent:'flex-end',
      marginBottom:115,
    },
    newDeckBtnSubmit: {
      alignItems:'center',
      backgroundColor: '#20184C',
      padding: 10,
      borderRadius:4,
      width: 250,
      marginTop:'0.5%',
    },
    deckContainer: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#47A6FF'
    },
    deckTitleContainer: {
      flex:6,
      justifyContent:'center',
      alignItems:'center'
    },
    deckTitle: {
      color:'white',
      fontSize:40,
      fontWeight: 'bold'
    },
    deckCards: {
      color:'white',
      fontSize:20
    },
    deckBtnContainer: {
      flex:1,
      justifyContent:'flex-end',
      marginBottom:75,
    },
    deckBtn: {
      alignItems:'center',
      backgroundColor: '#20184C',
      padding: 10,
      borderRadius:4,
      width: 250,
      marginTop:'0.5%'
    },
    deckBtnText: {
      color:'white',
      fontSize:20
    },
    addCardContainer: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#47A6FF'
    },
    addCardTitle: {
      color:'white',
      fontSize:20,
      textAlign:'center',
      fontWeight:'bold'
    },
    addCardFieldContainer:{
      flex:6,
      justifyContent:'center'
    },
    addCardField: {
      color:'white',
      fontSize:18,
      textAlign:'left'
    },
    addCardInput: {
      width:370,
      textAlign:'center',
      color: '#20184C',
      fontSize:15,
      backgroundColor: 'white',
      borderRadius:5,
      borderColor: '#20184C',
      borderWidth: 2
    },
    addCardBtnContainer: {
      alignItems:'center',
      backgroundColor: '#20184C',
      padding: 10,
      borderRadius:4,
      width: 250
    },
    quizContainer: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#47A6FF'
    },
    quizFlipCard: {
      alignItems: 'center',
      justifyContent: 'center',
      backfaceVisibility: 'hidden',
    },
    quizItemNo: {
      color:'white',
      fontWeight:'bold',
      fontSize:15,
      marginTop:'20%'
    },
    questionContainer: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#47A6FF'
    },
    question: {
      flex:6,
      justifyContent:'flex-start',
      alignItems:'center',
      backgroundColor:'#47A6FF'
    },
    questionText: {
      color:'white',
      fontSize:25,
      textAlign:'center',
      padding:15,
      marginTop:'29.5%'
    },
    questionBtnContainer: {
      flex:1,
      justifyContent:'flex-end',
      marginBottom:75,
      marginTop:'25%'
    },
    questionBtn: {
      alignItems:'center',
      backgroundColor: '#20184C',
      padding: 10,
      borderRadius:4,
      width: 250,
      marginBottom:'25%'
    },
    questionBtnText: {
      color:'white',
      fontSize:20
    },
    answerContainer: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#47A6FF'
    },
    answer:{
      flex:6,
      justifyContent:'center',
      alignItems:'center'
    },
    answerText: {
      color:'white',
      fontSize:25,
      textAlign:'center',
      padding:15
    },
    answerBtnViewQuestion: {
      backgroundColor:'#20184C',
      borderRadius:4
    },
    answerBtnViewQuestionText: {
      color:'white',
      fontSize:17,
      paddingLeft:20,
      paddingRight:20,
      paddingTop:3,
      paddingBottom:5
    },
    answerBtnContainer: {
      flex:1,
      justifyContent:'flex-end',
      marginBottom:75,
      marginTop:'25%'
    },
    answerBtn: {
      alignItems:'center',
      padding: 10,
      borderRadius:4,
      width: 250,
      marginTop:'0.5%'
    },
    answerBtnText: {
      color:'white',
      fontSize:20
    },
    resultContainer: {
      flex:1,
      justifyContent:'flex-start',
      alignItems:'center',
      backgroundColor:'#47A6FF'
    },
    resultText: {
      color:'white',
      fontSize:35,
      marginTop: '40%'
    },
    resultFigure: {
      color:'white',
      fontSize:70,
      fontWeight:'bold'
    },
    successContainer: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#47A6FF'
    },
    btnOk: {
      backgroundColor:'#20184C',
      borderRadius:4,
      marginTop:'30%'
    },
    btnOkText: {
      color:'white',
      fontSize:17,
      paddingLeft:20,
      paddingRight:20,
      paddingTop:3,
      paddingBottom:5
    },
    successText: {
      color:'white',
      fontSize:20
    },

})
