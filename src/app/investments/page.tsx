import getInvestments from '@/actions/getInvestments';
import { InvestmentForm } from '@/components/investments/investment-form';
import { InvestmentsTable } from '@/components/investments/investments-table';
import { PositionForm } from '@/components/investments/position-form';
import * as React from 'react'

export default async function Transactions() {

  const investments = await getInvestments()

  return (
    <>
      <InvestmentForm investments={investments} />
      <PositionForm investments={investments} />
      <InvestmentsTable investments={investments} />
    </>
  )
}