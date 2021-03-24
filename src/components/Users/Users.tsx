import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersType} from "../../Redux/store";
import {NavLink} from "react-router-dom";

type PropsType = {
    totalUsersCount: number,
    pageSize: number
    currentPage: number
    users: Array<UsersType>
    onPageChanged: (p: number) => void
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
}

let Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ""}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile' + u.id}>
                    <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                </div>
            <div>
                {u.followed ? <button onClick={() => {
                        props.follow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Follow</button>}
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
