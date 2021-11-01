import { 
  SET_LOADING,
  SET_LOGIN,
  SET_REGISTER,
  SET_DATA 
} from "./keys";

const initialState = {
  data: [],
  isLoading: false,
  loginIsOpen: false,
  registerIsOpen: false
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_LOADING:
      return {...state, isLoading: action.payload}
    case SET_LOGIN:
      return {...state, loginIsOpen: action.payload}
    case SET_REGISTER:
      return {...state, registerIsOpen: action.payload}
    case SET_DATA:
      return {...state, data: action.payload}
    default:
      return state
  }
}