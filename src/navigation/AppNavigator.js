import React from 'react'
import { createBottomTabNavigator,
          createSwitchNavigator
        } from 'react-navigation'

import HomeTab from './HomeTab'
import SearchTab from './SearchTab'
import FeedTab from './FeedTab'
import ProfileTab from './ProfileTab'
import SplashScreen from '../screens/SplashScreen';

const MainNavigator = createBottomTabNavigator(
  {
    Home: HomeTab,
    Search: SearchTab,
    Feed: FeedTab,
    Profile: ProfileTab,
  }
)

const AppNavigator = createSwitchNavigator(
  {
    Splash: SplashScreen,
    Main: MainNavigator
  }
)

export default AppNavigator;
