const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
type PhotoType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    aboutMe: string | null
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotoType

}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type InitialStateType = typeof initialState

let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
    ] as Array<PostType>,
    profile: {} as ProfileType
}

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionType): InitialStateType => {
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
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
export const setUserProfile = (profile: ProfileType) => ({
    type: SET_USER_PROFILE,
    profile
} as const)


type AddPostActionType2 = ReturnType<typeof addPostActionCreator>
type ChangeNewTextActionType2 = ReturnType<typeof updateNewPostTextActionCreator>
type setUserProfile = ReturnType<typeof setUserProfile>

export type ProfileActionType = AddPostActionType2 | ChangeNewTextActionType2 | setUserProfile

export default profileReducer;