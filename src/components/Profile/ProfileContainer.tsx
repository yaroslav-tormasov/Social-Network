import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {UsersType} from "../../Redux/store";
import {UsersPropsType} from "../Users/UsersContainer";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data.items)
            });
    }

    render() {
        return (
            <Profile {...this.props}  profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state: ) => ({
        profile: state.profilePage.profile
    }
);

export default connect(mapStateToProps, {setUserProfile});