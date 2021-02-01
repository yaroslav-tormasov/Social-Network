import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {RootStateReduxType, StoreReduxType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {ActionsTypes} from "../../Redux/store";


type PropsType = {
    store: StoreReduxType
}

let mapStateToProps = (state: RootStateReduxType) => {
    return {
        dialogsPage: state.dialogsReducer
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;