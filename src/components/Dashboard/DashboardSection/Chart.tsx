import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sty",
    uv: 4000,
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

// const getIntroOfPage = (label) => {

//   }
//   return "";
// };

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="custom-tooltip">
//         <p className="label">{`${label} : ${payload[0].value}`}</p>
//         <p className="intro">{getIntroOfPage(label)}</p>
//         <p className="desc">Anything you want can be displayed here.</p>
//       </div>
//     );
//   }

//   return null;
// };

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  render() {
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* content={<CustomTooltip />} */}
          <Bar dataKey="uv" barSize={10} fill="#B0BABF" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
