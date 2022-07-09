import React, { useEffect, useState } from 'react'
import '../IfoodCounter/IfoodCounter.css'
export default function IfoodCounter() {
  const [value, setValue] = useState(1)
  //css classes manager :
  const [buttonStyle, setButtonStyle] = useState('counter-button-active')

  //effects: ()=> action [monitoring object] --> if is empty [] is independent
  useEffect(()=>{
    document.getElementById('coin').innerHTML = 'R$ '+ 2.00 * value
  },[value])

  function add() {

    if (value>=0) {
      setValue (value + 1)
      setButtonStyle('counter-button-active')
    }

  }
  function sub() {
    if(value > 0){
      setValue (value - 1)
    }
    else {
      setButtonStyle('counter-button-deactive')
    }
  }

  return (
    <div className='counter-wrapper'>
      <button className={buttonStyle}
      onClick={sub}>
        -
      </button>
      <p>{value}</p>
      <button className={buttonStyle}
      onClick={add}>
        +
      </button>
      <button id='coin'>R$ 12,00</button>
    </div>
  )
}
