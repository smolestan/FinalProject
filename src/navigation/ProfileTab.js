import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Ionicons } from 'react-native-vector-icons'
import ProfileScreen from '../screens/ProfileScreen'
import SettingsScreen from '../screens/SettingsScreen'
import { t } from '../services/i18n'

const ProfileTab = createStackNavigator(
  {
    Profile: ProfileScreen,
    Settings: SettingsScreen
  },
  {
    initialRouteName: "Profile"
  }
)

ProfileTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons
      name="ios-person"
      size={25}
      color={tintColor}
    />
  ),
  tabBarLabel: ({ tintColor }) => 
  <Text style={ { fontSize: 11, marginBottom: 1.5, color: tintColor }}>{t('tabs:profile')}</Text>,
}

ProfileScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: () => <Text style={{ fontSize: 17, fontWeight: "600"}}>{t('profile:headerTitle')}</Text>,
  headerBackTitle: t('common:back'),
  headerRight: 
    <Ionicons
      name="ios-options"
      size={30}
      color="dodgerblue"
      style={{paddingRight: 15}}
      onPress={() => {
        navigation.navigate('Settings')
      }}
    />
})

SettingsScreen.navigationOptions = {
  headerTitle: () => <Text style={{ fontSize: 17, fontWeight: "600"}}>{t('settings:headerTitle')}</Text>,
}

export default ProfileTab