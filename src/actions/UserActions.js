export const updateUser = (user) => {
    return {
        type: 'USER_UPDATED',
        payload: user
    }
}