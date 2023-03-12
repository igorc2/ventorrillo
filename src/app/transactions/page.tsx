import TransactionForm from '@/components/TransactionForm'
import TransactionFormHorizontal from '@/components/transactions-form-horizontal/TransactionsFormHorizontal'
import { TransactionsTable } from '@/components/transations-table/TransactionsTable'
import * as React from 'react'

export default function Transactions(): React.ReactNode {

  return (
    <>
      <TransactionFormHorizontal />
      <TransactionsTable />
    </>
  )
}