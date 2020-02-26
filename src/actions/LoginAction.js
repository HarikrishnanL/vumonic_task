import { FETCH_LOGIN_VIEW,FETCH_LOGIN_USERNAME,FETCH_LOGIN_PASSWORD } from './actionTypes';
import LoginScreen from '../components/LoginScreen';
import { connect } from 'react-redux';

export const DEFAULT_STATE_LOGIN = {
    loginView: true,
    loginUserName: '',
    loginPassword: ''
}

export const Fetch_Login_View = () => {
    return {
        type: FETCH_LOGIN_VIEW,
        loginView
    }
}

export const Fetch_Login_UserName = (loginUserName) => {
    return {
        type:FETCH_LOGIN_USERNAME,
        loginUserName:loginUserName
    }
}

export const Fetch_Login_Password = (loginPassword) => {
    return {
        type:FETCH_LOGIN_PASSWORD,
        loginPassword:loginPassword
    }
}


const mapStateToProps = (state) => {
    return {
        LoginInfo: state.LoginData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        OnRenderLoginView: () => {
            dispatch(Fetch_Login_View())
        },

        OnrenderLoginUserName:(loginUserName) => {
            dispatch(Fetch_Login_UserName(loginUserName))
        },

        OnrenderLoginPassword:(loginPassword)=>{
            dispatch(Fetch_Login_Password(loginPassword))
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);