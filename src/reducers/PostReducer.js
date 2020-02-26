import { FETCH_POST_VIEW } from '../actions/actionTypes';
import { DEFAULT_STATE_POST } from '../actions/PostAction'

const PostReducer = (state = DEFAULT_STATE_POST, action) => {
    switch (action.type) {
        case FETCH_POST_VIEW:
            return {
                ...state,
                postView
            }

        default:
            return state
    }
}

export default PostReducer;