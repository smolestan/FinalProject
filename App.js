import React from 'react';
import { 
  createAppContainer,
} from 'react-navigation'
import AppNavigator from './src/navigation/AppNavigator';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'

const AppNavigatorContainer = createAppContainer(AppNavigator);

class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <AppNavigatorContainer />
      </Provider>
    )
  }
}
  
export default App