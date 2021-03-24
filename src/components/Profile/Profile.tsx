import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreReduxType} from "../../Redux/redux-store";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.props}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;