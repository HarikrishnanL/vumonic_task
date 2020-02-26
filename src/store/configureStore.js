import { createStore, combineReducers, applyMiddleware } from 'redux';
import LoginReducer from '../reducers/LoginReducer';
import SignUpReducer from '../reducers/SignUpReducer';
import PostReducer from '../reducers/PostReducer';
import thunk from 'redux-thunk';


const AppReducers = combineReducers({
    LoginData: LoginReducer,
    SignUpData: SignUpReducer,
    PostData: PostReducer
})

const configureStore = () => {
    return createStore(AppReducers,applyMiddleware(thunk))
}

export default configureStore;