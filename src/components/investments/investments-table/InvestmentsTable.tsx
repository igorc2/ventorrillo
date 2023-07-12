"use client"

import * as React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "@/components/data-table";
import { Investment, InvestmentType } from "@prisma/client";

type InvestmentColumn = {
  name: string
  investedValue: string
  netValue: string
  createdAt: string
  type: InvestmentType
}

const columnHelper = createColumnHelper<InvestmentColumn>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: "Name",
  }),
  columnHelper.accessor("type", {
    cell: (info) => info.getValue(),
    header: "Type",
  }),
  columnHelper.accessor("createdAt", {
    cell: (info) => info.getValue(),
    header: "Invested at",
  }),
  columnHelper.accessor("investedValue", {
    cell: (info) => info.getValue(),
    header: "Invested value",
    meta: {
      isNumeric: true
    }
  }),
  columnHelper.accessor("netValue", {
    cell: (info) => info.getValue(),
    header: "Net value",
    meta: {
      isNumeric: true
    }
  }),
];

interface InvestmentTableProps {
  investments: Investment[]
}

export const InvestmentsTable: React.FC<InvestmentTableProps> = ({investments}) => {

  const data = investments.map((investment) => ({
    name: investment.name,
    type: investment.type,
    createdAt: investment.createdAt.toISOString(),
    investedValue: investment.investedValue.toString(),
    netValue: investment.netValue.toString(),
  }))
  return (
    <DataTable columns={columns} data={data} />
  )
}