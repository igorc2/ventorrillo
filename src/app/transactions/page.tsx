import getSources from '@/actions/getSources';
import getTransactionCategories from '@/actions/getTransactionCategories';
import TransactionForm from '@/components/TransactionForm'
import { TransactionFormHorizontal } from '@/components/transactions-form-horizontal/TransactionsFormHorizontal'
import { TransactionsTable } from '@/components/transations-table/TransactionsTable'
import * as React from 'react'

export default async function Transactions() {

  const sources = await getSources()
  const transactionCategories = await getTransactionCategories()

  return (
    <>
      <TransactionFormHorizontal sources={sources} transactionCategories={transactionCategories} />
      <TransactionsTable />
    </>
  )
}