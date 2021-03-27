import React from "react"
import styles from "./Navigation.module.css"

const Navigation = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li>Profile</li>
                <li>Dialogs</li>
                <li>Users</li>
            </ul>
        </div>
    )
}

export default Navigation