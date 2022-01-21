import React from 'react';
import style from './Circle.module.css';

export type CommonCircleType = {
    title: string
    description?: string
    color: string
    sum?: number
}

const Circle: React.FC<CommonCircleType> = ({title, description, color, children, sum}) => {
    return (

        <div className={style.container}>
            <div className={style.circle} style={{backgroundColor: color}}>
                {title}
            </div>
            <div className={style.description}>{description}</div>
            <div className={style.sum}>{sum}</div>
        </div>

    )
}
export default Circle;