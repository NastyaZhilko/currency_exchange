import React, {useState} from 'react'
import style from './Main.module.css'
import Card from "../Card/Card";
import Account, {AccountPropsType} from "../Account/Account";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider, useDrop} from "react-dnd";
import {ItemTypes} from "../../constants/constants";
import account from "../Account/Account";


const accounts: AccountPropsType[] = [
    {id: 1, currency: 'BYN', title: 'Текущий счет', sum: 777.25},
    {id: 2, currency: 'USD', title: 'Валютный счет', sum: 888},
    {id: 3, currency: 'RYB', title: 'Чужой счет', sum: 555.23}

]

const Main = () => {
    const [basket, setBasket] = useState<AccountPropsType[]>([])
    const [{isOver}, drop] = useDrop(() => ({
        accept: ItemTypes.ACCOUNT,
        drop: () => (item: AccountPropsType) => setBasket((basket) =>
            !basket.includes(item) ? [...basket, item] : basket),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }))
    return <div>
        <div className={style.main}>
            {/*   <Account
                id={1}
                currency="BYN"
                title="Текущий счет"
                sum={777.52}
            />
            <Card/>*/}
            {accounts.map(account => <Account draggable id={account.id} title={account.title}
                                              currency={account.currency}
                                              sum={account.sum}/>)}
        </div>

        <div className={style.basket} ref={drop}>
            {basket.map(account => <Account draggable id={account.id} title={account.title} currency={account.currency}
                                            sum={account.sum}/>)}
            {isOver && <div>Drop Here!</div>}
        </div>


    </div>

}

export default Main
