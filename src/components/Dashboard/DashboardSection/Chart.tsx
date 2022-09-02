import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Bottom from "assets/dashboard/Bottom.png";

const data = [
  {
    name: "Sty",
    uv: 5300,
    amt: 2400,
    id: 1,
  },
  {
    name: "Lut",
    uv: 3000,
    amt: 2210,
    id: 2,
  },
  {
    name: "Mar",
    uv: 2000,
    amt: 2290,
    id: 3,
  },
  {
    name: "Kwi",
    uv: 2780,
    amt: 2000,
    id: 4,
  },
  {
    name: "Maj",
    uv: 1890,
    amt: 2181,
    id: 5,
  },
  {
    name: "Cze",
    uv: 2390,
    amt: 2500,
    id: 6,
  },
  {
    name: "Lip",
    uv: 3490,
    amt: 2100,
    id: 7,
  },
  {
    name: "Sie",
    uv: 3490,
    amt: 2100,
    id: 8,
  },
  {
    name: "Wrz",
    uv: 3490,
    amt: 2100,
    id: 9,
  },
  {
    name: "Paź",
    uv: 3490,
    amt: 2100,
    id: 10,
  },
  {
    name: "Lis",
    uv: 3490,
    amt: 2100,
    id: 11,
  },
  {
    name: "Gru",
    uv: 3490,
    amt: 2100,
    id: 12,
  },
];

const CustomTooltip = (position: any) => {
  const { active, payload } = position;
  const windowWidth = window.innerWidth;

  if (active && payload && payload.length) {
    return (
      <>
        <div className="custom-tooltip">
          <p style={{ display: windowWidth > 576 ? "none" : "block" }}>
            {payload[0].payload.name}
          </p>
          <p className="label">{payload[0].value}</p>
        </div>
        <img src={Bottom} alt="" style={{ position: "absolute", bottom: -5 }} />
      </>
    );
  }
  return null;
};

export const Chart = () => {
  const [posData, setposData] = useState<any>({});
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 15,
        }}
        barSize={32}
        barGap={1}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: "1.2rem" }}
          stroke="#9AA6AC"
        />
        <YAxis
          tick={{ fontSize: "1.2rem" }}
          axisLine={false}
          tickLine={false}
          tickCount={6}
          stroke="#9AA6AC"
        />
        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 53,
            height: 28,
            fontSize: 12,
            color: "#fff",
            background: "#303940",
            outline: "none",
            borderRadius: 4,
          }}
          position={{
            x: posData.width < 24 ? posData.x - 17 : posData.x - 11,
            y: posData.y - 40,
          }}
          cursor={false}
        />

        <Bar
          onMouseEnter={(position) => {
            setposData(position);
            setActiveIndex(position.id - 1);
          }}
          dataKey="uv"
          radius={[4, 4, 0, 0]}
        >
          {data.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={index === activeIndex ? "#43BE8D" : "#B0BABF"}
              key={entry.id}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
