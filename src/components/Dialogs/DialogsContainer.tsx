import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/dialogs-reducer";
import {DialogPageType, StoreType} from "../../Redux/store";
import Dialogs from "./Dialogs";


type PropsType = {
    dialogsPage: DialogPageType
    store: StoreType
}


const DialogsContainer = (props: PropsType) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (body: string) => {
       props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
    dialogsPage={state}/>

}

export default DialogsContainer ;