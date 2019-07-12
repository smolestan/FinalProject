import * as actionTypes from './actionTypes'

export const updateExercises = (exercises) => {
    return {
        type: actionTypes.EXERCISES_UPDATED,
        payload: exercises
    }
}