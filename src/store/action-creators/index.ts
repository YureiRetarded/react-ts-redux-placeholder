import * as UserActionCreators from './user'
import * as PostActionCreators from './post'

export default {
    ...PostActionCreators,
    ...UserActionCreators
}