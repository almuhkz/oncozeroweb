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

import kbtu from "../../assets/kbtu.png"; 
import abc from "../../assets/abc.png"; 
import sc from "../../assets/sc.png"; 
import qaz from "../../assets/qaz.png"; 

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
          Веб платформа на основе искусственного интеллекта для раннего обнаружения опухоли печени, обеспечивающее более быстрое и точное лечение.
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
    imageSrc: kbtu,
    title: 'Лучший IT проект',
    description: 'Лучшее готовое решение среди студентов KZ вузов',
  },
  {
    imageSrc: abc,
    title: 'Future Unicorn Award',
    description: '333,333 KZT за огромный потенциал проекта',
  },
  {
    imageSrc: sc,
    title: 'Demoday WINNER',
    description: 'Награда за лучший стартап в сфере медицины',
  },
  {
    imageSrc: qaz,
    title: 'ИИ в здравоохранении',
    description: 'Первая победа OncoZero.AI',
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
      <h2 style={{ textAlign: 'center', marginBottom: '30px', marginTop:'100px', fontSize:'35px', fontWeight:'bold' }}>ПОБЕДЫ</h2>
        <Slider {...settings} style={{marginBottom:'200px'}}>
          {awardsData.map((award, index) => (
            <div key={index} style={{ padding: '10px', backgroundColor: '#02358A', color: '#FFFFFF', borderRadius: '8px' }}>
              <img src={award.imageSrc} alt={award.title} style={{ width: 'auto', height: '100px', margin: '0 auto', display: 'block' }} />
              <h3 style={{ textAlign: 'center', marginTop: '20px', fontSize:'20px', fontWeight:'bold' }}>{award.title}</h3>
              <p style={{ textAlign: 'center', marginTop: '8px' }}>{award.description}</p>
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
    <div className="statistic-section" >
      <div className="header">
        СТАТИСТИКА ОНКОЛОГИИ В КАЗАХСТАНЕ
      </div>
      <div className="statistic-container" >
        <p></p>
        <StatisticItem number="№2" text="причина смерти по распространенности" />
        <StatisticItem number="50%" text="выживаемость в течении 5 лет" />
        <StatisticItem number="40,000" text="" subtext="новых онко пациентов в год" />
        <StatisticItem number="100+" text="видов рака можно найти с КТ" />
      </div>
    </div>
  );
};

// ProblemStatement component
const ProblemStatement = () => {
  const problemStyle = {
    fontSize: '48px', // Large font size for the "PROBLEM" text
    fontWeight: 'bold',
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
        ПРОБЛЕМА
      </div>
      <div style={lineStyle}></div>
      <p style={descriptionStyle}>
      Основная проблема диагностики рака заключается в том, что визуально сложно заметить ранние изменения структуры печени на КТ (компьютерной томографии). Более того, нехватка высококвалифицированных специалистов в больницах приводит к выгоранию онкологов</p>
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
      <InfoBox title="Дефицит опытных онкологов и радиологов составляет 40%" 
      text="Министерство здравоохранения РК" />
      <InfoBox 
        title="75% онко-кейсов обнаружены на поздней стадии.
        " 
        text="World Heatlh Organization" 
        style={{ boxShadow: '0 0 10px red', border: '2px solid red' }} // Custom style for red shadow and border
      />
      <InfoBox title="Визуальная трудность оценки изменений структуры органов." 
      text="CustDev онкологов" />
      
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
        <strong>E-mail:</strong> oncozero@gmail.com
      </div>
      <div style={itemStyle}>
        <strong>Адрес:</strong> Республика Казахстан, город Астана, Проспект Мангилик Ел, C1
      </div>
      <div style={itemStyle}>
        <strong>Рабочие часы:</strong> Понедельник - Пятница 10:00 to 17:00
      </div>
      <div style={itemStyle}>
        <strong>Социальные сети:</strong>
        <div style={socialIconsStyle}>
        <a href="https://www.linkedin.com/company/oncozero-ai/"><img src={linkedinIcon} alt="LinkedIn" style={iconStyle} /></a>
        <a href=""><img src={telegramIcon} alt="Telegram" style={iconStyle} /></a>
        <a href=""><img src={instagramIcon} alt="Instagram" style={iconStyle} /></a>
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
    fontSize: '1.8rem',
    color: 'red', // Bright color for the emphasized word
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
    backgroundColor: 'red', // Bright color for the bullet point
    borderRadius: '50%', // Circular bullet points
    display: 'inline-block', // Allows it to sit inline with text
    marginRight: '10px', // Space between bullet point and text
  };

  return (
    <div style={sectionStyle}>
      <h1 style={titleStyle}>РЕШЕНИЕ</h1>
      <p style={subtitleStyle}>
      <span style={emphasisStyle}> <OncoZeroText>OncoZero.AI</OncoZeroText></span>
     : Продвинутое обнаружение опухолей на КТ с помощью нейросетей
      </p>
      <p style={{ fontWeight: 'bold', margin: '1rem 0' }}>Результат:</p>
      <ul style={resultListStyle}>
        <li style={resultItemStyle}>
          <span style={bulletPointStyle} />Быстрый диагноз: Раннее обнаружение рака для своевременного лечения.
        </li>
        <li style={resultItemStyle}>
          <span style={bulletPointStyle} />Онлайн платформа: Объединяет врачей в единой экосистеме для улучшения медицинского обслуживания.
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
    maxWidth: '100%',
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
    fontSize: '70px', // Extra large font size for company name
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
              <h2 style={companyNameStyle}><OncoZeroText>OncoZero.AI </OncoZeroText> предлагает</h2>
              <p style={listItemStyle}>01 Диагностика рака печени</p>
              <p style={listItemStyle}>02 Обнаружение опухолей с точностью 80%</p>
              <p style={listItemStyle}>03 Интернет-экосистема для врачей</p>
      </div>
      <StatisticSection />

      <div className="landing">
      <Navbar />
      <div className="main">
        <div className="text-section">
        <h1 className="maintext"><OncoZeroText>OncoZero.AI</OncoZeroText></h1>
          <p className="description">
          Рак печени зачастую протекает бессимптомно и часто обнаруживается на поздних стадиях. КТ-скан является одним из методов диагностики, позволяющим врачам подробно изучить состояние печени. </p>
          <p className="description"></p>
          <p className="description">
          Однако анализ снимков требует времени и опыта, так как специалистам необходимо тщательно оценить каждый сегмент печени для подтверждения наличия опухоли.
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
