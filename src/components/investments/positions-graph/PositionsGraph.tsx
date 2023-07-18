"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";
import { ResponsiveLine } from "@nivo/line";
import { InvestmentPosition } from "@prisma/client";

const data = [
  {
    id: "japan",
    color: "hsl(104, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 164,
      },
      {
        x: "helicopter",
        y: 25,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(267, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 144,
      },
      {
        x: "helicopter",
        y: 232,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(78, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 151,
      },
      {
        x: "helicopter",
        y: 294,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(53, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 284,
      },
      {
        x: "helicopter",
        y: 53,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(134, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 154,
      },
      {
        x: "helicopter",
        y: 215,
      },
    ],
  },
];
interface PositionsGraphProps {
  positions: InvestmentPosition[];
}

export const PositionsGraph: React.FC<PositionsGraphProps> = ({
  positions,
}) => {
  return (
    <Box
      h={"350px"}
      width="100%"
      bg={useColorModeValue("white", "gray.700")}
      borderRadius="lg"
      p={8}
      mb={8}
      color={useColorModeValue("gray.700", "whiteAlpha.900")}
      shadow="base"
    >
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor", modifiers: [] }}
        pointLabelYOffset={-12}
        areaOpacity={0.15}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};
