import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
      </View>
    );
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
});
