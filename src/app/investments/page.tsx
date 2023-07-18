import getInvestments from "@/actions/getInvestments";
import getPositions from "@/actions/getPositions";
import { InvestmentForm } from "@/components/investments/investment-form";
import { InvestmentsTable } from "@/components/investments/investments-table";
import { PositionForm } from "@/components/investments/position-form";
import { PositionsGraph } from "@/components/investments/positions-graph";
import LineChart from "@/components/LineChart";
import * as React from "react";

export default async function Transactions() {
  const investments = await getInvestments();
  const positions = await getPositions();

  return (
    <>
      <InvestmentForm investments={investments} />
      <PositionForm investments={investments} />
      <PositionsGraph positions={positions} />
      <InvestmentsTable investments={investments} />
    </>
  );
}
