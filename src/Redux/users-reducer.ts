import {ActionsTypes, PostType, ProfilePageType, RootStateType, UsersType} from "./store";
import {sendMessageActionCreator, SendMessageActionType, updateNewMessageBodyActionType} from "./dialogs-reducer";


type InitialStateType = {
    users: Array<UsersType>
}
let initialState: InitialStateType = {
    users: [
        // {
        //     id: 1,
        //     photos: 'https://lh3.googleusercontent.com/proxy/Mx25i0iYqI5Agy9v9obrB8uvTF-hTDhWKAo8GnMx2awwWQ6mM0uTVZ9y8qKDhcosooFYmS-Bio49bfxt3WsTnKYkvOwbc-GXJg_GB3gedM_ZqkS_Vf8mt3aVNHtPi3nw8AhVwtA93ReiUn-3oaU5Scm9VcU3aS72EghnRunnMcwU_sbVo7pO0pYD2o4qrRNGg4ladJCy8f6xl3rdg41kKQ',
        //     followed: false,
        //     name: 'Yaroslav',
        //     status: 'I am junior',
        //     location: {city: 'Samara', country: 'Russia'}
        // },
        // {
        //     id: 2,
        //     photos: 'https://lh3.googleusercontent.com/proxy/Mx25i0iYqI5Agy9v9obrB8uvTF-hTDhWKAo8GnMx2awwWQ6mM0uTVZ9y8qKDhcosooFYmS-Bio49bfxt3WsTnKYkvOwbc-GXJg_GB3gedM_ZqkS_Vf8mt3aVNHtPi3nw8AhVwtA93ReiUn-3oaU5Scm9VcU3aS72EghnRunnMcwU_sbVo7pO0pYD2o4qrRNGg4ladJCy8f6xl3rdg41kKQ',
        //     followed: true,
        //     name: 'Anton',
        //     status: 'I am python developer',
        //     location: {city: 'Samara', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     photos: 'https://lh3.googleusercontent.com/proxy/Mx25i0iYqI5Agy9v9obrB8uvTF-hTDhWKAo8GnMx2awwWQ6mM0uTVZ9y8qKDhcosooFYmS-Bio49bfxt3WsTnKYkvOwbc-GXJg_GB3gedM_ZqkS_Vf8mt3aVNHtPi3nw8AhVwtA93ReiUn-3oaU5Scm9VcU3aS72EghnRunnMcwU_sbVo7pO0pYD2o4qrRNGg4ladJCy8f6xl3rdg41kKQ',
        //     followed: false,
        //     name: 'Valentin',
        //     status: 'I am full stack developer',
        //     location: {city: 'Samara', country: 'Russia'}
        // },
    ],
};

const usersReducer = (state: InitialStateType = initialState, action: UsersActionType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case 'SET_USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export type followActionType = ReturnType<typeof followAC>
export type unfollowActionType = ReturnType<typeof unfollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>

export type UsersActionType = followActionType | unfollowActionType | setUsersActionType

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UsersType>) => ({type: 'SET_USERS', users} as const)


export default usersReducer;