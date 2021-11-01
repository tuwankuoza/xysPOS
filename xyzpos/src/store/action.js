import { 
  SET_LOADING,
  SET_LOGIN,
  SET_REGISTER,
  SET_DATA 
} from "./keys";
import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export function setLoadingStatus(payload) {
  return {
    type: SET_LOADING,
    payload: payload
  }
}

export function setLoginStatus(payload) {
  return {
    type: SET_LOGIN,
    payload: payload
  }
}

export function setRegisterStatus(payload) {
  return {
    type: SET_REGISTER,
    payload: payload
  }
}

export function setData(payload) {
  return {
    type: SET_DATA,
    payload: payload
  }
}

export function userLogin(payload) {
  return async function(dispatch) {
    dispatch(setLoadingStatus(true))
    try {
      const { access_token } = await axios({
        method: 'POST',
        url: `${baseUrl}/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: payload
      })
      localStorage.setItem('access_token', access_token)
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(setLoadingStatus(false))
    }
  }
}

export function userRegister(payload) {
  return async function(dispatch) {
    dispatch(setLoadingStatus(true))
    try {
      const { access_token } = await axios({
        method: 'POST',
        url: `${baseUrl}/register`,
        headers: {
          "Content-Type": "application/json",
        },
        data: payload
      })
      localStorage.setItem('access_token', access_token)
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(setLoadingStatus(false))
    }
  }
}

export function fetchData() {
  return async function(dispatch) {
    dispatch(setLoadingStatus(true))
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${baseUrl}/subs`,
        headers: {
          "Content-Type": "application/json",
        },
      })
      dispatch(setData(data))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(setLoadingStatus(false))
    }
  }
}