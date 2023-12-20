import React from "react";
import Blood from "../../assets/blood.avif";
import { Navbar } from "../navbar";
import "./index.css";

export const Landing = () => {
  return (
    <div className="landing">
      <Navbar />
      <div className="main">
        <div className="text-section">
          <h1 className="maintext">OncoZero.AI</h1>
          <p className="description">
            Это искусственный интеллект в области онкогематологии для
            автоматизированной диагностики злокачественных заболеваний крови и
            лимфатической ткани
          </p>
        </div>
        <img src={Blood} alt="Blood" className="image" />
      </div>
    </div>
  );
};
