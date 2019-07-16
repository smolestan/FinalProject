import axios from 'axios'
import * as actionTypes from './actionTypes'
import { setStorageItem, removeStorageItem } from '../storage/Storage'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        payload: error
    }
}

export const logout = () => {
    removeStorageItem('user')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart())
        axios.post('https://mobasketball.herokuapp.com/rest-auth/login/', {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key
            setStorageItem('user', { username, token } )
            dispatch(authSuccess(token))
        })
        .catch(err => {
            try {
                const errData = Object.values(err.response.data)[0][0]
                dispatch(authFail(errData))
            }
            catch(error) {
                dispatch(authFail(err.message))
            }
        })
    }
}

export const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart())
        axios.post('https://mobasketball.herokuapp.com/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
        .then(res => {
            const token = res.data.key
            setStorageItem('user', { username, token } )
            dispatch(authSuccess(token))
        })
        .catch(err => {
            try {
                const errData = Object.values(err.response.data)[0][0]
                dispatch(authFail(errData))
            }
            catch(error) {
                dispatch(authFail(err.message))
            }
        })
    }
}
