import React from 'react';
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Message/Message";
import {DialogPageType, sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/state";
import s from "./Dialogs.module.css"


type PropsType = {
    state: DialogPageType
}


const Dialogs = (props: PropsType) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange = { onNewMessageChange }
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;