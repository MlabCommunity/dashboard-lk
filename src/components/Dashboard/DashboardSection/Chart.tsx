import React, { useState } from "react";
import {
  BarChart,
  Bar,
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
  },
  {
    name: "Lut",
    uv: 3000,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    amt: 2290,
  },
  {
    name: "Kwi",
    uv: 2780,

    amt: 2000,
  },
  {
    name: "Maj",
    uv: 1890,

    amt: 2181,
  },
  {
    name: "Cze",
    uv: 2390,

    amt: 2500,
  },
  {
    name: "Lip",
    uv: 3490,

    amt: 2100,
  },
  {
    name: "Sie",
    uv: 3490,

    amt: 2100,
  },
  {
    name: "Wrz",
    uv: 3490,

    amt: 2100,
  },
  {
    name: "Paź",
    uv: 3490,

    amt: 2100,
  },
  {
    name: "Lis",
    uv: 3490,

    amt: 2100,
  },
  {
    name: "Gru",
    uv: 3490,

    amt: 2100,
  },
];

const CustomTooltip = (position: any) => {
  // console.log('CustomTooltip -> data', data)
  const { active, payload } = position;
  if (active && payload && payload.length) {
    return (
      <>
        <div className="custom-tooltip">
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

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 25,
          right: 30,
          left: 30,
          bottom: 15,
        }}
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
            height: 24,
            borderRadius: 4,
            background: "#303940",
            right: 0,
            fontSize: 12,
            color: "#fff",
          }}
          position={{ x: posData.x - 14, y: posData.y - 40 }}
          cursor={false}
        />

        <Bar
          onMouseOver={(position) => {
            setposData(position);
          }}
          dataKey="uv"
          barSize={24}
          fill="#B0BABF"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
