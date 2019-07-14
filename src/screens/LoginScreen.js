import React from "react"
import { 
  Image, 
  StyleSheet, 
  View, 
  KeyboardAvoidingView,
  TextInput,
  Text,
  Button,
  ActivityIndicator
} from "react-native"
import CButton from "../components/CButton"
import { connect } from 'react-redux'
import { authLogin } from '../actions'


class LoginScreen extends React.Component {
  
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
  }

  componentDidUpdate() {
    if (this.props.token) {
      this.props.navigation.navigate('Main')
    }
  }

  handleSignupPress = () => {
    this.props.navigation.navigate('Signup')
  }

  render() {

    let errorMessage = null
    if (this.props.error) {
      errorMessage = (
        <Text style={styles.error}>{this.props.error}</Text>
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
            <TextInput
              style={styles.textInput}
              selectionColor="dodgerblue"
              value={this.state.login}
              onChangeText={this.handleLoginChange}
              placeholder="Login"
              autoCorrect={false}
              returnKeyType='next'
            />
            <TextInput
              style={styles.textInput}
              selectionColor="dodgerblue"
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
              placeholder="Password"
              secureTextEntry={true}
              returnKeyType="done"
            />
            <CButton label="Log In" onPress={this.handleLoginPress} />
            <Text style={styles.text}>or</Text>
            <Button title="Sign Up" onPress={this.handleSignupPress} />
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
  textInput: {
    height: 40,
    borderColor: "silver",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  },
  text: {
    textAlign: "center",
    color: "grey"
  },
  ingicator: {
    padding: 153
  },
  error: {
    textAlign: "center",
    color: "red"
  },
})

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  token: state.auth.token
})

const mapDispatchToProps = ({ authLogin })

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
