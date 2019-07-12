import * as actionTypes from './actionTypes'

export const updateHighScores = (highScores) => {
    return {
        type: actionTypes.HIGHSCORES_UPDATED,
        payload: highScores
    }
}