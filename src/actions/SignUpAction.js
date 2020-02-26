import { FETCH_SIGNUP_VIEW } from './actionTypes';
import SignUpScreen from '../components/SignUpScreen';
import { connect } from 'react-redux';

export const DEFAULT_STATE_SIGNUP = {
    signUpView: true,
    userName: '',
    email: '',
    password: '',
}

export const Fetch_SignUp_View = () => {
    return {
        type: FETCH_SIGNUP_VIEW,
        signUpView
    }
}

const mapStateToProps =(state) => {
    return {
        SignUpInfo: state.SignUpData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        OnRenderSignUpView: () => {
            dispatch(Fetch_SignUp_View())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpScreen)