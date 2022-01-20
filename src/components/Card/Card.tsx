import React from 'react';
import style from './Card.module.css';
import helper from '../../styles/helpers/typography.module.css';

const Card = () => {

    return <div className={style.container}>
        <div className={style.card}>
            <div className={style.header}>
                <div>
                    <div className={helper.title}>С карты</div>
                    <div className={style.description}>Любого банка</div>
                </div>
                <div></div>
            </div>
            <div className={style.input}>
                <label>
                    <div className={style.input_Header}>Номер карты</div>
                    <input type='tel' placeholder='0000 0000 0000 0000 ' autoComplete="off"/>
                </label>
            </div>
        </div>
    </div>
}

export default Card;