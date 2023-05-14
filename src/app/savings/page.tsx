'use client'

import { SavingsFormHorizontal } from '@/components/savings-form-horizontal /SavingsFormHorizontal'
import * as React from 'react'

export default function Transactions(): React.ReactNode {

  const [values, setValues] = React.useState({})
 
  const handleSubmit = (data) => {
    setValues(data)
  }

  return (
    <>
      <SavingsFormHorizontal onSubmitInvestment={handleSubmit}/>
      <code>{ JSON.stringify(values) }</code>
    </>
  )
}