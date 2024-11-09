import React from "react";
import PercentileChart from "./PercentileChart";
import Image from "next/image";
import chart from '../assets/chart.png'

const ComparisonGraph = ({ percentile }: any) => {
  return (
    <div className="p-5 border rounded-md flex flex-col gap-5">
      <h1 className="font-bold">Comparison Graph</h1>
      <div className="flex justify-between items-center">
        <p className="w-[75%]">
          You scored {percentile}% percentile which is lower than the average
          percentile 72% of all the engineers who took this assessment.
        </p>
        <div className="bg-slate-100 p-4 rounded-full">
          <Image src={chart} alt="trophy" className="w-6" />
        </div>
      </div>
      <PercentileChart mypercentile={percentile} />
    </div>
  );
};

export default ComparisonGraph;
