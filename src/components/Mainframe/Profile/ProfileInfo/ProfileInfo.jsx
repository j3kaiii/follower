import React from 'react'
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                Do u want to tell something about you?
            </div>
            <div className={styles.foto}>
                <img src="https://img5.goodfon.ru/wallpaper/nbig/b/f4/iron-man-toni-stark-zheleznyi-chelovek-mark-3.jpg" alt="my_foto"/>
            </div>

        </div>
    )
}

export default ProfileInfo