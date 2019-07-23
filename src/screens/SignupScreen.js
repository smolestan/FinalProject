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
import { Formik } from 'formik'
import * as yup from 'yup'
import CButton from "../components/CButton"
import FormTextInput from "../components/FormTextInput"
import { connect } from 'react-redux'
import { authSignup } from '../actions'

class SignupScreen extends React.Component {
  
  validationSchema = yup.object().shape({
    username: yup
      .string()
      .required()
      .label('Username'),
    email: yup
      .string()
      .required()
      .label('Email')
      .email(),
    password1: yup
      .string()
      .label('Password')
      .required()
      .min(3, 'Seems a bit short...'),
    password2: yup
      .string()
      .label('Password confirmation')
      .required()
      .test('passwords-match', 'Passwords do not match', function(value) {
        return this.parent.password1 === value
      })
  })
  
  componentDidUpdate() {
    if (this.props.token) {
      axios.get("https://mobasketball.herokuapp.com/api/exercises/")
      .then(res => {
        setStorageItem('exercises', res.data)
        this.props.navigation.navigate('Main')
      })
      .catch(err => console.warn(err))
    }
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
        <Image 
          source={require('../../assets/logo.png')} 
          style={styles.logo} />
        { errorMessage }
        {
          this.props.loading 
          ?
          <ActivityIndicator 
            style={styles.ingicator} 
            size="large" 
            color='dodgerblue' /> 
          :
          <View style={styles.form}>
            <Formik
              initialValues={{ 
                username: '', 
                email: '', 
                password1: '',
                password2: ''
              }}
              onSubmit={values => 
                this.props.authSignup(
                  values.username, 
                  values.email,
                  values.password1,
                  values.password2
                  )}
              validationSchema={this.validationSchema}
            >
              {formikProps => (
                <React.Fragment>
                  <FormTextInput
                    formikProps={formikProps}
                    formikKey='username'
                    placeholder='Username'
                    autoCorrect={false}
                    returnKeyType='next'
                  />
                  <FormTextInput
                    formikProps={formikProps}
                    formikKey='email'
                    placeholder='Email'
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType='next'
                  />
                  <FormTextInput 
                    formikProps={formikProps}
                    formikKey='password1'
                    placeholder='Password'
                    secureTextEntry={true}
                    returnKeyType='next'
                  />
                  <FormTextInput 
                    formikProps={formikProps}
                    formikKey='password2'
                    placeholder='Password confirmation'
                    secureTextEntry={true}
                    returnKeyType='done'
                  />
                  <CButton 
                    label="Sign Up" 
                    onPress={formikProps.handleSubmit} 
                  />
                </React.Fragment>
              )}
            </Formik>
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

const mapDispatchToProps = ({ authSignup })

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)
