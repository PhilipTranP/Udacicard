import React, { Component } from 'react'
import { Text, View } from 'react-native'



class Question extends Component {

  render() {
    const { question, index, show } = this.props
    if(!show) {
      return null
    }
    return (
      <View>
        <Text>{question.question}</Text>
      </View>
    )
  }

}

export default Question
