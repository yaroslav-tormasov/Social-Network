import {ActionsTypes, PostType, ProfilePageType, RootStateType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

type InitialStateType = {
    newPostText: string
    posts: Array<PostType>
}
let initialState: InitialStateType = {
    newPostText: '',
        posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
    ],
}

const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
           return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
} as const)

type AddPostActionType2 = ReturnType<typeof addPostActionCreator>
type ChangeNewTextActionType2 = ReturnType<typeof updateNewPostTextActionCreator>

export type ProfileActionType = AddPostActionType2 | ChangeNewTextActionType2

export default profileReducer;