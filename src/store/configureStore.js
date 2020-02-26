import {createStore , combineReducers} from 'redux';
import LoginReducer from '../reducers/LoginReducer';
import SignUpReducer from  '../reducers/SignUpReducer';
import PostReducer from '../reducers/PostReducer';

const AppReducers = combineReducers({
    LoginData:LoginReducer,
    SignUpData:SignUpReducer,
    PostData:PostReducer
})

const configureStore = () => {
    return createStore(AppReducers)
}

export default configureStore;