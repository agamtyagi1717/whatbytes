import React from "react";
import CircularBar from "./CircularBar";

const QuestionAnalysis = ({marks}: any) => {
  return (
    <div className="border rounded-md p-5 flex flex-col gap-5 items-center">
      <div className="flex justify-between font-bold w-full">
        <h1>Question Analysis</h1>
        <p className="text-blue-900">{marks}/15</p>
      </div>
      <p>
        <span className="font-semibold">
          You scored {marks} questions correct out of 15
        </span>
        . {marks < 15 ? <>However it still needs improvements</> : <>Congrats 🥳</>}
      </p>
      <CircularBar marks={marks}/>
    </div>
  );
};

export default QuestionAnalysis;
