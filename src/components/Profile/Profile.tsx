import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../Redux/state";

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: PropsType) => {
    debugger

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;