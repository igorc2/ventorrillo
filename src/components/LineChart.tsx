"use client";

import { ResponsiveLine } from "@nivo/line";
import { mockLineData } from "../data/mockData";

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
      {
        x: "boat",
        y: 288,
      },
      {
        x: "train",
        y: 214,
      },
      {
        x: "subway",
        y: 92,
      },
      {
        x: "bus",
        y: 50,
      },
      {
        x: "car",
        y: 271,
      },
      {
        x: "moto",
        y: 38,
      },
      {
        x: "bicycle",
        y: 98,
      },
      {
        x: "horse",
        y: 147,
      },
      {
        x: "skateboard",
        y: 201,
      },
      {
        x: "others",
        y: 101,
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
      {
        x: "boat",
        y: 287,
      },
      {
        x: "train",
        y: 260,
      },
      {
        x: "subway",
        y: 104,
      },
      {
        x: "bus",
        y: 261,
      },
      {
        x: "car",
        y: 67,
      },
      {
        x: "moto",
        y: 201,
      },
      {
        x: "bicycle",
        y: 214,
      },
      {
        x: "horse",
        y: 157,
      },
      {
        x: "skateboard",
        y: 283,
      },
      {
        x: "others",
        y: 76,
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
      {
        x: "boat",
        y: 59,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "subway",
        y: 147,
      },
      {
        x: "bus",
        y: 279,
      },
      {
        x: "car",
        y: 110,
      },
      {
        x: "moto",
        y: 279,
      },
      {
        x: "bicycle",
        y: 17,
      },
      {
        x: "horse",
        y: 130,
      },
      {
        x: "skateboard",
        y: 45,
      },
      {
        x: "others",
        y: 157,
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
      {
        x: "boat",
        y: 198,
      },
      {
        x: "train",
        y: 23,
      },
      {
        x: "subway",
        y: 217,
      },
      {
        x: "bus",
        y: 269,
      },
      {
        x: "car",
        y: 98,
      },
      {
        x: "moto",
        y: 121,
      },
      {
        x: "bicycle",
        y: 271,
      },
      {
        x: "horse",
        y: 161,
      },
      {
        x: "skateboard",
        y: 62,
      },
      {
        x: "others",
        y: 261,
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
      {
        x: "boat",
        y: 259,
      },
      {
        x: "train",
        y: 296,
      },
      {
        x: "subway",
        y: 194,
      },
      {
        x: "bus",
        y: 68,
      },
      {
        x: "car",
        y: 23,
      },
      {
        x: "moto",
        y: 264,
      },
      {
        x: "bicycle",
        y: 129,
      },
      {
        x: "horse",
        y: 175,
      },
      {
        x: "skateboard",
        y: 261,
      },
      {
        x: "others",
        y: 54,
      },
    ],
  },
];

const LineChart = () => {
  return (
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
  );
};

export default LineChart;
