import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Ionicons } from 'react-native-vector-icons'
import FeedScreen from '../screens/FeedScreen'
import { t } from '../services/i18n'

const FeedTab = createStackNavigator(
  {
    Feed: FeedScreen,
  },
  {
    initialRouteName: "Feed"
  }
)

FeedTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons
      name="ios-paper"
      size={25}
      color={tintColor}
    />
  ),
  tabBarLabel: ({ tintColor }) => 
  <Text style={{ fontSize: 11, marginBottom: 1.5, color: tintColor }}>{t('tabs:feed')}</Text>,
}

FeedScreen.navigationOptions = {
  headerTitle: () => <Text style={{ fontSize: 17, fontWeight: "600"}}>{t('feed:headerTitle')}</Text>
}

export default FeedTab