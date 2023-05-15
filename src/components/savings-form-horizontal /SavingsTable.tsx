"use client"

import * as React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../transations-table/DataTable";
import { IInvestment } from "./SavingsFormHorizontal";

const columnHelper = createColumnHelper<IInvestment>();

const columns = [
  columnHelper.accessor("initialInvestmentValue", {
    cell: (info) => info.getValue(),
    header: "To convert",
    meta: {
      isNumeric: true
    }
  }),
  columnHelper.accessor("createdAt", {
    cell: (info) => info.getValue(),
    header: "Into"
  }),
  columnHelper.accessor("category", {
    cell: (info) => info.getValue(),
    header: "Multiply by",
    meta: {
      isNumeric: true
    }
  })
];

interface ITransactionsTableProps {
  investments: IInvestment[]
}

export function TransactionsTable({ investments } : ITransactionsTableProps) {
  return (
    <DataTable columns={columns} data={investments} />
  )
}