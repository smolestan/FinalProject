import { combineReducers } from 'redux'
import HihgScoresReducer from './HighScoresReducer'

export default combineReducers({
    highScores: HihgScoresReducer
})