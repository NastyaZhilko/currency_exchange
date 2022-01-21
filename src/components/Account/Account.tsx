import React, {FC} from 'react';
import style from './Account.module.css';
import Circle, {CommonCircleType} from "./components/Circle/Circle";

export type AccountPropsType = CommonCircleType & {
    sum: number
}

const Account: FC<AccountPropsType> = ({title, description, color, sum}) => {

    return (
        <div className={style.container}>
            <Circle description={description}
                    title={title}
                    color={color}
                    sum={sum}
            />
        </div>

    )
}

export default Account;