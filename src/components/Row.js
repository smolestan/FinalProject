import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Row = props => (
    <TouchableOpacity onPress={() => props.onPress(props.title, props.video)}>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.descr}>{props.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )  

const styles = StyleSheet.create({
  row: {
    padding: 20,
    flexDirection: "row",
  },
  title: {
    paddingLeft: 5,
    fontWeight: "bold"
  },
  descr: {
    paddingLeft: 5
  }
})

export default Row