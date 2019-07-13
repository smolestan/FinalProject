import React from "react"
import { View, StyleSheet, Text, ImageBackground } from "react-native"
import CButton from "../components/CButton"
import { t } from '../services/i18n'
import { connect } from 'react-redux'
import { logout } from '../actions'


class LogoutScreen extends React.Component {
  state = {
    totalWords: 0,
    highScores: []
  }

  handlePress = () => {
    this.props.logout()
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={styles.container}>
                <Text style={styles.text}>Are you sure you want to log out?</Text>
                <View style={{padding: 50}}>
                <CButton
                  label="Log out"
                  onPress={this.handlePress}>
                </CButton>
                </View>          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: "space-between",
    alignContent: "center",
    flex: 1
  },
  text: {
    textAlign: "center",
    color: "red",
    fontSize: 20,
    fontWeight: "300",
    padding: 20,
    width: '100%'
  }
})

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = ({ logout })

export default connect(mapStateToProps, mapDispatchToProps)(LogoutScreen)