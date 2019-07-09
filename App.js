import { Updates } from 'expo';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  I18nManager as RNI18nManager,
} from 'react-native';
import { 
  createAppContainer,
} from 'react-navigation'
import i18n from './src/services/i18n';
import AppNavigator from './src/navigation/AppNavigator';

const AppNavigatorContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  state = { isI18nInitialized: false }

  componentDidMount() {
      i18n.init()
          .then(() => {
              const RNDir = RNI18nManager.isRTL ? 'RTL' : 'LTR';

              // RN doesn't always correctly identify native
              // locale direction, so we force it here.
              if (i18n.dir !== RNDir) {
                  const isLocaleRTL = i18n.dir === 'RTL';

                  RNI18nManager.forceRTL(isLocaleRTL);

                  // RN won't set the layout direction if we
                  // don't restart the app's JavaScript.
                  Updates.reloadFromCache();
              }

              this.setState({ isI18nInitialized: true });
          })
          .catch((error) => console.warn(error));
  }

  render() {
      if (this.state.isI18nInitialized) {
          return <AppNavigatorContainer />;
      }

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