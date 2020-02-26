import { FETCH_SIGNUP_VIEW } from '../actions/actionTypes';
import {DEFAULT_STATE_SIGNUP} from '../actions/SignUpAction';

const SignUpReducer = (state = DEFAULT_STATE_SIGNUP ,action ) => {
    switch(action.type){
        case FETCH_SIGNUP_VIEW:
            return {
                ...state,
                signUpView
            }
        
        default : 
            return state
    }
}

export default SignUpReducer;