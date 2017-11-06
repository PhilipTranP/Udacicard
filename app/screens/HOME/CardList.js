import React, { Component } from "react"
import { connect } from 'react-redux'
import { FlatList, View, Text, Dimensions, TouchableOpacity } from "react-native"
import { Tile } from "react-native-elements"
import styled from 'styled-components/native'

const width = Dimensions.get('window').width;


const ContainerView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;


class CardList extends Component {

  render() {
    const { navigation } = this.props
    return (
      <ContainerView>

          <FlatList
            data={this.props.decks}
            renderItem={({ item: deck }) => {
              const numberOfCard = deck.questions.length === 0 ? "No Card Added Yet" : deck.questions.length +  " Cards" + " - " + deck.points + " Points Earned"
              return (

                  <Tile
                       imageSrc={{url: deck.imageUrl}}
                       title={deck.title}
                       featured
                       caption= {numberOfCard}
                       onPress={()=> navigation.navigate('CardView', {title: deck.title, deck: deck, points: deck.points})}
                  />

              );
            }}
            keyExtractor={(item, index) => index}
          />

      </ContainerView>
    );
  }
}

function mapStateToProps(state) {
  const { decks } = state
  return {
    decks
  }
}


export default connect(mapStateToProps)(CardList)
