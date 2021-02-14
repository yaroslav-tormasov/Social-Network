import {ActionsTypes, PostType, ProfilePageType, RootStateType} from "./store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

type InitialStateType = {
    newPostText: string
    posts: Array<PostType>
}
let initialState: InitialStateType = {
    users: [
        {id: 1, followed: false, fullName: 'Yaroslav', status: 'I am junior', location: {city: 'Samara', country: 'Russia'}},
        {id: 2, followed: true, fullName: 'Anton', status: 'I am python developer', location: {city: 'Samara', country: 'Russia'}},
        {id: 3, followed: false, fullName: 'Valentin', status: 'I am full stack developer', location: {city: 'Samara', country: 'Russia'}},
    ],
};

const usersReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case FOLLOW:
        default:
            return state;
    }
}

export const followAC = () => ({type: FOLLOW})
export const unfollowAC = () => ({type: UNFOLLOW})

export default usersReducer;