import React from "react";
import { BarChart, Bar, XAxis } from "recharts";
import ValuesContext from "../../contexts/ValuesContext";
import { useContext } from "react";

const Graphic = () => {
  const simulationData = useContext(ValuesContext);

  const data = [
    { name: "0", x: 1000, y: 1000 },
    { name: "1", x: 1103.2737397822002, y: 1003.273739782199, z: 73 },
    { name: "2", x: 13, y: 15, z: 32 },
    { name: "3", x: 44, y: 35, z: 23 },
    { name: "4", x: 35, y: 45, z: 20 },
    { name: "5", x: 62, y: 25, z: 29 },
    { name: "6", x: 37, y: 17, z: 61 },
    { name: "7", x: 28, y: 32, z: 45 },
    { name: "8", x: 19, y: 43, z: 93 },
    { name: "9", x: 19, y: 43, z: 93 },
    { name: "10", x: 19, y: 43, z: 93 },
    { name: "11", x: 19, y: 43, z: 93 },
    { name: "12", x: 19, y: 43, z: 93 },
    { name: "13", x: 19, y: 43, z: 93 },
    { name: "14", x: 19, y: 43, z: 93 },
    { name: "15", x: 19, y: 43, z: 93 },
    { name: "16", x: 19, y: 43, z: 93 },
    { name: "17", x: 19, y: 43, z: 93 },
  ];

  return (
    <>
      <BarChart width={765} height={200} data={data}>
        <XAxis dataKey="name" />
        <Bar dataKey="x" stackId="a" fill="#000" />
        <Bar dataKey="y" stackId="a" fill="rgb(139, 131, 56)" />
      </BarChart>
      <p>Com aporte</p>
    </>
  );
};

export default Graphic;
