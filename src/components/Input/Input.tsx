import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from "./Input.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputPropsType = DefaultInputPropsType & {
    value: string | number
    onChange?: (value: string) => void
    placeholder: string
    error?: string
    spanClassName?: string
    color: string
};
const Input: React.FC<InputPropsType> = (
    {
        value,
        onChange,

        placeholder,
        error,
        className,
        spanClassName,
        color
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e); // то передать ему е (поскольку onChange не обязателен)

        onChange && onChange(e.currentTarget.value);
    }

    const finalSpanClassName = `${style.error} ${spanClassName ? spanClassName : ""}`;
    const finalInputClassName = `${error ? style.errorInput : style.superInput} ${className}`; // need to fix with (?:) and s.superInput
    return (
        <>
            <input style={{backgroundColor: 'color'}}
                   type={"text"}
                   onChange={onChangeCallback}
                   placeholder={placeholder}
                   className={finalInputClassName}
                   color={color}
                   value={value}
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </>
    );
}

export default Input;