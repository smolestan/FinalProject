import { combineReducers } from 'redux'
import HighScoresReducer from './HighScoresReducer'
import AuthReducer from './AuthReducer'

export default combineReducers({
    highScores: HighScoresReducer,
    auth: AuthReducer,
})