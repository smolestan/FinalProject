import React from "react"
import { View, StyleSheet, Text } from "react-native"
import { getStorageItem } from '../storage/Storage'
import FormTextInput from "../components/FormTextInput"
import { Formik } from 'formik'
import * as yup from 'yup'
import CButton from "../components/CButton"

export default class ProfileScreen extends React.Component {

  state = {
    user: ""
  }

  validationSchema = yup.object().shape({
    firstname: yup
      .string()
      .label('First Name'),
    lastname: yup
      .string()
      .label('Last Name')
  })

  componentDidMount() {
    getStorageItem('user')
        .then(user => this.setState({ user }))   
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Details</Text>
        <Text style={styles.text}>Username: { this.state.user.username }</Text>
        <View style={styles.form}>
            <Formik
              initialValues={{ firstname: '', lastname: ''}}
              onSubmit={() => alert('Profile saving feature is not implemented yet!')}
              validationSchema={this.validationSchema}
            >
              {formikProps => (
                <React.Fragment>
                  <FormTextInput
                    formikProps={formikProps}
                    formikKey='firstname'
                    placeholder='First Name'
                    autoCorrect={false}
                    returnKeyType='next'
                  />
                  <FormTextInput 
                    formikProps={formikProps}
                    formikKey='lastname'
                    placeholder='Last Name'
                    returnKeyType='done'
                  />
                  <CButton 
                    label="Save" 
                    onPress={formikProps.handleSubmit} 
                  />
                </React.Fragment>
              )}
            </Formik>
          </View>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    margin: 15
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  },
  text: {
    margin: 20,
    fontSize: 20,
    textAlign: "center"
  }
})
