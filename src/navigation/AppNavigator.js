import React from 'react'
import { createBottomTabNavigator,
          createSwitchNavigator
        } from 'react-navigation'

import HomeTab from './HomeTab'
import SearchTab from './SearchTab'
import FeedTab from './FeedTab'
import ProfileTab from './ProfileTab'
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';

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
    Login: LoginScreen,
    Main: MainNavigator
  }
)

export default AppNavigator;
