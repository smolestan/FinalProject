import React from 'react';
import { 
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  StyleSheet, Text, View 
} from 'react-navigation';
import { Ionicons } from 'react-native-vector-icons'
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import FeedScreen from './screens/FeedScreen'
import ProfileScreen from './screens/ProfileScreen'
import ProgramScreen from './screens/ProgramScreen'
import TrainingScreen from './screens/TrainingScreen'

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
  tabBarLabel: "Home",
}

HomeScreen.navigationOptions = {
  headerTitle: "Home"
}

SearchScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons
      name="ios-search"
      size={25}
      color={tintColor}
    />
  ),
  tabBarLabel: "Search",
}

FeedScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons
      name="ios-paper"
      size={25}
      color={tintColor}
    />
  ),
  tabBarLabel: "Feed",
}

ProfileScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons
      name="ios-person"
      size={25}
      color={tintColor}
    />
  ),
  tabBarLabel: "Profile",
}

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeTab,
    Search: SearchScreen,
    Feed: FeedScreen,
    Profile: ProfileScreen
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}