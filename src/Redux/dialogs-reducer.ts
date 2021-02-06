import {ActionsTypes, DialogPageType, DialogType, MessageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

type InitialStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

let initialState: InitialStateType = {
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
    }
const dialogsReducer = (state = initialState, action: ActionsTypes): DialogPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
        return {
            ...state,
            newMessageBody: action.body
        }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
           return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]

            }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyActionCreator = (body: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)

export type SendMessageActionType = ReturnType<typeof sendMessageActionCreator>
export type updateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyActionCreator>

export type DialogsActionType = SendMessageActionType | updateNewMessageBodyActionType

export default dialogsReducer;