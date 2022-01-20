import React from 'react';
import style from './Circle.module.css';

export type CommonCircleType = {
    title: string
    description?: string
    color: string
}

const Circle: React.FC<CommonCircleType> = ({title, description, color, children}) => {
    return (

        <div className={style.container}>
            <div className={style.circle} style={{backgroundColor: color}}>
                {title}
            </div>
            <div className={style.circle_children}>{description}</div>
            <div className={style.circle_children}>{children}</div>
        </div>

    )
}
export default Circle;