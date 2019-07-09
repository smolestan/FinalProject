import React from 'react'
import { Text } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'

import HomeTab from './HomeTab'
import SearchTab from './SearchTab'
import FeedTab from './FeedTab'
import ProfileTab from './ProfileTab'

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeTab,
    Search: SearchTab,
    Feed: FeedTab,
    Profile: ProfileTab,
  }
)

export default AppNavigator;
