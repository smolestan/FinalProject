import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Ionicons } from 'react-native-vector-icons'
import HomeScreen from '../screens/HomeScreen'
import ProgramScreen from '../screens/ProgramScreen'
import TrainingScreen from '../screens/TrainingScreen'
import { t } from '../services/i18n'


const HomeTab = createStackNavigator(
    {
      Home: HomeScreen,
      Program: ProgramScreen,
      Training: TrainingScreen
    },
    {
      initialRouteName: "Home"
    }
  )
  
HomeTab.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Ionicons
        name="ios-basketball"
        size={25}
        color={tintColor}
        />
    ),
    tabBarLabel: ({ tintColor }) => 
        <Text style={ { fontSize: 11, marginBottom: 1.5, color: tintColor }}>{t('tabs:home')}</Text>,
}
  
HomeScreen.navigationOptions = {
    // headerTransparent: true,
    headerTitle: () => <Text style={{ fontSize: 17, fontWeight: "600"}}>{t('main:headerTitle')}</Text>
}

export default HomeTab;