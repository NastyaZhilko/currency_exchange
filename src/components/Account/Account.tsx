import React, {FC} from 'react'
import style from './Account.module.css'
import Draggable from "react-draggable";
import {DndProvider, useDrag} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {ItemTypes} from "../../constants/constants";

export type AccountPropsType = {
    id: number
    currency: string
    title: string
    sum: number
    draggable?: boolean
}

const Account: FC<AccountPropsType> = ({id, currency, title, sum}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.ACCOUNT,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        /*className={isDragging ? 'style.container' : ""}*/
        <div className={style.container} ref={drag}
             style={{
                 opacity: isDragging ? 0.5 : 1,
                 cursor: 'move',
             }}>
            <div className={style.account}>
                <div className={style.account_body}>
                    <div className={style.account_currency}>{currency}</div>
                </div>
                <div className={style.account_title}>
                    {title}
                </div>
                <div className={style.account_sum}>{sum}</div>
            </div>
        </div>

    )
}
export default Account