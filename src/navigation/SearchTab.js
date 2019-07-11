import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Ionicons } from 'react-native-vector-icons'
import SearchScreen from '../screens/SearchScreen'
import ExerciseScreen from '../screens/ExerciseScreen'
import { t } from '../services/i18n'

const SearchTab = createStackNavigator(
  {
    Search: SearchScreen,
    Exercise: ExerciseScreen
  },
  {
    initialRouteName: "Search"
  }
)

SearchTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons
      name="ios-search"
      size={25}
      color={tintColor}
    />
  ),
  tabBarLabel: ({ tintColor }) => 
  <Text style={ { fontSize: 11, marginBottom: 1.5, color: tintColor }}>{t('tabs:search')}</Text>,
}

SearchScreen.navigationOptions = {
  headerTitle: () => <Text style={{ fontSize: 17, fontWeight: "600"}}>{t('search:headerTitle')}</Text>
}

export default SearchTab