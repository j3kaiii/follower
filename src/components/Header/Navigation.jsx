import React from 'react'
import styles from './Navigation.module.css'
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><NavLink to='/profile' activeClassName={styles.active} >Profile</NavLink></li>
                <li><NavLink to='/dialogs' activeClassName={styles.active} >Dialogs</NavLink></li>
                <li><NavLink to='/users' activeClassName={styles.active} >Users</NavLink></li>
            </ul>
        </div>
    )
}

export default Navigation