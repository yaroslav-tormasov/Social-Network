import React from 'react';
import styles from '../Users/Users.module.css';
import {UsersPropsType} from './UsersContainer';


let Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://lh3.googleusercontent.com/proxy/Mx25i0iYqI5Agy9v9obrB8uvTF-hTDhWKAo8GnMx2awwWQ6mM0uTVZ9y8qKDhcosooFYmS-Bio49bfxt3WsTnKYkvOwbc-GXJg_GB3gedM_ZqkS_Vf8mt3aVNHtPi3nw8AhVwtA93ReiUn-3oaU5Scm9VcU3aS72EghnRunnMcwU_sbVo7pO0pYD2o4qrRNGg4ladJCy8f6xl3rdg41kKQ',
                followed: false,
                fullName: 'Yaroslav',
                status: 'I am junior',
                location: {city: 'Samara', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: 'https://lh3.googleusercontent.com/proxy/Mx25i0iYqI5Agy9v9obrB8uvTF-hTDhWKAo8GnMx2awwWQ6mM0uTVZ9y8qKDhcosooFYmS-Bio49bfxt3WsTnKYkvOwbc-GXJg_GB3gedM_ZqkS_Vf8mt3aVNHtPi3nw8AhVwtA93ReiUn-3oaU5Scm9VcU3aS72EghnRunnMcwU_sbVo7pO0pYD2o4qrRNGg4ladJCy8f6xl3rdg41kKQ',
                followed: true,
                fullName: 'Anton',
                status: 'I am python developer',
                location: {city: 'Samara', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://lh3.googleusercontent.com/proxy/Mx25i0iYqI5Agy9v9obrB8uvTF-hTDhWKAo8GnMx2awwWQ6mM0uTVZ9y8qKDhcosooFYmS-Bio49bfxt3WsTnKYkvOwbc-GXJg_GB3gedM_ZqkS_Vf8mt3aVNHtPi3nw8AhVwtA93ReiUn-3oaU5Scm9VcU3aS72EghnRunnMcwU_sbVo7pO0pYD2o4qrRNGg4ladJCy8f6xl3rdg41kKQ',
                followed: false,
                fullName: 'Valentin',
                status: 'I am full stack developer',
                location: {city: 'Samara', country: 'Russia'}
            },
        ])
    }

    return <div>
        {
            props.users.map( u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
            <div>
                { u.followed ? <button onClick = { () => {props.follow(u.id) }} >Unfollow</button>
                    : <button onClick = { () => {props.unfollow(u.id) }}>Follow</button> }
                <button>Follow</button>
            </div>
            </span>
                <span>
               <div>{u.fullName}</div>
                    <div>{u.status}</div>
                 <span>
                     <div>{u.location.city}</div>
                     <div>{u.location.country}</div>
                 </span>
            </span>
            </div>)
        }
    </div>
}

export default Users;