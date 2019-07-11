import React from "react"
import { View, StyleSheet, Text , TouchableHighlight } from "react-native"
import { Video } from "expo-av"


export default class ExerciseScreen extends React.Component {

  render() {
    return (
      <View>
        <Text>{this.props.navigation.getParam('title')}</Text>
        <Video
          source={{ uri: this.props.navigation.getParam('video') }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          useNativeControls
          shouldPlay
          isLooping
          style={{ width: '100%', height: '80%' }}
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
