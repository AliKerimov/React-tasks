import React from 'react'
import LocaleContext from './context/LocaleContext'
import { useContext } from 'react'
function Price(props){
  const {currency}=useContext(LocaleContext)
  return `${(props.value).toFixed(currency.digits)} ${currency.symbol}`
}
const task4 = () => {
  return (
      <LocaleContext.Provider value={{ currency: { symbol: 'AZN', digits: 2 } }}>
    <div>
      <h1>Task4</h1>
          Total Amount: <Price value={5} />
    </div>
      </LocaleContext.Provider>
  )
}

export default task4