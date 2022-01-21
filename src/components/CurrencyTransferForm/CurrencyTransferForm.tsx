import React from 'react';
import style from './CurrencyTransferForm.module.css';
import Account from "../Account/Account";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {ReactComponent as ArrowRightSVG} from "./../../assets/svg/rightArrow.svg";

export type CurrencyTransferForm = {
    data: any
}

const CurrencyTransferForm: React.FC<CurrencyTransferForm> = ({data}) => {
    console.log(data)
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.block}>
                    <div><Account {...data[0]}/></div>
                    <Input
                        placeholder={data[0].sum}
                        color='#f0f0f0'
                    />

                </div>
                <div className={style.arrow}>
                    <ArrowRightSVG/>
                </div>
                <div className={style.block}>
                    <div><Account {...data[1]}/></div>
                    <Input
                        placeholder={data[1].sum}
                        color='#f0f0f0'
                    />
                </div>

            </div>
            <div>
                <Button text='Transfer'/>
            </div>
        </div>
    )
}
export default CurrencyTransferForm;