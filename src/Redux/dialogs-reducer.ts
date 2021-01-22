import profileReducer from "./profile-reducer";
import {ActionsTypes, DialogPageType, RootStateType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state: DialogPageType, action: ActionsTypes): DialogPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
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