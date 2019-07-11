import React from "react"
import { View, StyleSheet, Text, Button, ImageBackground } from "react-native"
import { t } from '../services/i18n'
import { connect } from 'react-redux'
import { updateHighScores } from '../actions'


class HomeScreen extends React.Component {
  state = {
    totalWords: 0,
    highScores: []
  }

  handlePress = () => {
    this.setState({ totalWords: "10" })
    this.props.updateHighScores([{ score: 10, createdAt: new Date() }])
  }

  render() {
    return (
      <View style={styles.container}>
            <ImageBackground 
              source={require('../../assets/bg_onboarding.jpg')}
              style={{width: '100%', height: '100%'}}
              resizeMode='cover'
              blurRadius={10}
            >
              <Text style={styles.text}>{t('main:text')}</Text>
              <Button 
                title="Increase highscore"
                onPress={this.handlePress}>
              </Button>
            </ImageBackground>
          
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
    textAlign: "center",
    color: "white",
    fontSize: 50,
    fontWeight: "800",
    padding: 20
  }
})

const mapStateToProps = (state) => ({
  highScores: state.highScores
})

const mapDispatchToProps = ({ updateHighScores })

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)