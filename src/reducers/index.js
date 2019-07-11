import { combineReducers } from 'redux'
import HighScoresReducer from './HighScoresReducer'
import UserReducer from './UserReducer'
import ExercisesReducer from './ExercisesReducer'

export default combineReducers({
    highScores: HighScoresReducer,
    user: UserReducer,
    exercises: ExercisesReducer
})