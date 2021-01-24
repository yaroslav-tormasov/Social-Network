import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {ActionsTypes, PostType, StoreType} from "../../../Redux/store";
import MyPosts from "./MyPosts";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}


const MyPostsContainer = (props: PropsType) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator(props.newPostText));
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     post={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
    />)
}

export default MyPostsContainer;