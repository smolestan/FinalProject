const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'EXERCISES_UPDATED':
            return [...state, ...action.payload]
        default:
            return state
    }
}