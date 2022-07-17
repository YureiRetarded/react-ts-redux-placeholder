import * as UserActionCreators from './user'
import * as UsersActionCreators from './users'
import * as PostsActionCreators from './posts'
import * as PostActionCreators from './post'
import * as CommentsActionCreators from './comments'

export default {
    ...PostsActionCreators,
    ...UserActionCreators,
    ...UsersActionCreators,
    ...PostActionCreators,
    ...CommentsActionCreators
}