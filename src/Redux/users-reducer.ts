import {UsersType} from "./store";


type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
            return {...state, users: action.users}
        }
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case  'SET_TOTAL_USERS_COUNT': {
            return {...state, totalUsersCount: action.totalCount}
        }
        case  'TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export type followActionType = ReturnType<typeof followAC>
export type unfollowActionType = ReturnType<typeof unfollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
export type toggleActionType = ReturnType<typeof toggleIsFetchingAC>

export type UsersActionType = followActionType | unfollowActionType | setUsersActionType | setCurrentPageActionType | setTotalUsersCountActionType | toggleActionType

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<UsersType>) => ({type: 'SET_USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const)


export default usersReducer;