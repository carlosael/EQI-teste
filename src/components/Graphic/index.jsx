import React from "react";
import { BarChart, Bar, XAxis } from "recharts";

import withAportIcon from "../../assets/withAport.svg";
import withoutAportIcon from "../../assets/withoutAport.svg";
import "./style.css";

const Graphic = ({ simulationData }) => {
  const data = [
    {
      name: "0",
      x: simulationData.graficoValores.semAporte[0],
      y: simulationData.graficoValores.comAporte[0],
    },
    {
      name: "1",
      x: simulationData.graficoValores.semAporte[1],
      y: simulationData.graficoValores.comAporte[1],
    },
    {
      name: "2",
      x: simulationData.graficoValores.semAporte[2],
      y: simulationData.graficoValores.comAporte[2],
    },
    {
      name: "3",
      x: simulationData.graficoValores.semAporte[3],
      y: simulationData.graficoValores.comAporte[3],
    },
    {
      name: "4",
      x: simulationData.graficoValores.semAporte[4],
      y: simulationData.graficoValores.comAporte[4],
    },
    {
      name: "5",
      x: simulationData.graficoValores.semAporte[5],
      y: simulationData.graficoValores.comAporte[5],
    },
    {
      name: "6",
      x: simulationData.graficoValores.semAporte[6],
      y: simulationData.graficoValores.comAporte[6],
    },
    {
      name: "7",
      x: simulationData.graficoValores.semAporte[7],
      y: simulationData.graficoValores.comAporte[7],
    },
    {
      name: "8",
      x: simulationData.graficoValores.semAporte[8],
      y: simulationData.graficoValores.comAporte[8],
    },
    {
      name: "9",
      x: simulationData.graficoValores.semAporte[9],
      y: simulationData.graficoValores.comAporte[9],
    },
    {
      name: "10",
      x: simulationData.graficoValores.semAporte[10],
      y: simulationData.graficoValores.comAporte[10],
    },
  ];

  return (
    <>
      {simulationData && (
        <>
          <BarChart width={760} height={200} data={data}>
            <XAxis dataKey="name" />
            <Bar dataKey="x" stackId="a" fill="#000" />
            <Bar dataKey="y" stackId="a" fill="rgb(139, 131, 56)" />
          </BarChart>
          <div className="time">
            <p>Tempo (meses)</p>
          </div>
          <div className="icons">
            <div className="icons-text">
              <img src={withAportIcon} alt="with aport icon" />
              <p>Com aporte</p>
            </div>
            <div className="icons-text">
              <img src={withoutAportIcon} alt="with aport icon" />
              <p>Sem aporte</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Graphic;
