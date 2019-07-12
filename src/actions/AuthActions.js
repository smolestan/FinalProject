import axios from 'axios'
import * as actionTypes from './actionTypes'
import { saveToken, removeToken } from '../storage/settingsStorage'

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
    removeToken()
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart())
        axios.post('http:/127.0.0.1:8000/rest-auth/login/', {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key
            saveToken(token)
            dispatch(authSuccess(token))
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authSignup = (username, email, password, password2) => {
    return dispatch => {
        dispatch(authStart())
        axios.post('http:/127.0.0.1:8000/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
        .then(res => {
            const token = res.data.key
            saveToken(token)
            dispatch(authSuccess(token))
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}
