import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreReduxType} from "../../Redux/redux-store";

type PropsType = {
    store: StoreReduxType
}

const Profile = (props: PropsType) => {
    debugger
let state = props.store.getState()
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile;