import React from 'react'
import { createContext } from 'react'
const LocaleContext = React.createContext({ currency: { symbol: 'AZN', digits: 2 } })

export default LocaleContext