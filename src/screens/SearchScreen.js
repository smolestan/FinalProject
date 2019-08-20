import React from "react"
import { View, StyleSheet, Text, FlatList } from "react-native"
import { getStorageItem } from '../storage/Storage'

import Row from '../components/Row'

class SearchScreen extends React.Component {

  state = {}

  componentDidMount() {
    getStorageItem('exercises')
        .then((exercises) => {
            this.setState({ exercises })
        })
        .catch(err => console.warn('Promise rejected with error: ' + err))
  }

  onPress = (title, video) => {
    this.props.navigation.navigate('Exercise', { 
      title: title, 
      video: video })
  }

  renderItem = ({item}) => <Row {...item} onPress={this.onPress} />

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Exercises</Text>
        <FlatList
          data={this.state.exercises}
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

export default SearchScreen