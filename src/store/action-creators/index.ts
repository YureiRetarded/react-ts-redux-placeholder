import * as UserActionCreators from './user'
import * as UserWindowActionCreators from './userWindow'
import * as UsersActionCreators from './users'
import * as PostsActionCreators from './posts'
import * as PostActionCreators from './post'
import * as CommentsActionCreators from './comments'
import * as AlbumActionCreators from './album'
import * as AlbumsActionCreators from './albums'
import * as PhotoActionCreators from './photo'
import * as PhotosActionCreators from './photos'

export default {
    ...PostsActionCreators,
    ...UserActionCreators,
    ...UsersActionCreators,
    ...PostActionCreators,
    ...CommentsActionCreators,
    ...UserWindowActionCreators,
    ...AlbumActionCreators,
    ...AlbumsActionCreators,
    ...PhotoActionCreators,
    ...PhotosActionCreators,
}