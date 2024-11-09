import React from "react";

const ProgressBar = ({ progress, bgcolor, tcolor }: any) => {
  return (
    <div className="flex gap-10 items-center">
      <div className={`w-full ${bgcolor} bg-opacity-30 rounded-full h-3`}>
        <div
          className={`${bgcolor} h-3 rounded-full transition-all duration-300`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className={`font-bold ${tcolor}`}>{progress}%</p>
    </div>
  );
};

export default ProgressBar;
