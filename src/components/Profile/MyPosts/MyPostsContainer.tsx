import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {RootStateReduxType} from "../../../Redux/redux-store";
import {ActionsTypes} from "../../../Redux/store";
import {connect} from "react-redux";


const mapStateToProps = (state: RootStateReduxType) => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;