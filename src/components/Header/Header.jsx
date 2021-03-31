import React from 'react'
import logo from '../../logo.png'
import Navigation from './Navigation'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className='header'>
            <div className={styles.wrapper}>
                <div className={styles.logoImg}>
                    <img src={logo} alt='logo'/>
                </div>

                <div className={styles.headline}>
                    Training social network
                </div>
                <Navigation />
            </div>
        </div>
    )
}

export default Header