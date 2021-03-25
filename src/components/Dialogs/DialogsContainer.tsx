import React from 'react';
import {
    DialogsActionType,
    InitialStateType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {RootStateReduxType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStatePropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state: RootStateReduxType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsReducer
    }
}

let mapDispatchToProps = (dispatch: Dispatch<DialogsActionType>): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}
const DialogsContainer = connect<MapStatePropsType,MapDispatchToPropsType, {}, RootStateReduxType >(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;