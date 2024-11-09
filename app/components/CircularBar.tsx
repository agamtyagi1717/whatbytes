"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import target from '../assets/target.png'
import Image from "next/image";

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularBar = ({ marks }: any) => {
  const maxMarks = 15;

  const data = {
    datasets: [
      {
        data: [marks, maxMarks - marks],
        backgroundColor: ["rgb(30 58 138)", "#e0e0e0"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="relative w-[200px]">
      <Doughnut data={data} options={options} />
      <Image
        alt="target"
        src={target}
        className="w-16 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default CircularBar;
