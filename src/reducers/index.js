import { combineReducers } from 'redux'
import HighScoresReducer from './HighScoresReducer'
import AuthReducer from './AuthReducer'
import ExercisesReducer from './ExercisesReducer'

export default combineReducers({
    highScores: HighScoresReducer,
    auth: AuthReducer,
    exercises: ExercisesReducer
})