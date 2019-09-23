import React from 'react'
import { AdaptProvider } from '../components'

const Wrapper = ({ children }) => {
  return <AdaptProvider>{children}</AdaptProvider>
}

export default Wrapper
