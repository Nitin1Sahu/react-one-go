import React from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { useState } from 'react';

const App = () => {
  const [amount, setAmount] = React.useState(0);
  const [from, setFrom] = React.useState("usd")
  const [to, setTo] = React.useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo)
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        convert();
      }}>
        <InputBox label="From" amount={amount} currencyOptions={options} onCurrencyChange={(currency) => setAmount(amount)} selectCurrency={from} onAmountChange={(amount) => setAmount(amount)} />
        <div className='btn__container'>
          <button onClick={swap}>Swap</button>
        </div>
        <InputBox label={'To'} amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency) => setTo(currency)} selectCurrency={to} ammountDisable />
        <button type='submit' className='convert__btn'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </form>
    </>
  )
}

export default App