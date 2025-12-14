import './CounterButtons.css'
function CounterButtons({ typeOfButton, textOnButton, idOfButton, nameOfButton, valueOfButton, onClickOfButton, disabled }) {
   return (
       <button
       type={typeOfButton}
       id={idOfButton}
       name={nameOfButton}
       value={valueOfButton}
       onClick={onClickOfButton}
       disabled={disabled}
       >
           {textOnButton}
       </button>
   )
}

export default CounterButtons;



