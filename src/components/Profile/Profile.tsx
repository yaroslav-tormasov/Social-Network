import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}

const Profile = (props: PropsType) => {
    debugger

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;