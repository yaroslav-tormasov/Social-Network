import React, {ChangeEvent} from 'react';
import Post from './Post/Post';
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../Redux/profile-reducer";
import s from "../../Dialogs/Dialogs.module.css";
import {ActionsTypes, PostType} from "../../../Redux/store";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


const MyPosts = (props: PropsType) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const changeValueTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value}
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value})
    }

    let addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText));
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            let action = updateNewPostTextActionCreator(text);
            props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={changeValueTextMessage} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;