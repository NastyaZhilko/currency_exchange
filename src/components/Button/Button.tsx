import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import style from "./Button.module.css";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    text: string
}

const Button: React.FC<ButtonPropsType> = (
    {
        red, className,
        text
    }
) => {
    const finalClassName = `${red ? style.red : style.default} ${className} `;

    return (
        <button className={finalClassName}>

            {text}

        </button>
    );
}

export default Button;