import { AsyncStorage } from 'react-native'


export const checkToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token')
    if (token !== null) {return token} else {return false}
  } catch (err) {
    console.log(err.message)
    return false
    }
}

export const removeToken = async () => {
  try {
    const token = await AsyncStorage.removeItem("token")
    if (token === null) {return true} else {return false}
  } catch (err) {
    console.log(err.message)
    return false
    }
}

export const saveToken = async (token) => {
  try {
    const token = await AsyncStorage.setItem('token', token)
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}

// const STORAGE_KEY = 'SETTINGS'

// const DEFAULT_SETTINGS = {
//   name: '',
//   locale: 'en'
// }

// export const loadSettings = async () => {
//   try {
//     let settings = await AsyncStorage.getItem(STORAGE_KEY);

//     if (settings === null) { return DEFAULT_SETTINGS; }

//     return JSON.parse(settings)
//   } catch (error) {
//     console.log('Error loading settings', error)
//   }
// }

// export const saveSettings = (settings) => {
//   AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
// }
