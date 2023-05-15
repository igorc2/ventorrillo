'use client'

import { IInvestment, SavingsFormHorizontal } from '@/components/savings-form-horizontal /SavingsFormHorizontal'
import * as React from 'react'

export default function Transactions(): React.ReactNode {

  const [values, setValues] = React.useState({})
 
  const handleSubmit = (investment: IInvestment) => {
    setValues(investment)
  }

  return (
    <>
      <SavingsFormHorizontal onSubmitInvestment={handleSubmit}/>
      <code>{ JSON.stringify(values) }</code>
    </>
  )
}