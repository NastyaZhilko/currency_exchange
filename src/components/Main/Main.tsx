import React from 'react'
import style from './Main.module.css'
import Card from "../Card/Card";
import Account from "../Account/Account";

const Main = () => {

    return <div className={style.main}>
        <Account
            currency="BYN"
            title="Текущий счет"
            sum={777.52}
        />
        <Card/>
    </div>
}
export default Main