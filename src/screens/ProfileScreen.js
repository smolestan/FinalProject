import React from "react"
import { View, StyleSheet, Text, Image, Dimensions, Button } from "react-native"
import { getStorageItem, setStorageItem } from '../storage/Storage'
import FormTextInput from "../components/FormTextInput"
import { Formik } from 'formik'
import * as yup from 'yup'
import CButton from "../components/CButton"
import axios from 'axios'

export default class ProfileScreen extends React.Component {

  state = {
    token: "",
    profile: ""
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
    getStorageItem('profile')
      .then(profile => {
        this.setState({ profile })
        getStorageItem('user')
          .then(user => {
            this.setState({ token: user.token })
            axios.defaults.headers = {
              "Content-Type": "application/json",
              Authorization: `Token ${user.token}`
            }
            axios.get("https://mobasketball.herokuapp.com/profiles/")
              .then(res => {
                profile = res.data[0]
                this.setState({ profile })
                setStorageItem('profile', profile)
              })
              .catch(err => console.warn(err))
          })
      })
  }

  updateProfile = (firstname, lastname) => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.state.token}`
    }
    axios.patch('https://mobasketball.herokuapp.com/rest-auth/user/', {
        first_name: firstname,
        last_name: lastname
    })
    .then(res => {
      axios.patch(`https://mobasketball.herokuapp.com/profiles/${this.state.profile.id}/`, {
        current_course: 1
      })
      .then(res => {
        profile = res.data
        this.setState({ profile })
        setStorageItem('profile', profile)
      })
      .catch(err => console.warn(err))
    })
    .catch(err => console.warn(err))
  }

  render() {
    const dimensions = Dimensions.get('window')
    const imageHeight = (dimensions.width / 3)
    const imageWidth = (dimensions.width / 3)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Details</Text>
        <Text style={styles.text}>Username: { this.state.profile.username }</Text>
        <Image
            source={{ uri: this.state.profile.image, width: imageWidth, height: imageHeight }}
        />
        <Button
          onPress={this._pickImage}
          title="Pick an image from camera roll"
        />
        <Button
          onPress={this._takePhoto}
          title="Take a photo"
        />
        <View style={styles.form}>
            <Formik
              enableReinitialize={true}
              initialValues={{ 
                firstname: this.state.profile.first_name, 
                lastname: this.state.profile.last_name
              }}
              onSubmit={values => 
                this.updateProfile(
                  values.firstname, 
                  values.lastname
                  )}
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
                    value={formikProps.values.firstname}
                  />
                  <FormTextInput 
                    formikProps={formikProps}
                    formikKey='lastname'
                    placeholder='Last Name'
                    returnKeyType='done'
                    value={formikProps.values.lastname}
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
