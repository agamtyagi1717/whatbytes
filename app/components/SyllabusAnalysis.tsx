import React from "react";
import ProgressBar from "./ProgressBar";

const SyllabusAnalysis = () => {
  return (
    <div className="w-full p-5 border rounded-md flex flex-col gap-6">
      <h1 className="font-bold">Syllabus Wise Analysis</h1>

      <div className="">
        <p className="mb-4">HTML Tools, Forms, History</p>
        <ProgressBar progress={80} bgcolor="bg-blue-600" tcolor="text-blue-600"/>
      </div>
      <div className="">
        <p className="mb-4">Tags & References in HTML</p>
        <ProgressBar progress={60} bgcolor="bg-orange-600" tcolor="text-orange-600"/>
      </div>
      <div className="">
        <p className="mb-4">Tables & References in HTML</p>
        <ProgressBar progress={24} bgcolor="bg-red-600" tcolor="text-red-600"/>
      </div>
      <div className="">
        <p className="mb-4">Tables & CSS Basics</p>
        <ProgressBar progress={96} bgcolor="bg-green-600" tcolor="text-green-600"/>
      </div>
    </div>
  );
};

export default SyllabusAnalysis;
