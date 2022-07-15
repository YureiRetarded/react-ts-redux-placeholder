import * as UserActionCreators from './user'
import * as PostsActionCreators from './posts'
import * as PostActionCreators from './post'

export default {
    ...PostsActionCreators,
    ...UserActionCreators,
    ...PostActionCreators
}