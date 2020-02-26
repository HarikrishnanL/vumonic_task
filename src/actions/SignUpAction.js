import { FETCH_SIGNUP_VIEW,FETCH_SIGNUP_FIRSTNAME,FETCH_SIGNUP_LASTNAME,FETCH_SIGNUP_EMAIL,FETCH_SIGNUP_PASSWORD } from './actionTypes';
import SignUpScreen from '../components/SignUpScreen';
import { connect } from 'react-redux';

export const DEFAULT_STATE_SIGNUP = {
    signUpView: true,
    userName: '',
    email: '',
    lastName:'',
    password: '',
}

export const Fetch_SignUp_View = () => {
    return {
        type: FETCH_SIGNUP_VIEW,
        signUpView
    }
}

export const Fetch_SignUp_FirstName= (userName) => {
    return {
        type:FETCH_SIGNUP_FIRSTNAME,
        userName:userName
    }
}

export const Fetch_SignUp_LastName = (lastName) => {
    return {
        type:FETCH_SIGNUP_LASTNAME,
        lastName:lastName
    }
}

export const Fetch_SignUp_Email = (email) =>{
    return {
        type:FETCH_SIGNUP_EMAIL,
        email:email
    }
}

export const Fetch_SignUp_Password = (password)=>{
    return {
        type:FETCH_SIGNUP_PASSWORD,
        password:password
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
        },

        OnRenderFirstName:(userName) => {
            dispatch(Fetch_SignUp_FirstName(userName))
        },

        onRenderSecondName:(lastName) => {
            dispatch(Fetch_SignUp_LastName(lastName))
        },

        OnRenderEmail:(email)=>{
            dispatch(Fetch_SignUp_Email(email))
        },
        OnRenderPassword:(password)=>{
            dispatch(Fetch_SignUp_Password(password))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpScreen)