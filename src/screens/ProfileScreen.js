import React from "react"
import { View, StyleSheet, Text } from "react-native"
import { getStorageItem } from '../storage/Storage'

export default class ProfileScreen extends React.Component {

  state = {
    user: ""
  }

  componentDidMount() {
    getStorageItem('user')
        .then(user => this.setState({ user }))   
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Details</Text>
        <Text style={styles.text}>Username: { this.state.user.username }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    margin: 15
  },
  text: {
    margin: 20,
    fontSize: 20,
    textAlign: "center"
  }
})
