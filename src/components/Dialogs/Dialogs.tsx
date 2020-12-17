import React from 'react';
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Message/Message";
import {DialogPageType} from "../../Redux/state";
import s from "./Dialogs.module.css"


type PropsType = {
   state: DialogPageType
}


const Dialogs = (props: PropsType) => {


    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
        let messagesElements = props.state.messages.map ( m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
        { dialogsElements }
            </div>
            <div className={s.messages}>
        { messagesElements }
            </div>
        </div>

    )
}

export default Dialogs;