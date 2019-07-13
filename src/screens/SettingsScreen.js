import React from "react"
import { View, StyleSheet, ScrollView } from "react-native"
import SettingsList from '../components/SettingsList'

export default class SettingsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
          <SettingsList
            onPressItem={(screen) => this.props.navigation.navigate(screen)}>Settings</SettingsList>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,

  },
  text: {
    textAlign: "center"
  }
})
