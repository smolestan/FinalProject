import React from "react"
import { 
  Image, 
  StyleSheet, 
  View, 
  KeyboardAvoidingView,
  Text,
  Button,
  ActivityIndicator
} from "react-native"
import CButton from "../components/CButton"
import { connect } from 'react-redux'
import { authLogin } from '../actions'


class SignupScreen extends React.Component {
  
  state = {
    login: "",
    password: ""
  }

  handleLoginChange = (login) => {
    this.setState({ login: login })
  }

  handlePasswordChange = (password) => {
    this.setState({ password: password })
  }

  handleLoginPress = () => {
    this.props.authLogin(this.state.login, this.state.password)
    // this.props.navigation.navigate('Main')
    // console.log("Login button pressed")
  }

  handleSignupPress = () => {
    this.props.navigation.navigate('Main')

    // console.log("Signup button pressed")
  }

  render() {

    let errorMessage = null
    if (this.props.error) {
      errorMessage = (
        <Text style={styles.error}>{this.props.error.message}</Text>
      )
    }
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        { errorMessage }
        {
          this.props.loading 
          ?
          <ActivityIndicator style={styles.ingicator} size="large" color='dodgerblue' /> 
          :
          <View style={styles.form}>
            <CButton label="Sign Up" onPress={this.handleLoginPress} />
          </View>

        }
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  },
  text: {
    textAlign: "center",
    color: "grey"
  },
  ingicator: {
    padding: 100
  },
  error: {
    textAlign: "center",
    color: "red"
  },
})

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error
})

const mapDispatchToProps = ({ authLogin })

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)
