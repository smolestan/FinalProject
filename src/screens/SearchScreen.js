import React from "react"
import { View, StyleSheet, Text, FlatList } from "react-native"
import { connect } from 'react-redux'

import Row from '../components/Row'

class SearchScreen extends React.Component {

  onPress = (title, video) => {
    this.props.navigation.navigate('Exercise', { 
      title: title, 
      video: video })
  }

  renderItem = ({item}) => <Row {...item} onPress={this.onPress} />

  render() {
    return (
      <View>
        <Text style={styles.text}>Exercises</Text>
        <FlatList
          data={this.props.exercises}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  text: {
    textAlign: "center"
  }
})

const mapStateToProps = ({ exercises }) => ({
  exercises
})

export default connect(mapStateToProps, {})(SearchScreen)