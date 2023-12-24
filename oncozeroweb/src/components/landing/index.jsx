import React from "react";
import { Navbar } from '../navbar';
import "./index.css";
import liver from "../../assets/liver.png";
import logo from "../../assets/logo.png"; // Replace with your actual import path
import stat from "../../assets/gender_statistic_web_en.png";
//gender_statistic_web_en

// The individual statistic component
const StatisticItem = ({ number, text, subtext }) => (
  <div className="statistic-item">
    <div className="number">{number}</div>
    <div className="text">{text}</div>
    {subtext && <div className="subtext">{subtext}</div>}
  </div>
);

// The container for the statistics
const StatisticSection = () => {
  return (
    <div className="statistic-section">
      <div className="header">
        STROKE STATISTICS IN KAZAKHSTAN
      </div>
      <div className="statistic-container">
        <StatisticItem number="№1" text="cause of death" />
        <StatisticItem number="TOP 30" text="Kazakhstan ranks" subtext="in death statistics due to stroke" />
        <StatisticItem number="80%" text="survivors have severe disabilities" />
        <StatisticItem number="40" text="THOUSAND" subtext="stroke cases annually" />
        <StatisticItem number="52%" text="likelihood of death" />
        <StatisticItem number="5" text="THOUSAND" subtext="die during the initial 10 days" />
      </div>
    </div>
  );
};




export const Landing = () => {

  

  const boxStyle = {
    border: '1px solid #115DB7',
    padding: '30px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px auto',
    maxWidth: '900px',
    background: '#fff',
    boxShadow: '0 0 10px #115DB7'
  };

  const companyNameStyle = {
    fontSize: '84px', // Extra large font size for company name
    color: '#115DB7',
    marginBottom: '20px',
  };

  const listItemStyle = {
    fontSize: '18px', // Adjust the size as needed
    color: '#000',
    textAlign: 'left',
    width: '100%',
    color: '#115DB7',
  };

  

  
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="pt-16 flex flex-col items-center lg:flex-row">
          <div className="lg:w-1/3 lg:pr-8 xl:pr-16 mt-10 lg:mt-20 pt-10">
            <img src={liver} alt="Liver illustration" className="w-full lg:max-w-md mx-auto" />
          </div>
          <div className="lg:w-2/3 text-center lg:text-left mt-4 lg:mt-0">
            <h1 className="maintext" style={{ color: '#115DB7' }}>
              ONCOZERO.AI
            </h1>
            <p className="description" style={{ color: '#115DB7' }}>
              AI-powered software for early stroke detection for faster and more accurate treatment.
            </p>
            {/* Box with the text in matrix style */}
            
          </div>
        </div>
      </div>
      <div style={boxStyle }>
              <h2 style={companyNameStyle}>O n c o Z e r o . A I</h2>
              <p style={listItemStyle}>01 fast stroke diagnosis</p>
              <p style={listItemStyle}>02 minimisation of the human factor</p>
              <p style={listItemStyle}>03 internal ecosystem for patients’ data exchange</p>
              <p style={listItemStyle}>04 any-time remote platform access</p>
      </div>
      <StatisticSection />

      <div className="landing">
      <Navbar />
      <div className="main">
        <div className="text-section">
          <h1 className="maintext">OncoZero.AI</h1>
          <p className="description">
          Chronic infection with hepatitis B virus (HBV) or hepatitis C virus (HCV) is among the leading risk factors for HCC.
          </p>
          <p className="description"></p>
          <p className="description">
          Diagnosis of liver cancer often involves imaging tests such as ultrasound, CT scans, and MRI, along with blood tests to detect liver function and tumor markers.
          </p>
        </div>
        <img src={logo} alt="Blood" className="image" />
      </div>
    </div>
    </div>
  );
};

export default Landing;
