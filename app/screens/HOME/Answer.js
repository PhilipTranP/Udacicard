import React, { Component } from 'react'
import { Text, View } from 'react-native'



class Answer extends Component {

  render() {
    const { question, index, show } = this.props
    if(!show) {
      return null
    }
    return (
      <View>
        <Text>{question.answer}</Text>
      </View>
    )
  }

}

export default Answer
