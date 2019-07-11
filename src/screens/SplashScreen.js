import React from 'react';
import { View, Text } from 'react-native';
import i18n from '../services/i18n';

class SplashScreen extends React.Component {

  state = {
    isI18nInitialized: false
  }

  componentDidMount() {
    i18n.init()
        .then(() => {
          this.setState({ isI18nInitialized: true })
        })
        .then(() => this.state.isI18nInitialized && this.props.navigation.navigate('Main'))
        .catch((error) => console.warn(error))
    fetch("https://mobasketball.herokuapp.com/api/training/")
        .then(response => response.json())
        .then(data => console.log(data))
    
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
    backgroundColor: 'orange'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}

export default SplashScreen