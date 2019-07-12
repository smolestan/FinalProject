import React from "react"
import { 
  Image, 
  StyleSheet, 
  View, 
  KeyboardAvoidingView
} from "react-native"
import Button from "../components/Button"
import FormTextInput from "../components/FormTextInput"

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
    this.props.navigation.navigate('Main')

    // console.log("Login button pressed")
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            value={this.state.login}
            onChangeText={this.handleLoginChange}
            placeholder="Login"
            autoCorrect={false}
            returnKeyType='next'
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder="Password"
            secureTextEntry={true}
            returnKeyType="done"
          />
          <Button label="Log In" onPress={this.handleLoginPress} />
        </View>
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
  }
})

export default LoginScreen