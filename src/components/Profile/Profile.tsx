import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
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
            <MyPostsContainer />
        </div>
    )
}

export default Profile;