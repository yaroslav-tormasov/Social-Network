import React from 'react';
import styles from '../Users/Users.module.css';
import {UsersPropsType} from './UsersContainer';
import axios from "axios";
import userPhoto from '../../assets/images/user.png';


let Users = (props: UsersPropsType) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                });
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                </div>
            <div>
                {u.followed ? <button onClick={() => {
                        props.follow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Follow</button>}
                <button>Follow</button>
            </div>
            </span>
                <span>
               <div>{u.name}</div>
                    <div>{u.status}</div>
                 <span>
                     <div>{"u.location.city"}</div>
                     <div>{"u.location.country"}</div>
                 </span>
            </span>
            </div>)
        }
    </div>
}

export default Users;