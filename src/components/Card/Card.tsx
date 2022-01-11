import React from 'react'
import style from './Card.module.css'

const Card = () => {

    return <div className={style.container}>
        <div className={style.card}>
            <div className={style.card_Header}>
                <div>
                    <div className={style.card_Title}>С карты</div>
                    <div className={style.card_Description}>Любого банка</div>
                </div>
                <div></div>
            </div>
            <div className={style.card_Input}>
                <label>
                    <div className={style.input_Header}>Номер карты</div>
                    <input type='tel' placeholder='0000 0000 0000 0000 ' autoComplete="off"/>
                </label>
            </div>
        </div>
    </div>
}

export default Card