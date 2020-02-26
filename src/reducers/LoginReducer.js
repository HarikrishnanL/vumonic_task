import { FETCH_LOGIN_VIEW,FETCH_LOGIN_USERNAME,FETCH_LOGIN_PASSWORD } from '../actions/actionTypes';
import { DEFAULT_STATE_LOGIN } from '../actions/LoginAction';

const LoginReducer = (state = DEFAULT_STATE_LOGIN, action) => {
    switch (action.type) {
        case FETCH_LOGIN_VIEW:
            return {
                ...state,
                loginView
            }
        
        case FETCH_LOGIN_USERNAME: 
            return {
                ...state,
                loginUserName:action.loginUserName
            }
        
        case FETCH_LOGIN_PASSWORD:
            return {
                ...state,
                loginPassword:action.loginPassword
            }

        default:
            return state
    }
} 

export default LoginReducer;