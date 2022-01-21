import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
    return <div className={style.container}>
        <div><a href="Accounts">Accounts</a></div>
        <div><a href="Cards">Cards</a></div>
        <div><a href="Home">Home</a></div>
        <div><a href="Transactions">Transactions</a></div>
        <div><a href="Profile">Profile</a></div>
    </div>
}

export default Footer