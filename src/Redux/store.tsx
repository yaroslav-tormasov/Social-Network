import profileReducer, { ProfileActionType } from "./profile-reducer";
import dialogsReducer, {DialogsActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store: StoreType = {
    _state: {
        profilePage: {
            newPostText: 'it',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
            ],
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your ?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber(state: RootStateType) {
        console.log('State changed');
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: ActionsTypes) {

        this._state.profilePage = profileReducer( this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer( this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
    subscribe: (callback: () => void) => void
    _callSubscriber: (state: RootStateType) => void
}


type AddPostActionType = {
    type: "ADD-POST"
    postText: string
}

export type ActionsTypes = DialogsActionType | ProfileActionType

type ChangeNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number

}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType

}
export default store;