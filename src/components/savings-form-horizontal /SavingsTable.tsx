"use client"

import * as React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../data-table";
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
    cell: (info) => info.getValue().toDateString(),
    header: "Into"
  }),
  columnHelper.accessor("category", {
    cell: (info) => info.getValue().value,
    header: "Multiply by",
    meta: {
      isNumeric: true
    }
  })
];

interface ISavingsTableProps {
  investments: IInvestment[]
}

export function SavingsTable({ investments } : ISavingsTableProps) {
  return (
    <DataTable columns={columns} data={investments} />
  )
}