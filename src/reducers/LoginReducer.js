import { FETCH_LOGIN_VIEW } from '../actions/actionTypes';
import { DEFAULT_STATE_LOGIN } from '../actions/LoginAction';

const LoginReducer = (state = DEFAULT_STATE_LOGIN, action) => {
    switch (action.type) {
        case FETCH_LOGIN_VIEW:
            return {
                ...state,
                loginView
            }

        default:
            return state
    }
} 

export default LoginReducer;