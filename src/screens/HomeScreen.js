import React from "react";
import { View, StyleSheet, Text, Button, ImageBackground } from "react-native";
import { t } from '../services/i18n'


export default class HomeScreen extends React.Component {

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
            </ImageBackground>
          
      </View>
    );
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
});
