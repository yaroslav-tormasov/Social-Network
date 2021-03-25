import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../Redux/profile-reducer";
import {RootStateReduxType} from "../../Redux/redux-store";


type MapStatePropsType = {
    profile: ProfileType
}
type MapDispatchPropsType = {
    setUserProfile: ( profile: ProfileType) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data.items)
            });
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state: RootStateReduxType) => ({
        profile: state.profileReducer.profile
    }
);

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);