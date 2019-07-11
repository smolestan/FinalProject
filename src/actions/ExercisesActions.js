export const updateExercises = (exercises) => {
    return {
        type: 'EXERCISES_UPDATED',
        payload: exercises
    }
}