import React from "react";
import { Navbar } from '../navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./index.css";
import liver from "../../assets/liver.png";
import logo from "../../assets/logo.png"; // Replace with your actual import path
import stat from "../../assets/gender_statistic_web_en.png";
import standardProcessImage from "../../assets/standart_process_web_en.png"; // Make sure the path is correct
import ourWay from "../../assets/ourWay.png";
import linkedinIcon from "../../assets/linked.png"; // Adjust path as necessary
import telegramIcon from "../../assets/telegram.png"; // Adjust path as necessary
import instagramIcon from "../../assets/insta.png"; // Adjust path as necessary
import leftArrowImage from "../../assets/leftArrow.png"; 
import rightArrowImage from "../../assets/rightArrow.png"; 

const MyComponent = () => {
  return (
    <div style = {{paddingLeft: '100px' }}className="container mx-auto px-4 reduce-bottom-padding">
      <div className="pt-16 flex flex-col items-center lg:flex-row">
        <div className="lg:w-2/5 lg:pr-8 xl:pr-16 mt-10 lg:mt-20 pt-10">
          <img src={liver} alt="Liver illustration" className="mx-auto" style={{ maxWidth: '100%', width: 'auto' }} />
        </div>
        <div className="lg:w-3/5 text-center lg:text-left mt-4 lg:mt-0">
          <h1 className="maintext" style={{ color: '#02358A', fontSize: '64px' }}>
            <OncoZeroText>OncoZero.AI</OncoZeroText>
          </h1>
          <p className="description" style={{ color: '#02358A' }}>
            AI-powered software for early stroke detection for faster and more accurate treatment.
          </p>
          {/* Additional content here */}
        </div>
      </div>
    </div>
  );
};

const OncoZeroText = ({ children }) => (
  <span style={{ fontFamily: "'Convection Condensed', sans-serif" }}>
    {children}
  </span>
);


const CustomArrow = ({ className, style, onClick, arrowDirection }) => {
  const arrowStyles = {
    ...style,
    display: 'block',
    background: `url(${arrowDirection === 'next' ? rightArrowImage : leftArrowImage}) no-repeat`,
    backgroundSize: 'contain',
    // Add other styles as needed for positioning, size, etc.
  };

  return <div className={className} style={arrowStyles} onClick={onClick} />;
};



const awardsData = [
  {
    imageSrc: logo,
    title: 'Innovative Tech Company of the Year',
    description: 'Recognized for exceptional innovation in health tech solutions.',
  },
  {
    imageSrc: logo,
    title: 'Best Startup Award',
    description: 'For outstanding achievements in the startup ecosystem.',
  },
  {
    imageSrc: logo,
    title: 'Emerging Digital Health Leader',
    description: 'Awarded for pioneering work in digital health and patient care.',
  },
  {
    imageSrc: logo,
    title: 'AI Excellence in Healthcare',
    description: 'For the development of cutting-edge AI technologies in healthcare.',
  },
  {
    imageSrc: logo,
    title: 'Tech for Good',
    description: 'Recognizing the positive impact on society through technology.',
  },
];

const AwardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow arrowDirection="next" />,
    prevArrow: <CustomArrow arrowDirection="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', backgroundColor: '#FFFFFF' }}>
      <div style={{ width: '70%' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', marginTop:'100px', fontSize:'35px' }}>AWARDS</h2>
        <Slider {...settings} style={{marginBottom:'200px'}}>
          {awardsData.map((award, index) => (
            <div key={index} style={{ padding: '10px', backgroundColor: '#02358A', color: '#FFFFFF', borderRadius: '8px' }}>
              <img src={award.imageSrc} alt={award.title} style={{ width: '100px', height: 'auto', margin: '0 auto', display: 'block' }} />
              <h3 style={{ textAlign: 'center', marginTop: '20px' }}>{award.title}</h3>
              <p style={{ textAlign: 'center' }}>{award.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};



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

// ProblemStatement component
const ProblemStatement = () => {
  const problemStyle = {
    fontSize: '48px', // Large font size for the "PROBLEM" text
    //fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '10px',
  };

  const lineStyle = {
    height: '2px',
    width: '80%',
    backgroundColor: '#FFF',
    margin: '0 auto 10px', // Center the line horizontally with margin
  };

  const descriptionStyle = {
    fontSize: '18px', // Smaller font size for the description
    color: '#FFF',
    textAlign: 'center',
    maxWidth: '800px', // Set max-width for better readability
    lineHeight: '1.5', // Line height for better readability
    margin: '0 auto', // Center the text block horizontally
  };

  return (
    <div style={{ backgroundColor: '#02358A', padding: '50px 20px' }}> {/* Adjust the background color and padding as needed */}
      <div style={problemStyle}>
        PROBLEM
      </div>
      <div style={lineStyle}></div>
      <p style={descriptionStyle}>
        Besides the lack of highly qualified medical personnel, the main problem with stroke diagnosis lies in the inability of a human eye to detect cytotoxic edema on a CT (computed tomography) scan.
      </p>
    </div>
  );
};

const InfoBox = ({ title, text, subtext, style }) => {
  const defaultBoxContainerStyle = {
    backgroundColor: '#02358A',
    border: '2px solid #FFF', // Default white border
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    boxShadow: '0 0 10px #FFF', // Default white shadow
    height: '100%',
  };

  const boxContainerStyle = { ...defaultBoxContainerStyle, ...style }; // Override with custom style


  const titleStyle = {
    fontSize: '24px',
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: '10px',
    alignSelf: 'center',
    textAlign: 'center', // Center title horizontally
  };

  const textStyle = {
    fontSize: '18px',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: '5px',
    alignSelf: 'center', // Center text horizontally
  };

  const subtextStyle = {
    fontSize: '16px',
    color: '#FFF',
    textAlign: 'center',
    alignSelf: 'center', // Center subtext horizontally
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '80px', // Adjust the max height as needed
    marginBottom: '15px',
    alignSelf: 'center', // Center image horizontally
  };

  return (
    <div style={boxContainerStyle}>
      <img src={logo} alt="Placeholder" style={imageStyle} />
      <div style={titleStyle}>{title}</div>
      <div style={textStyle}>{text}</div>
      <div style={subtextStyle}>{subtext}</div>
    </div>
  );
};

// Container for the row of boxes
const InfoBoxesSection = () => {
  const boxesRowStyle = {
    backgroundColor: '#02358A',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribute boxes evenly
    flexWrap: 'wrap', // Allows wrapping for smaller screens
    padding: '20px 0', // Padding to match the theme
  };

  return (
    <div style={boxesRowStyle}>
      <InfoBox title="QUALIFICATION GAP" text="Shortage of medical staff and a large gap in doctors' qualifications" />
      <InfoBox 
        title="HIGH BURDEN ON DOCTORS" 
        text="The overwhelmed medical staff especially during complex and conflicting cases" 
        style={{ boxShadow: '0 0 10px red', border: '2px solid red' }} // Custom style for red shadow and border
      />
      <InfoBox title="HUMAN EYE IS UNABLE TO DETECT EMERGING STOKE ON A CT SCAN" text="The human eye is unable to diagnose an emerging cytotoxic edema on a CT scan. Stroke diagnosis by a doctor is possible only after 6 hours from the symptoms' onset" />
      <InfoBox title="NO PLATFORMS" text="No platform for quick expertise opinion and experience exchange" />
    </div>
  );
};
const ContactInfoBox = () => {
  const boxStyle = {
    backgroundColor: '#fff',
    border: '1px solid #02358A',
    borderRadius: '10px',
    boxShadow: '0 0 10px #02358A', // Box shadow to match the theme
    color: '#02358A',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px',
    maxWidth: '70%',
    margin: '20px auto',
  };

  const itemStyle = {
    fontSize: '19px',
    margin: '5px 0',
    width: '100%',
    textAlign: 'left',
  };

  const socialIconsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '5px',
  };

  const iconStyle = {
    height: '24px',
    width: '24px',
  };

  return (
    <div style={boxStyle}>
      <div style={{ ...itemStyle, fontSize: '30px', fontWeight: 'bold' }}><OncoZeroText>OncoZero.AI</OncoZeroText></div>
      <div style={itemStyle}>
        <strong>E-mail:</strong> info@cerebra.kz
      </div>
      <div style={itemStyle}>
        <strong>Address:</strong> Republic of Kazakhstan, Almaty city, Dostyk Avenue, KOKTEM GRAND, 3rd floor, office 53
      </div>
      <div style={itemStyle}>
        <strong>Office Hours:</strong> Mon-Fri 10:00 to 17:00
      </div>
      <div style={itemStyle}>
        <strong>Social Networks:</strong>
        <div style={socialIconsStyle}>
        <a href="https://www.linkedin.com/company/cerebra-ai"><img src={linkedinIcon} alt="LinkedIn" style={iconStyle} /></a>
        <a href="https://t.me/cerebra_ai"><img src={telegramIcon} alt="Telegram" style={iconStyle} /></a>
        <a href="https://www.instagram.com/cerebra.ai/"><img src={instagramIcon} alt="Instagram" style={iconStyle} /></a>
      </div>
      </div>
    </div>
  );
};




// SolutionSection component
const SolutionSection = () => {
  const sectionStyle = {
    backgroundColor: '#0A192F', // Dark background color
    color: 'white', // White text color
    padding: '50px 15%', // Padding to center content and control width
    fontSize: '20px', // Base font size
  };

  const titleStyle = {
    fontSize: '2.5rem', // Large font size for the title
    fontWeight: 'bold', // Bold font weight for the title
    margin: '0 0 1rem 0', // Margin below the title
  };

  const subtitleStyle = {
    fontSize: '1.25rem', // Font size for the subtitle
    margin: '0 0 2rem 0', // Margin below the subtitle
  };

  const emphasisStyle = {
    color: '#64FFDA', // Bright color for the emphasized word
    fontWeight: 'bold', // Bold for emphasis
  };

  const resultListStyle = {
    listStyle: 'none', // Remove default list styling
    padding: 0, // Remove default padding
  };

  const resultItemStyle = {
    marginBottom: '0.5rem', // Margin below each list item
  };

  const bulletPointStyle = {
    height: '10px',
    width: '10px',
    backgroundColor: '#64FFDA', // Bright color for the bullet point
    borderRadius: '50%', // Circular bullet points
    display: 'inline-block', // Allows it to sit inline with text
    marginRight: '10px', // Space between bullet point and text
  };

  return (
    <div style={sectionStyle}>
      <h1 style={titleStyle}>SOLUTION</h1>
      <p style={subtitleStyle}>
        AI that identifies brain stroke within 10 minutes helping to prevent neurologic deficit and brain cells death -
        <span style={emphasisStyle}> CEREBRA</span>
      </p>
      <p style={{ fontWeight: 'bold', margin: '1rem 0' }}>As a result:</p>
      <ul style={resultListStyle}>
        <li style={resultItemStyle}>
          <span style={bulletPointStyle} />Patient receives immediate treatment
        </li>
        <li style={resultItemStyle}>
          <span style={bulletPointStyle} />Risks of function loss and neurologic deficit are minimised
        </li>
      </ul>
    </div>
  );
};

const StandardProcedureSection = () => {
  const containerStyle = {
    backgroundColor: 'white', // or any color that matches your design
    textAlign: 'center', // Centering the content
    padding: '50px 0', // Padding above and below the content
    display: 'flex', // Flex container for centering
    flexDirection: 'column', // Stack items vertically
    alignItems: 'center', // Center content horizontally
  };

  const titleStyle = {
    fontSize: '2.5rem', // Large font size for the title
    marginBottom: '20px', // Space between title and image
  };

  const imageStyle = {
    maxWidth: '80%',
    height: 'auto', 
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Standard Procedure</h2> {/* Use a heading tag for semantic markup */}
      <img src={standardProcessImage} alt="Standard Procedure" style={imageStyle} />
    </div>
  );
};

const OurWay = () => {
  const containerStyle = {
    backgroundColor: 'white', // or any color that matches your design
    textAlign: 'center', // Centering the content
    padding: '50px 0', // Padding above and below the content
    display: 'flex', // Flex container for centering
    flexDirection: 'column', // Stack items vertically
    alignItems: 'center', // Center content horizontally
  };

  const titleStyle = {
    fontSize: '2.5rem', // Large font size for the title
    marginBottom: '20px', // Space between title and image
    color: '#02358A',
  };

  const imageStyle = {
    maxWidth: '80%',
    height: 'auto', 
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}><OncoZeroText>with OncoZero.AI </OncoZeroText></h2> {/* Use a heading tag for semantic markup */}
      <img src={ourWay} alt="ourWay" style={imageStyle} />
    </div>
  );
};

const HeaderBox = () => {
  const boxStyle = {
    width: '100%', // Full width
    backgroundColor: 'white', // White background
    boxShadow: '0 0 10px #02358A', // Box shadow to match the theme
    padding: '30px', // Padding inside the box
    display: 'flex', // Use flexbox to align text
    justifyContent: 'center', // Align text to the right
  };

  const textStyle = {
    fontSize: '30px', // Font size for the text
    color: '#02358A',
  };

  return (
    <div style={boxStyle}>
      <p style={textStyle}></p>
    </div>
  );
};


export const Landing = () => {

  

  const boxStyle = {
    border: '1px solid #02358A',
    padding: '30px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px auto',
    maxWidth: '900px',
    background: '#fff',
    boxShadow: '0 0 10px #02358A', // Box shadow to match the theme
  };

  const companyNameStyle = {
    fontSize: '84px', // Extra large font size for company name
    color: '#02358A',
    marginBottom: '20px',
  };

  const listItemStyle = {
    fontSize: '18px', // Adjust the size as needed
    color: '#000',
    textAlign: 'left',
    width: '100%',
    color: '#02358A',
  };

  

  
  return (
    
    <div className="bg-white ">
      <Navbar />
      <MyComponent/>


      <div style={boxStyle }>
              <h2 style={companyNameStyle}><OncoZeroText>O n c o Z e r o . A I </OncoZeroText></h2>
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
        <h1 className="maintext"><OncoZeroText>OncoZero.AI</OncoZeroText></h1>
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
      <ProblemStatement />
      <InfoBoxesSection />
      <SolutionSection />
      < HeaderBox/>
      <OurWay />
      <AwardSlider/>
      <ContactInfoBox/>
    </div>
    </div>
  );
};

export default Landing;
