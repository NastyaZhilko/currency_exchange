import React from 'react'
import style from './Footer.module.css'

const Footer = () =>{
    return <div className={style.container}>
        <div><a href="Accounts">Accounts</a></div>
        <div>Cards</div>
        <div>Home</div>
        <div>Transactions</div>
        <div>Profile</div>
    </div>
}

export default Footer