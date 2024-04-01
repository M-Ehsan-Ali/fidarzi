import React from "react";

const LearnMoreButtton = ({ onClick }) => {
  return (
    <div className="row justify-content-center text-center mb-5">
      <div className="col-xl-4">
        <button className="btn" onClick={onClick}>
          Learn more about Fidarzi Product Suite
        </button>
      </div>
    </div>
  );
};

export default LearnMoreButtton;
