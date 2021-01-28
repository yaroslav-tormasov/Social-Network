import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {ActionsTypes, PostType} from "../../../Redux/store";
import MyPosts from "./MyPosts";
import {StoreReduxType} from "../../../Redux/redux-store";

type PropsType = {
    store: StoreReduxType
}


const MyPostsContainer = (props: PropsType) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator(state.profileReducer.newPostText));
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     posts={state.profileReducer.posts}
                     newPostText={state.profileReducer.newPostText}
    />)
}

export default MyPostsContainer;