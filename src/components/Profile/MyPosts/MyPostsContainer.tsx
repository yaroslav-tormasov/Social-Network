import React from 'react';
import {
    addPostActionCreator,
    PostType,
    ProfileType,
    updateNewPostTextActionCreator
} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {RootStateReduxType} from "../../../Redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}

type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export type PostPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStateReduxType): MapStatePropsType => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateReduxType>(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;