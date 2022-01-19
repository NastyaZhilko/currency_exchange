import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from "./Input.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type InputPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    value?: string
    onChange?: (value: string) => void
    placeholder?: string
    error?: string
    spanClassName?: string
};
const Input: React.FC<InputPropsType> = (
    {
        value,
        onChange,

        placeholder,
        error,
        className, spanClassName
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e); // то передать ему е (поскольку onChange не обязателен)

        onChange && onChange(e.currentTarget.value);
    }

    const finalSpanClassName = `${style.error} ${spanClassName ? spanClassName : ""}`;
    const finalInputClassName = `${error?style.errorInput:style.superInput} ${className}`; // need to fix with (?:) and s.superInput
    return (
        <>
            <input
                type={"text"}
                onChange={onChangeCallback}
                placeholder={"placeholder"}
                className={finalInputClassName}
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </>
    );
}

export default Input;