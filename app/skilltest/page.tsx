"use client";

import React, { useState } from "react";
import htmlIcon from "../assets/html_icon.png";
import trophy from "../assets/trophy.png";
import notepad from "../assets/notepad.png";
import checkmark from "../assets/checkmark.png";
import Image from "next/image";
import SyllabusAnalysis from "../components/SyllabusAnalysis";
import QuestionAnalysis from "../components/QuestionAnalysis";
import ComparisonGraph from "../components/ComparisonGraph";

interface FormErrors {
  rank?: string;
  percentile?: string;
  marks?: string;
}

const Page = () => {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(100);
  const [marks, setMarks] = useState(15);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<FormErrors>({});

  const handleUpdateClick = () => {
    setShowModal(true);
    setError({});
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const updatedRank = formData.get("rank") as string;
    const updatedPercentile = formData.get("percentile") as string;
    const updatedMarks = formData.get("marks") as string;

    const errors: FormErrors = {};

    if (!updatedRank) errors.rank = "Rank is required.";
    if (!updatedPercentile) errors.percentile = "Percentile is required.";
    if (!updatedMarks) errors.marks = "Marks are required.";

    if (parseInt(updatedPercentile) < 0 || parseInt(updatedPercentile) > 100) {
      errors.percentile = "Percentile must be between 0 and 100.";
    }

    if (parseInt(updatedMarks) < 0 || parseInt(updatedMarks) > 15) {
      errors.marks = "Marks must be between 0 and 15.";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }
    setRank(parseInt(updatedRank));
    setPercentile(parseInt(updatedPercentile));
    setMarks(parseInt(updatedMarks));
    setShowModal(false);
  };

  return (
    <div className="sm:p-10 p-6 w-full">
      <h1 className="mb-8">Skill Test</h1>

      <div className="grid gap-4 lg:grid-cols-5 grid-cols-1">
        <div className="lg:col-span-3 flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row gap-3 p-5 justify-between items-center border rounded-md">
            <div className="flex md:gap-8 gap-3 items-center">
              <Image className="w-12" src={htmlIcon} alt="html" />
              <div>
                <h1 className="font-bold">Hyper Text Markup Language</h1>
                <p>
                  Questions: 08 | Duration: 15mins | Submitted on 5 June 2021
                </p>
              </div>
            </div>
            <button
              className="px-4 py-1 rounded-md bg-blue-900 text-white"
              onClick={handleUpdateClick}
            >
              Update
            </button>
          </div>

          <div className="p-5 border rounded-md">
            <h1 className="font-bold">Quick Statistics</h1>

            <div className="flex p-5 justify-between flex-col lg:flex-row gap-10">
              <div className="flex items-center justify-between gap-5">
                <div className="bg-slate-100 p-4 rounded-full">
                  <Image src={trophy} alt="trophy" className="w-6" />
                </div>
                <div className="sm:text-left text-right">
                  <p className="font-bold">{rank}</p>
                  <p className="font-thin">YOUR RANK</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-5">
                <div className="bg-slate-100 p-4 rounded-full">
                  <Image src={notepad} alt="trophy" className="w-6" />
                </div>
                <div className="sm:text-left text-right">
                  <p className="font-bold">{percentile}%</p>
                  <p className="font-thin">PERCENTILE</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-5">
                <div className="bg-slate-100 p-4 rounded-full">
                  <Image src={checkmark} alt="trophy" className="w-6" />
                </div>
                <div className="sm:text-left text-right">
                  <p className="font-bold">{marks}/15</p>
                  <p className="font-thin">CORRECT ANSWERS</p>
                </div>
              </div>
            </div>
          </div>

          <ComparisonGraph percentile={percentile} />
        </div>
        <div className="lg:col-span-2 flex flex-col gap-8">
          <SyllabusAnalysis />
          <QuestionAnalysis marks={marks} />
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md flex flex-col gap-10 max-w-[800px]">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-xl mb-4">Update scores</h2>
              <Image alt="html" src={htmlIcon} className="w-8" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col gap-3 md:flex-row justify-between md:items-center">
                <label htmlFor="rank">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-900 text-white rounded-full mr-4">
                    1
                  </div>
                  Update your <span className="font-bold">Rank</span>
                </label>
                <div>
                  <input
                    type="number"
                    id="rank"
                    name="rank"
                    defaultValue={rank}
                    className="w-full md:w-[300px]  p-2 border rounded-md"
                  />
                  {error.rank && (
                    <p className="text-red-500 text-sm">{error.rank}</p>
                  )}
                </div>
              </div>
              <div className="mb-4 flex flex-col gap-3 md:flex-row justify-between md:items-center">
                <label htmlFor="rank">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-900 text-white rounded-full mr-4">
                    2
                  </div>
                  Update your <span className="font-bold">Percentile</span>
                </label>
                <div>
                  <input
                    type="number"
                    id="percentile"
                    name="percentile"
                    defaultValue={percentile}
                    className="w-full md:w-[300px]  p-2 border rounded-md"
                  />
                  {error.percentile && (
                    <p className="text-red-500 text-sm">{error.percentile}</p>
                  )}
                </div>
              </div>
              <div className="mb-4 flex flex-col gap-3 md:flex-row justify-between md:items-center">
                <label htmlFor="rank">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-900 text-white rounded-full mr-4">
                    3
                  </div>
                  Update your{" "}
                  <span className="font-bold">current Score(out of 15)</span>
                </label>
                <div>
                <input
                  type="number"
                  id="marks"
                  name="marks"
                  defaultValue={marks}
                  className="w-full md:w-[300px]  p-2 border rounded-md"
                />
                {error.marks && (
                  <p className="text-red-500 text-sm">{error.marks}</p>
                )}
                </div>
              </div>
              <div className="flex justify-end gap-5 font-semibold">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 border-2 border-blue-900 text-blue-900 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-900 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
