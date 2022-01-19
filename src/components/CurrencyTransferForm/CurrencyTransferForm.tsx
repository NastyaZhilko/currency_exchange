import React from 'react'
import style from './CurrencyTransferForm.module.css'
import Account from "../Account/Account";
import Input from "../common/Input/Input";

export type CurrencyTransferForm = {
    data: any
}

const CurrencyTransferForm: React.FC<CurrencyTransferForm> = ({data}) => {
    return (
        <div className={style.container}>
            <div className={style.block}>
                <div> {data[0]}</div>
                <Input/>

            </div>
            <div className={style.symbol}>
                symbol
            </div>
            <div className={style.block}>
                <div> {data[1]}</div>
                <Input/>
            </div>
        </div>
    )
}
export default CurrencyTransferForm