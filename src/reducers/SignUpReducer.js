import { FETCH_SIGNUP_VIEW,FETCH_SIGNUP_FIRSTNAME,FETCH_SIGNUP_LASTNAME,FETCH_SIGNUP_EMAIL,FETCH_SIGNUP_PASSWORD } from '../actions/actionTypes';
import {DEFAULT_STATE_SIGNUP} from '../actions/SignUpAction';

const SignUpReducer = (state = DEFAULT_STATE_SIGNUP ,action ) => {
    switch(action.type){
        case FETCH_SIGNUP_VIEW:
            return {
                ...state,
                signUpView
            }
        
        case FETCH_SIGNUP_FIRSTNAME:
            return {
                ...state,
                userName:action.userName
            }
        
        case FETCH_SIGNUP_LASTNAME:
            return {
                ...state,
                lastName:action.lastName
            }
        
        case FETCH_SIGNUP_EMAIL:
            return {
                ...state,
                email:action.email
            }
        
        case FETCH_SIGNUP_PASSWORD:
            return {
                ...state,
                password:action.password
            }
        
        default : 
            return state
    }
}

export default SignUpReducer;