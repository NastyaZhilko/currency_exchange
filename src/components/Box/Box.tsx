import React, {useState} from 'react'
import style from './Box.module.css'
import Account, {AccountPropsType} from "../Account/Account";

type BoxPropsType = AccountPropsType & {
    account: boolean
    moveAccount: any

}


const accounts: AccountPropsType[] = [
    {title: 'BYN', description: 'Текущий счет', sum: 777.25, color: 'rgb(224, 26, 173)'},
    {title: 'USD', description: 'Валютный счет', sum: 888, color: 'rgb(224, 26, 173)'},
    {title: 'RYB', description: 'Чужой счет', sum: 555.23, color: 'rgb(224, 26, 173)'}

]


const Box: React.FC<BoxPropsType> = (props:BoxPropsType ) => {
    const [isOver, setIsOver] = useState(false);

    function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
        if (e.dataTransfer.types[0] === "text/plain") {
            setIsOver(true);
            e.preventDefault();
        }
    }

    function handleDrop(e: React.DragEvent<HTMLDivElement>) {
        const dataJSON = e.dataTransfer.getData("text/plain");
        let data;
        try {
            data = JSON.parse(dataJSON);
            console.log(data)
        } catch {
        }
        if (data && data.type === "account") {
            props.moveAccount();
        }
    }

    function handleDragLeave() {
        setIsOver(false);
    }

    return (
        <div className={style.container}
             style={{backgroundColor: isOver ? "#bbf" : "rgba(0,0,0,.12)"}}
             onDragOver={handleDragOver}
             onDrop={handleDrop}
             onDragLeave={handleDragLeave}>
            {props.account ?
                <Account
                    title={props.title}
                    description={props.description}
                    sum={props.sum}
                    color={props.color}/> : "Box"}
        </div>
    )
}
export default Box