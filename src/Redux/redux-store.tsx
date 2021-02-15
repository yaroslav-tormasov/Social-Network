import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    sidebarReducer: sidebarReducer,
    usersPage: usersReducer
})

export type RootStateReduxType = ReturnType<typeof reducers>

let store = createStore(reducers);

export type StoreReduxType = ReturnType<typeof reducers >

export default store;