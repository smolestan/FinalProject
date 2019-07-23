import React from 'react'
import { View, Text, Button } from 'react-native'
import i18n from '../services/i18n'
import { getStorageItem, getAllStorageEntries } from '../storage/Storage'

class SplashScreen extends React.Component {

  state = {
    isI18nInitialized: false,
    isUserLoggedIn: false,
    isCheckResultFalse: false
  }

  componentDidMount() {
    getAllStorageEntries()
    getStorageItem('user')
        .then((user) => {
          if (user == false) {
            this.setState({ isCheckResultFalse: true }) 
          } else {
            this.setState({ isUserLoggedIn: true })
          }
        })
        .catch(err => console.warn('Promise rejected with error: ' + err))

    i18n.init()
        .then(() => {
          this.setState({ isI18nInitialized: true })
        })
        .catch((error) => console.warn(error))
}

  componentDidUpdate() {
    if (this.state.isCheckResultFalse
      && this.state.isI18nInitialized) {
        this.props.navigation.navigate('Login')
      }
    if (this.state.isI18nInitialized 
      && this.state.isUserLoggedIn) {
        this.props.navigation.navigate('Main')
      }
  }
  
  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>
          MoBasketBall
        </Text>
      </View>
    )
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  textStyles: {
    color: 'orange',
    fontSize: 40,
    fontWeight: 'bold'
  }
}

export default SplashScreen