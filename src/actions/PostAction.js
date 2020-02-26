import { FETCH_POST_VIEW } from './actionTypes';
import PostScreen from '../components/PostScreen';
import { connect } from 'react-redux';

export const DEFAULT_STATE_POST = {
    postView: true,
    postTitle: ''
}

export const Fetch_Post_View = () => {
    return {
        type: FETCH_POST_VIEW,
        postView: true
    }
}

const mapStateToProps = (state) => {
    return {
        PostInfo: state.PostData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        OnRenderPostView: () => {
            dispatch(Fetch_Post_View())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostScreen);