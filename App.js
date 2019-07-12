import React from 'react';
import { 
  createAppContainer,
} from 'react-navigation'
import AppNavigator from './src/navigation/AppNavigator';

import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './src/reducers/index'

const AppNavigatorContainer = createAppContainer(AppNavigator)

const store = createStore(reducer, compose(
  applyMiddleware(thunk)
))

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppNavigatorContainer />
      </Provider>
    )
  }
}
  
export default App