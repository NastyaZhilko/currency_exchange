import React, {FC} from 'react'
import style from './Account.module.css'

type AccountPropsType = {
    currency: string
    title: string
    sum: number
}

const Account: FC<AccountPropsType> = ({currency, title, sum}) => {

    return (
        <div className={style.account}>
            <div className={style.account_body}>
                <div className={style.account_currency}>{currency}</div>
            </div>
            <div className={style.account_title}>{title}</div>
            <div className={style.account_sum}>{sum}</div>
        </div>
    )
}
export default Account