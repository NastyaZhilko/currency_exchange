import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonPropsType = DefaultButtonPropsType & {
    text: string
}

const Button: React.FC<ButtonPropsType> = ({text}) => {
    return (
        <button>
            {text}
        </button>
    );
}

export default Button;