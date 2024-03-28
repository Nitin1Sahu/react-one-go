import React from 'react'
import '../styles/inputbox.css';
const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisable = false

}) => {
    const amountInputId = React.useId();
    return (
        <div className='container'>
            <div className='container__label'>
                <label htmlFor={amountInputId}>{label}</label>
                <label>Currency Type</label>
            </div>
            <div className='container__input'>
                <input id={amountInputId} type="number" disabled={amountDisabled} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
                <select value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>

                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox