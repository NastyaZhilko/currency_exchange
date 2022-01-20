import React from 'react'
import style from './Header.module.css'
import Circle from "../Account/components/Circle/Circle";

const Header = () =>{
    return <div className={style.container}>
      <Circle title='+' color='blue' description='Top up'/>
      <Circle title='+' color='blue' description='Exchange'/>
      <Circle title='+' color='blue' description='Send'/>
    </div>
}
export default Header