import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default class SettingsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

  },
  text: {
    textAlign: "center"
  }
});
