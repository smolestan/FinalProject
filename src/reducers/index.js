import { combineReducers } from 'redux'
import HihgScoresReducer from './HighScroresReducer'

export default combineReducers({
    highScores: HihgScoresReducer
})