import { AsyncStorage } from 'react-native'

export const getAllStorageEntries = async () => {
  console.log('AsyncStorage Content: ')
  try {
    AsyncStorage.getAllKeys()
      .then(keys => keys.length == 0 ? console.log('EMPTY') : AsyncStorage.multiGet(keys)
        .then((result) => {
          result.map(req => req.forEach((element) => {
            console.log(element)
          }))
        }))
  } catch (err) {
    console.warn(err.message)
  }
}

export const getStorageItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {return JSON.parse(value)} else {return false}
  } catch (err) {
    console.warn(err.message)
    return false
    }
}

export const removeStorageItem = async (key) => {
  try {
    const value = await AsyncStorage.removeItem(key)
    if (value === null) {return true} else {return false}
  } catch (err) {
    console.warn(err.message)
    return false
    }
}

export const setStorageItem = async (key, val) => {
  try {
    const value = await AsyncStorage.setItem(key, JSON.stringify(val))
    return true
  } catch (err) {
    console.warn(err)
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
