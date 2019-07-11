import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from 'react-redux'

import HighScores from '../components/HighScores';

class FeedScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <HighScores data={this.props.highScores} totalNumber={25} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    textAlign: "center"
  }
});


const mapStateToProps = ({ highScores }) => ({
  highScores
})

export default connect(mapStateToProps, {})(FeedScreen)