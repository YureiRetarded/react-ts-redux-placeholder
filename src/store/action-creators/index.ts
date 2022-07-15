import * as UserActionCreators from './user'
import * as PostActionCreators from './posts'

export default {
    ...PostActionCreators,
    ...UserActionCreators
}