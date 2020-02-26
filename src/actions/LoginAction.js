import { FETCH_LOGIN_VIEW } from './actionTypes';
import LoginScreen from '../components/LoginScreen';
import { connect } from 'react-redux';

export const DEFAULT_STATE_LOGIN = {
    loginView: true,
    userName: '',
    password: ''
}

export const Fetch_Login_View = () => {
    return {
        type: FETCH_LOGIN_VIEW,
        loginView
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
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);