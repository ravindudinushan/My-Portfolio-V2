import { useState } from 'react';
import PopUpImage from './PopUpImage';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

// React Gym App
import GymHome from '../../../assets/images/projects/Gym/Screenshot 2024-10-25 185205.png';
import GymAbout from '../../../assets/images/projects/Gym/Screenshot 2024-10-25 185222.png';
import GymWorkout from '../../../assets/images/projects/Gym/Screenshot 2024-10-25 185314.png';
import GymShedule from '../../../assets/images/projects/Gym/Screenshot 2024-10-25 185342.png';

// ToDo List
import ToDo1 from '../../../assets/images/projects/ToDo/Screenshot 2024-10-25 185544.png';
import ToDo2 from '../../../assets/images/projects/ToDo/Screenshot 2024-10-25 185807.png';

// Currency exchange tracker and analyzer 
import Currency from '../../../assets/images/projects/currencies/Screenshot 2024-10-25 190157.png';

// Car Rental
import CarRental1 from '../../../assets/images/projects/CarRental/Screenshot 2024-09-17 165810.png';
import CarRental2 from '../../../assets/images/projects/CarRental/Screenshot 2024-09-17 165855.png';
import CarRental3 from '../../../assets/images/projects/CarRental/Screenshot 2024-09-17 165931.png';
import CarRental4 from '../../../assets/images/projects/CarRental/Screenshot 2024-09-17 165956.png';
import CarRental5 from '../../../assets/images/projects/CarRental/Screenshot 2024-09-17 170023.png';
import CarRental6 from '../../../assets/images/projects/CarRental/Screenshot 2024-09-17 170040.png';
import CarRental7 from '../../../assets/images/projects/CarRental/Screenshot 2024-09-17 170056.png';
import CarRental8 from '../../../assets/images/projects/CarRental/Screenshot 2024-09-17 170108.png';
import CarRental9 from '../../../assets/images/projects/CarRental/Screenshot 2024-09-17 170117.png';

//E-Commerce Website
import ECommerce1 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 221519.png';
import ECommerce2 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 221552.png';
import ECommerce3 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 221615.png';
import ECommerce4 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 221643.png';
import ECommerce5 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 221705.png';
import ECommerce6 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 221843.png';
import ECommerce7 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 221918.png';
import ECommerce8 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 221937.png';
import ECommerce9 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 222055.png';
import ECommerce10 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 222112.png';
import ECommerce11 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 222135.png';
import ECommerce12 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 222206.png';
import ECommerce13 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 222223.png';
import ECommerce14 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 222245.png';
import ECommerce15 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 222301.png';
import ECommerce16 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 222317.png';
import ECommerce17 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 222400.png';
import ECommerce18 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 222426.png';
import ECommerce19 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 222705.png';
import ECommerce20 from '../../../assets/images/projects/E-Commerce/Screenshot 2024-09-01 222737.png';

//E-Commerce Website with Payment Gateway
import Commerce1 from '../../../assets/images/projects/ECommerce/1.png';
import Commerce2 from '../../../assets/images/projects/ECommerce/2.png';
import Commerce3 from '../../../assets/images/projects/ECommerce/3.png';
import Commerce4 from '../../../assets/images/projects/ECommerce/4.png';
import Commerce5 from '../../../assets/images/projects/ECommerce/5.png';
import Commerce6 from '../../../assets/images/projects/ECommerce/6.png';
import Commerce7 from '../../../assets/images/projects/ECommerce/7.png';
import Commerce8 from '../../../assets/images/projects/ECommerce/8.png';
import Commerce9 from '../../../assets/images/projects/ECommerce/9.png';
import Commerce10 from '../../../assets/images/projects/ECommerce/10.png';
import Commerce11 from '../../../assets/images/projects/ECommerce/11.png';
import Commerce12 from '../../../assets/images/projects/ECommerce/12.png';
import Commerce13 from '../../../assets/images/projects/ECommerce/13.png';
import Commerce14 from '../../../assets/images/projects/ECommerce/14.png';
import Commerce15 from '../../../assets/images/projects/ECommerce/15.png';
import Commerce16 from '../../../assets/images/projects/ECommerce/16.png';

// Shoe Shop Management System
import ShoeShop1 from '../../../assets/images/projects/Shoe-Shop/Screenshot 2024-09-01 224123.png';
import ShoeShop2 from '../../../assets/images/projects/Shoe-Shop/Screenshot 2024-09-01 224143.png';
import ShoeShop3 from '../../../assets/images/projects/Shoe-Shop/Screenshot 2024-09-01 224205.png';
import ShoeShop4 from '../../../assets/images/projects/Shoe-Shop/Screenshot 2024-09-01 224237.png';
import ShoeShop5 from '../../../assets/images/projects/Shoe-Shop/Screenshot 2024-09-01 224246.png';
import ShoeShop6 from '../../../assets/images/projects/Shoe-Shop/Screenshot 2024-09-01 224300.png';
import ShoeShop7 from '../../../assets/images/projects/Shoe-Shop/Screenshot 2024-09-01 224529.png';
import ShoeShop8 from '../../../assets/images/projects/Shoe-Shop/Screenshot 2024-09-01 224604.png';
import ShoeShop9 from '../../../assets/images/projects/Shoe-Shop/Screenshot 2024-09-01 224626.png';
import ShoeShop10 from '../../../assets/images/projects/Shoe-Shop/Screenshot 2024-09-01 224641.png';
import ShoeShop11 from '../../../assets/images/projects/Shoe-Shop/Screenshot 2024-09-01 224654.png';
import ShoeShop12 from '../../../assets/images/projects/Shoe-Shop/Screenshot 2024-09-01 224719.png';
import ShoeShop13 from '../../../assets/images/projects/Shoe-Shop/Screenshot 2024-09-01 224742.png';
import ShoeShop14 from '../../../assets/images/projects/Shoe-Shop/Screenshot 2024-09-01 224754.png';

// Usre Register Form
import User1 from '../../../assets/images/projects/ReduxCRUD/Screenshot 2024-11-01 085711.png';
import User2 from '../../../assets/images/projects/ReduxCRUD/Screenshot 2024-11-01 085742.png';

// Aora mobile app
import Aora1 from '../../../assets/images/projects/Aora/1.jpg';
import Aora2 from '../../../assets/images/projects/Aora/2.jpg';
import Aora3 from '../../../assets/images/projects/Aora/3.jpg';
import Aora4 from '../../../assets/images/projects/Aora/4.jpg';
import Aora5 from '../../../assets/images/projects/Aora/5.jpg';
import Aora6 from '../../../assets/images/projects/Aora/6.jpg';
import Aora7 from '../../../assets/images/projects/Aora/7.jpg';
import Aora8 from '../../../assets/images/projects/Aora/8.jpg';
import Aora9 from '../../../assets/images/projects/Aora/9.jpg';
import Aora10 from '../../../assets/images/projects/Aora/10.jpg';
import Aora11 from '../../../assets/images/projects/Aora/11.jpg';
import Aora12 from '../../../assets/images/projects/Aora/12.jpg';

// Uber clone mobile app
import Uber1 from '../../../assets/images/projects/Uber/1.jpg';
import Uber2 from '../../../assets/images/projects/Uber/2.jpg';
import Uber3 from '../../../assets/images/projects/Uber/3.jpg';
import Uber4 from '../../../assets/images/projects/Uber/4.jpg';
import Uber5 from '../../../assets/images/projects/Uber/5.jpg';
import Uber6 from '../../../assets/images/projects/Uber/6.jpg';
import Uber7 from '../../../assets/images/projects/Uber/7.jpg';
import Uber8 from '../../../assets/images/projects/Uber/8.jpg';
import Uber9 from '../../../assets/images/projects/Uber/9.jpg';
import Uber10 from '../../../assets/images/projects/Uber/10.jpg';
import Uber11 from '../../../assets/images/projects/Uber/11.jpg';
import Uber12 from '../../../assets/images/projects/Uber/12.jpg';
import Uber13 from '../../../assets/images/projects/Uber/13.jpg';
import Uber14 from '../../../assets/images/projects/Uber/14.jpg';

// Highway ticket management system
import Highway1 from '../../../assets/images/projects/HighwayTicketManagementSystem/Screenshot 2024-11-01 090620.png';
import Highway2 from '../../../assets/images/projects/HighwayTicketManagementSystem/Screenshot 2024-11-01 090656.png';

// MyPortfolio
import PortfolioHome from '../../../assets/images/projects/MyPortfolio/Screenshot 2024-09-01 223427.png';
import PortfolioAbout from '../../../assets/images/projects/MyPortfolio/Screenshot 2024-09-01 223444.png';
import PortfolioSkills from '../../../assets/images/projects/MyPortfolio/Screenshot 2024-09-01 223505.png';
import PortfolioServices from '../../../assets/images/projects/MyPortfolio/Screenshot 2024-09-01 223517.png';
import PortfolioProjects from '../../../assets/images/projects/MyPortfolio/Screenshot 2024-09-01 223532.png';
import PortfolioAssignments from '../../../assets/images/projects/MyPortfolio/Screenshot 2024-09-01 223558.png';
import PortfolioApplications from '../../../assets/images/projects/MyPortfolio/Screenshot 2024-09-01 223617.png';
import PortfolioGallery from '../../../assets/images/projects/MyPortfolio/Screenshot 2024-09-01 223644.png';
import PortfolioContact from '../../../assets/images/projects/MyPortfolio/Screenshot 2024-09-01 223703.png';
import PortfolioContact2 from '../../../assets/images/projects/MyPortfolio/Screenshot 2024-09-01 223717.png';

// Springboot web POS
import POS1 from '../../../assets/images/projects/SpringPos/Screenshot 2024-11-01 091318.png';
import POS2 from '../../../assets/images/projects/SpringPos/Screenshot 2024-11-01 091345.png';
import POS3 from '../../../assets/images/projects/SpringPos/Screenshot 2024-11-01 091403.png';
import POS4 from '../../../assets/images/projects/SpringPos/Screenshot 2024-11-01 091512.png';
import POS5 from '../../../assets/images/projects/SpringPos/Screenshot 2024-11-01 091526.png';

// SPA POS
import SPA1 from '../../../assets/images/projects/SPA/Screenshot 2024-11-01 103450.png';
import SPA2 from '../../../assets/images/projects/SPA/Screenshot 2024-11-01 103513.png';
import SPA3 from '../../../assets/images/projects/SPA/Screenshot 2024-11-01 103535.png';
import SPA4 from '../../../assets/images/projects/SPA/Screenshot 2024-11-01 103552.png';

// Hostal Management System
import Hostal1 from '../../../assets/images/projects/HostalManagementSystem/Screenshot 2024-11-01 100403.png';
import Hostal2 from '../../../assets/images/projects/HostalManagementSystem/Screenshot 2024-11-01 100501.png';
import Hostal3 from '../../../assets/images/projects/HostalManagementSystem/Screenshot 2024-11-01 100522.png';
import Hostal4 from '../../../assets/images/projects/HostalManagementSystem/Screenshot 2024-11-01 100600.png';
import Hostal5 from '../../../assets/images/projects/HostalManagementSystem/Screenshot 2024-11-01 100613.png';
import Hostal6 from '../../../assets/images/projects/HostalManagementSystem/Screenshot 2024-11-01 100632.png';
import Hostal7 from '../../../assets/images/projects/HostalManagementSystem/Screenshot 2024-11-01 100654.png';
import Hostal8 from '../../../assets/images/projects/HostalManagementSystem/Screenshot 2024-11-01 100705.png';
import Hostal9 from '../../../assets/images/projects/HostalManagementSystem/Screenshot 2024-11-01 100718.png';
import Hostal10 from '../../../assets/images/projects/HostalManagementSystem/Screenshot 2024-11-01 100736.png';

// JS Calc
import Calc1 from '../../../assets/images/projects/JsCalc/Screenshot 2024-11-01 102107.png';

// Thogakade
import Thogakade1 from '../../../assets/images/projects/ThogakadeHibernate/Screenshot 2024-11-01 095128.png';
import Thogakade2 from '../../../assets/images/projects/ThogakadeHibernate/Screenshot 2024-11-01 095145.png';
import Thogakade3 from '../../../assets/images/projects/ThogakadeHibernate/Screenshot 2024-11-01 095200.png';
import Thogakade4 from '../../../assets/images/projects/ThogakadeHibernate/Screenshot 2024-11-01 095213.png';
import Thogakade5 from '../../../assets/images/projects/ThogakadeHibernate/Screenshot 2024-11-01 095338.png';

// chat Application
import Chat1 from '../../../assets/images/projects/ChatApp/Screenshot (90).png';
import Chat2 from '../../../assets/images/projects/ChatApp/chatApp.png';

// Rio Ice-Cream Shop Management System
import Rio1 from '../../../assets/images/projects/RIO/Screenshot (41).png';
import Rio2 from '../../../assets/images/projects/RIO/Screenshot (49).png';
import Rio3 from '../../../assets/images/projects/RIO/Screenshot (50).png';
import Rio4 from '../../../assets/images/projects/RIO/Screenshot (51).png';
import Rio5 from '../../../assets/images/projects/RIO/Screenshot (52).png';
import Rio6 from '../../../assets/images/projects/RIO/Screenshot (54).png';
import Rio7 from '../../../assets/images/projects/RIO/Screenshot (55).png';
import Rio8 from '../../../assets/images/projects/RIO/Screenshot (56).png';
import Rio9 from '../../../assets/images/projects/RIO/Screenshot (57).png';
import Rio10 from '../../../assets/images/projects/RIO/Screenshot (58).png';
import Rio11 from '../../../assets/images/projects/RIO/Screenshot (59).png';
import Rio12 from '../../../assets/images/projects/RIO/Screenshot (60).png';
import Rio13 from '../../../assets/images/projects/RIO/Screenshot (61).png';

// Connect 4 Game
import Connect4UserName from '../../../assets/images/projects/Connect-4-Game/User-Name.png';
import Connect4GamePlay from '../../../assets/images/projects/Connect-4-Game/Game-Play.png';
import Connect4Codes from '../../../assets/images/projects/Connect-4-Game/Codes.png';

// Portfolio v2
import PortfolioV2Home from '../../../assets/images/projects/MyPortfolio-V2/Screenshot 2024-10-31 101148.png';
import PortfolioV2About from '../../../assets/images/projects/MyPortfolio-V2/Screenshot 2024-10-31 101157.png';
import PortfolioV2Skills from '../../../assets/images/projects/MyPortfolio-V2/Screenshot 2024-10-31 101210.png';
import PortfolioV2Projects from '../../../assets/images/projects/MyPortfolio-V2/Screenshot 2024-10-31 101227.png';
import PortfolioV2Services from '../../../assets/images/projects/MyPortfolio-V2/Screenshot 2024-10-31 101258.png';
import PortfolioV2Contacts from '../../../assets/images/projects/MyPortfolio-V2/Screenshot 2024-10-31 101323.png';

// student Management System - CLI
import StudentManagementCodes from '../../../assets/images/projects/Student-CLI/Codes.png';

const GymImage = [
  // Gym App,
  GymHome,
  GymAbout,
  GymWorkout,
  GymShedule,
];

const ToDoImages = [
  // ToDo List
  ToDo1,
  ToDo2,
];

const CurrencyImages = [
  // Currency exchange tracker and analyzer 
  Currency,
];

const CarRentalImages = [
  // Car Rental 
  CarRental1,
  CarRental2,
  CarRental3,
  CarRental4,
  CarRental5,
  CarRental6,
  CarRental7,
  CarRental8,
  CarRental9,
];

const ECommerceImages = [
  // E-Commerce website
  ECommerce1,
  ECommerce2,
  ECommerce3,
  ECommerce4,
  ECommerce5,
  ECommerce6,
  ECommerce7,
  ECommerce8,
  ECommerce9,
  ECommerce10,
  ECommerce11,
  ECommerce12,
  ECommerce13,
  ECommerce14,
  ECommerce15,
  ECommerce16,
  ECommerce17,
  ECommerce18,
  ECommerce19,
  ECommerce20,
];

const CommerceImages = [
  // E-Commerce website with Payment Gateway
  Commerce1,
  Commerce2,
  Commerce3,
  Commerce4,
  Commerce5,
  Commerce6,
  Commerce7,
  Commerce8,
  Commerce9,
  Commerce10,
  Commerce11,
  Commerce12,
  Commerce13,
  Commerce14,
  Commerce15,
  Commerce16,
];

const shoeShopImages = [
  // ShoeShopTheme,
  ShoeShop1,
  ShoeShop2,
  ShoeShop3,
  ShoeShop4,
  ShoeShop5,
  ShoeShop6,
  ShoeShop7,
  ShoeShop8,
  ShoeShop9,
  ShoeShop10,
  ShoeShop11,
  ShoeShop12,
  ShoeShop13,
  ShoeShop14,
];

const HighwayImages= [
  // Highway ticket management system
  Highway1,
  Highway2,
];

const portfolioImages = [
  // PortfolioTheme,
  PortfolioHome,
  PortfolioAbout,
  PortfolioSkills,
  PortfolioServices,
  PortfolioProjects,
  PortfolioAssignments,
  PortfolioApplications,
  PortfolioGallery,
  PortfolioContact,
  PortfolioContact2,
];

const UserImages = [
  // User register form
  User1,
  User2,
];

const AoraImages = [
  // Aora mobile App
  Aora1,
  Aora2,
  Aora3,
  Aora4,
  Aora5,
  Aora6,
  Aora7,
  Aora8,
  Aora9,
  Aora10,
  Aora11,
  Aora12,
];

const UberImages = [
// Uber clone mobile app
  Uber1,
  Uber2,
  Uber3,
  Uber4,
  Uber5,
  Uber6,
  Uber7,
  Uber8,
  Uber9,
  Uber10,
  Uber11,
  Uber12,
  Uber13,
  Uber14,
];

const POSImages = [
  // POS
  POS1,
  POS2,
  POS3,
  POS4,
  POS5,
];

const SPAImages = [
  // SPA POS
  SPA1,
  SPA2,
  SPA3,
  SPA4,
];

const HostelImages = [
  // Hostal management system
  Hostal1,
  Hostal2,
  Hostal3,
  Hostal4,
  Hostal5,
  Hostal6,
  Hostal7,
  Hostal8,
  Hostal9,
  Hostal10,
];

const CalcImages = [
  // JS Calc
  Calc1,
];

const ThogakadeImages = [
  // Thogakade
  Thogakade1,
  Thogakade2,
  Thogakade3,
  Thogakade4,
  Thogakade5,
];

const chatApplicationImages = [
  // Chat Application
  Chat1,
  Chat2,
];

const RioImages = [
  // Rio Ice-Cream Shop Management System
  Rio1,
  Rio2,
  Rio3,
  Rio4,
  Rio5,
  Rio6,
  Rio7,
  Rio8,
  Rio9,
  Rio10,
  Rio11,
  Rio12,
  Rio13,
];

const connect4Images = [
  // Connect4Theme,
  Connect4UserName,
  Connect4GamePlay,
  Connect4Codes,
];

const portfolioV2Images = [
  // PortfolioV2Theme,
  PortfolioV2Home,
  PortfolioV2About,
  PortfolioV2Skills,
  PortfolioV2Projects,
  PortfolioV2Services,
  PortfolioV2Contacts,
];

const studentCLIImages = [
  // StudentManagementTheme,
  StudentManagementCodes
];

export function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState('');
  const [currentGymImage, setcurrentGymImage] = useState(0);
  const [currentToDoImage, setCurrentToDoImage] = useState(0);
  const [currentCurrencyImage, setCurrentCurrencyImage] = useState(0);
  const [currentCarRentalImage, setCurrentCarRentalImage] = useState(0);
  const [currentECommerceImage, setCurrentECommerceImage] = useState(0);
  const [currentShoeShopImage, setCurrentShoeShopImage] = useState(0);
  const [currentUserImage, setCurrentUserImage] = useState(0);
  const [currentAoraImage, setCurrentAoraImage] = useState(0);
  const [currentUberImage, setCurrentUberImage] = useState(0);
  const [currentHighwayImage, setCurrentHighwayImage] = useState(0);
  const [currentSPAImage, setCurrentSPAImage] = useState(0);
  const [currentHostelImage, setCurrentHostelImage] = useState(0);
  const [currentCalcImage, setCurrentCalcImage] = useState(0);
  const [currentThogakadeImage, setCurrentThogakadeImage] = useState(0);
  const [currentChatApplicationImage, setCurrentChatApplicationImage] = useState(0);
  const [currentPortfolioImage, setCurrentPortfolioImage] = useState(0);
  const [currentRioImage, setCurrentRioImage] = useState(0);
  const [currentConnect4Image, setCurrentConnect4Image] = useState(0);
  const [currentPortfolioV2Image, setCurrentPortfolioV2Image] = useState(0);
  const [currentStudentCLIImage, setCurrentStudentCLIImage] = useState(0);
  const [currentCommerceImage, setCurrentCommerceImage] = useState(0);
  const [currentPOSImage, setCurrentPOSImage] = useState(0);

  const openModal = (projectType) => {
    setIsModalOpen(true);
    setCurrentProject(projectType);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg pt-20 pb-5">
      <h1 className="text-4xl text-primary font-bold text-center text-neonBlue mb-10 fixed top-0 left-0 right-0 z-10 mt-20 bg-bg pb-5">My Projects</h1>

      <div className="max-w-7xl px-6 space-y-32 mt-20">

      <ProjectCard projectName="E-Commerce Website with Payment Gateway"
          description="A feature-rich e-commerce platform built with the MERN stack (MongoDB, Express.js, React, and Node.js), offering a seamless shopping experience with secure payment 
          options. It integrates JWT authentication for robust user security and supports both Stripe and Cash on Delivery (COD) payments. Styled with Tailwind CSS, the platform delivers 
          a modern, responsive, and high-performance interface. Key features include user authentication, product browsing, a shopping cart, and a secure checkout process, ensuring a 
          smooth experience across all devices."
          technologies={["React", "NodeJs", "ExpressJs", "MongoDB", "Tailwind CSS", "COD", "Stripe", "Vite", "JSON Web Token (JWT)"]}
          githubLink="https://github.com/ravindudinushan/E-Commerce-Website"
          images={CommerceImages}
          currentImageIndex={currentCommerceImage}
          onNextImage={() => setCurrentCommerceImage((prev) => (prev + 1) % CommerceImages.length)}
          onPreviousImage={() => setCurrentCommerceImage((prev) => (prev - 1 + CommerceImages.length) % CommerceImages.length)}
          onClickImage={() => openModal('commerce')} />

      <ProjectCard projectName="Uber Clone Mobile App"
          description="The Uber Clone is a feature-rich, full-stack mobile application built with React Native, Expo, PostgreSQL, and Stripe. It provides a seamless ride-booking experience 
          with real-time location tracking, secure payments, and an intuitive user interface."
          technologies={["React-Native", "Expo", "NodeJS", "Clerk", "Typescript", "Tailwind CSS", "Postgre SQL", "Stripe", "Geoapify Api", "Google Map Api", "Google Direction Api"]}
          githubLink="https://github.com/ravindudinushan/Uber-Clone-App"
          images={UberImages}
          currentImageIndex={currentUberImage}
          onNextImage={() => setCurrentUberImage((prev) => (prev + 1) % UberImages.length)}
          onPreviousImage={() => setCurrentUberImage((prev) => (prev - 1 + UberImages.length) % UberImages.length)}
          onClickImage={() => openModal('uber')} />

        <ProjectCard projectName="React Gym App"
          description="The Gym App project is a robust and efficient system designed to help exercise. Built with React, Tailwind CSS and 
          Typescript, the project consists of both front-end and back-end components."
          technologies={["React", "Tailwind CSS", "Typescript"]}
          githubLink="https://github.com/ravindudinushan/React-Gym-App"
          images={GymImage}
          currentImageIndex={currentGymImage}
          onNextImage={() => setcurrentGymImage((prev) => (prev + 1) % GymImage.length)}
          onPreviousImage={() => setcurrentGymImage((prev) => (prev - 1 + GymImage.length) % GymImage.length)}
          onClickImage={() => openModal('gym')} />

        <ProjectCard projectName="MyPortfolio V2"
          description="Dive into a showcase of my diverse skill set, meticulously crafted using React and Vite. This portfolio highlights 
          my expertise in creating dynamic and responsive web applications with a modern touch."
          technologies={["React", "Vite", "Tailwind CSS"]}
          githubLink="https://github.com/ravindudinushan/My-Portfolio-V2"
          images={portfolioV2Images}
          currentImageIndex={currentPortfolioV2Image}
          onNextImage={() => setCurrentPortfolioV2Image((prev) => (prev + 1) % portfolioV2Images.length)}
          onPreviousImage={() => setCurrentPortfolioV2Image((prev) => (prev - 1 + portfolioV2Images.length) % portfolioV2Images.length)}
          onClickImage={() => openModal('portfoliov2')} />

        <ProjectCard projectName="E-Commerce Website"
          description="A comprehensive e-commerce platform built with the MERN stack (MongoDB, Express.js, React, and Node.js), incorporating 
          JWT authentication for secure user sessions. Styled with Tailwind CSS, this website provides users with a smooth and modern shopping 
          experience. Key features include user authentication, product browsing, shopping cart, and secure checkout. The platform is optimized 
          for responsiveness and performance, ensuring a seamless experience across devices."
          technologies={["React", "NodeJs", "ExpressJs", "MongoDB", "Tailwind CSS", "JSON Web Token (JWT)"]}
          githubLink="https://github.com/ravindudinushan/E-Commerce-Web-Site"
          images={ECommerceImages}
          currentImageIndex={currentECommerceImage}
          onNextImage={() => setCurrentECommerceImage((prev) => (prev + 1) % ECommerceImages.length)}
          onPreviousImage={() => setCurrentECommerceImage((prev) => (prev - 1 + ECommerceImages.length) % ECommerceImages.length)}
          onClickImage={() => openModal('ecommerce')} />

        <ProjectCard projectName="Aora Social Media Mobile App"
          description="Aora is a social networking app developed with React Native and Expo for seamless cross-platform functionality. 
          Powered by Node.js and Appwrite, it enables secure, real-time interactions between users. Key features include user authentication, 
          profile creation, messaging, and activity feeds. Appwrite handles backend services like authentication and database management, 
          making the app scalable and secure."
          technologies={["React-Native", "Expo", "NodeJS", "Appwrite", "Javascript", "Tailwind CSS"]}
          githubLink="https://github.com/ravindudinushan/Aora-React-Native-App"
          images={AoraImages}
          currentImageIndex={currentAoraImage}
          onNextImage={() => setCurrentAoraImage((prev) => (prev + 1) % AoraImages.length)}
          onPreviousImage={() => setCurrentAoraImage((prev) => (prev - 1 + AoraImages.length) % AoraImages.length)}
          onClickImage={() => openModal('aora')} />

        <ProjectCard projectName="Car Rental Website"
          description="This is Responsive Premium Car Rental Front-End Website. Using HTML, CSS, JavaScript & Bootstrap"
          technologies={["HTML", "CSS", "Javascript", "Bootstrap"]}
          githubLink="https://github.com/ravindudinushan/Car-Rental"
          images={CarRentalImages}
          currentImageIndex={currentCarRentalImage}
          onNextImage={() => setCurrentCarRentalImage((prev) => (prev + 1) % CarRentalImages.length)}
          onPreviousImage={() => setCurrentCarRentalImage((prev) => (prev - 1 + CarRentalImages.length) % CarRentalImages.length)}
          onClickImage={() => openModal('carRental')} />

        <ProjectCard projectName="React ToDo List"
          description="A fast and responsive task management tool built with React, Vite, and Tailwind CSS. It allows users to add, edit, delete, and mark tasks
           as completed, with a clean and modern interface. Tailored for productivity, it’s optimized for all screen sizes and delivers excellent performance for daily use."
          technologies={["React", "Vite", "Tailwind CSS"]}
          githubLink="https://github.com/ravindudinushan/React-ToDoList"
          images={ToDoImages}
          currentImageIndex={currentToDoImage}
          onNextImage={() => setCurrentToDoImage((prev) => (prev + 1) % ToDoImages.length)}
          onPreviousImage={() => setCurrentToDoImage((prev) => (prev - 1 + ToDoImages.length) % ToDoImages.length)}
          onClickImage={() => openModal('todO')} />

        <ProjectCard projectName="Currency Exchange Tracker and Analyzer"
          description="This application allows you to easily convert currencies based on the latest exchange rates. Whether you're planning 
          a trip, managing your finances, or simply curious about the value of your money in different currencies, this tool is here to help."
          technologies={["React", "NodeJs", "ExpressJs", "Tailwind CSS", "Open Exchange Rates API"]}
          githubLink="https://github.com/ravindudinushan/Currency-exchange-tracker-and-analyzer"
          images={CurrencyImages}
          currentImageIndex={currentCurrencyImage}
          onNextImage={() => setCurrentCurrencyImage((prev) => (prev + 1) % CurrencyImages.length)}
          onPreviousImage={() => setCurrentCurrencyImage((prev) => (prev - 1 + CurrencyImages.length) % CurrencyImages.length)}
          onClickImage={() => openModal('currency')} />

        <ProjectCard projectName="Shoe Shop Management System"
          description="Hello Shoes (PVT) LTD. offers a comprehensive Shoe Shop Management System with a modern frontend and a Spring Boot
                backend. It provides an intuitive interface for managing customers, employees, suppliers, inventory, and sales,
                supported by robust RESTful APIs for role-based authentication and efficient system management."
          technologies={["HTML", "CSS", "JavaScript", "AJAX", "JQuery", "Bootstrap", "Spring Boot", "Spring Data JPA", "Spring Validation",
            "MySQL", "Spring Security", "JSON Web Token (JWT)"]}
          githubLink="https://github.com/ravindudinushan/Shoe-Shop-Management-System"
          images={shoeShopImages}
          currentImageIndex={currentShoeShopImage}
          onNextImage={() => setCurrentShoeShopImage((prev) => (prev + 1) % shoeShopImages.length)}
          onPreviousImage={() => setCurrentShoeShopImage((prev) => (prev - 1 + shoeShopImages.length) % shoeShopImages.length)}
          onClickImage={() => openModal('shoeShop')} />

        <ProjectCard projectName="MyPortfolio"
          description="My Portfolio highlights my top projects and skills, showcasing my creativity, dedication, and growth. It reflects my 
          approach to problem-solving and continuous learning, offering insights into my innovative solutions and commitment to excellence."
          technologies={["HTML", "CSS", "JavaScript"]}
          githubLink="https://ravindudinushan.github.io/MyPortfolio/"
          images={portfolioImages}
          currentImageIndex={currentPortfolioImage}
          onNextImage={() => setCurrentPortfolioImage((prev) => (prev + 1) % portfolioImages.length)}
          onPreviousImage={() => setCurrentPortfolioImage((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length)}
          onClickImage={() => openModal('portfolio')} />

        <ProjectCard projectName="User Register Form (REDUX)"
          description="A registration form built with React and Redux, using JSON Server as a mock backend. It manages form data and 
          validation through Redux, saving new user info to JSON Server. This setup provides a responsive, real-world registration 
          experience for user sign-ups."
          technologies={["React", "Redux", "JavaScript", "JSON Server"]}
          githubLink="https://github.com/ravindudinushan/React-CRUD"
          images={UserImages}
          currentImageIndex={currentUserImage}
          onNextImage={() => setCurrentUserImage((prev) => (prev + 1) % UserImages.length)}
          onPreviousImage={() => setCurrentUserImage((prev) => (prev - 1 + UserImages.length) % UserImages.length)}
          onClickImage={() => openModal('user')} />

        <ProjectCard projectName="Highway Ticket Management System"
          description="A microservices-based ticketing system using Java, Spring Boot, Hibernate, and Eureka Server for managing highway 
          violations. It allows ticket issuance, fine calculation, and payment tracking with efficient data handling through JPA. Eureka 
          Server supports seamless service discovery and scalability across microservices."
          technologies={["Java", "Springboot", "Micro-Service", "Hibernate", "JPA", "Eureka Server"]}
          githubLink="https://github.com/ravindudinushan/Highway_Ticket_Management_System"
          images={HighwayImages}
          currentImageIndex={currentHighwayImage}
          onNextImage={() => setCurrentHighwayImage((prev) => (prev + 1) % HighwayImages.length)}
          onPreviousImage={() => setCurrentHighwayImage((prev) => (prev - 1 + HighwayImages.length) % HighwayImages.length)}
          onClickImage={() => openModal('highway')} />

        <ProjectCard projectName="Springboot Web POS"
          description="This is my first simple POS system using Springboot, with a frontend for the user interface and a backend built with Springboot to manage the API."
          technologies={["HTML", "CSS", "JS", "Bootstrap", "Springboot", "AJAX", "JSON", "Hibernate", "JPA", "MySQL"]}
          githubLink="https://github.com/ravindudinushan?page=1&tab=repositories"
          images={POSImages}
          currentImageIndex={currentPOSImage}
          onNextImage={() => setCurrentPOSImage((prev) => (prev + 1) % POSImages.length)}
          onPreviousImage={() => setCurrentPOSImage((prev) => (prev - 1 + POSImages.length) % POSImages.length)}
          onClickImage={() => openModal('POS')} />

        <ProjectCard projectName="Spring Web POS"
          description="This is my first simple POS system using Spring, with a frontend for the user interface and a backend built with Spring to manage the API."
          technologies={["HTML", "CSS", "JS", "Bootstrap", "Spring", "AJAX", "JSON", "Hibernate", "JPA", "MySQL"]}
          githubLink="https://github.com/ravindudinushan/Spring-Web-POS"
          images={POSImages}
          currentImageIndex={currentPOSImage}
          onNextImage={() => setCurrentPOSImage((prev) => (prev + 1) % POSImages.length)}
          onPreviousImage={() => setCurrentPOSImage((prev) => (prev - 1 + POSImages.length) % POSImages.length)}
          onClickImage={() => openModal('POS')} />

        <ProjectCard projectName="JavaEE Web POS"
          description="This is my first simple POS system using Java EE, with a frontend for the user interface and a backend built with Java EE to manage the API."
          technologies={["HTML", "CSS", "JS", "Bootstrap", "AJAX", "JavaEE", "JSON", "Hibernate", "JPA", "MySQL"]}
          githubLink="https://github.com/ravindudinushan/AAD-Assignment-JavaEE"
          images={POSImages}
          currentImageIndex={currentPOSImage}
          onNextImage={() => setCurrentPOSImage((prev) => (prev + 1) % POSImages.length)}
          onPreviousImage={() => setCurrentPOSImage((prev) => (prev - 1 + POSImages.length) % POSImages.length)}
          onClickImage={() => openModal('POS')} />

        <ProjectCard projectName="SPA POS"
          description="This is my first simple SPA POS system using HTML, CSS, & JS with a frontend for the user interface."
          technologies={["HTML", "CSS", "JS", "Bootstrap", "AJAX", "JavaEE", "JSON", "Hibernate", "JPA", "MySQL"]}
          githubLink="https://github.com/ravindudinushan/AAD-Assignment-JavaEE"
          images={SPAImages}
          currentImageIndex={currentSPAImage}
          onNextImage={() => setCurrentSPAImage((prev) => (prev + 1) % SPAImages.length)}
          onPreviousImage={() => setCurrentSPAImage((prev) => (prev - 1 + SPAImages.length) % SPAImages.length)}
          onClickImage={() => openModal('SPA')} />

        <ProjectCard projectName="JS Calculator"
          description="This is my simple Calculator using HTML, CSS, & JS."
          technologies={["HTML", "CSS", "JS"]}
          githubLink="https://github.com/ravindudinushan/JS-Calculator"
          images={CalcImages}
          currentImageIndex={currentCalcImage}
          onNextImage={() => setCurrentCalcImage((prev) => (prev + 1) % CalcImages.length)}
          onPreviousImage={() => setCurrentCalcImage((prev) => (prev - 1 + CalcImages.length) % CalcImages.length)}
          onClickImage={() => openModal('calc')} />

        <ProjectCard projectName="Hostel Management System"
          description="The Hostel Management System, built with JavaFX, provides an intuitive interface for managing students, room allocations,
                reservations, and user logins. Students can secure rooms by paying key money, streamlining hostel operations and record-keeping."
          technologies={["Java", "JavaFX", "Maven", "MySQL", "Hibernate"]}
          githubLink="https://github.com/ravindudinushan/Hostel-Management-System"
          images={HostelImages}
          currentImageIndex={currentHostelImage}
          onNextImage={() => setCurrentHostelImage((prev) => (prev + 1) % HostelImages.length)}
          onPreviousImage={() => setCurrentHostelImage((prev) => (prev - 1 + HostelImages.length) % HostelImages.length)}
          onClickImage={() => openModal('hostel')} />

        <ProjectCard projectName="Thogakade"
          description="Thogakade, built with JavaFX, provides an intuitive interface for managing Customer, Item & Orders."
          technologies={["Java", "JavaFX", "Maven", "MySQL", "Hibernate"]}
          githubLink="https://github.com/ravindudinushan/Thogakade-Hibernate"
          images={ThogakadeImages}
          currentImageIndex={currentThogakadeImage}
          onNextImage={() => setCurrentThogakadeImage((prev) => (prev + 1) % ThogakadeImages.length)}
          onPreviousImage={() => setCurrentThogakadeImage((prev) => (prev - 1 + ThogakadeImages.length) % ThogakadeImages.length)}
          onClickImage={() => openModal('thogakade')} />

        <ProjectCard projectName="Chat Application"
          description="Introducing our innovative Multi-Threaded Chat Application, built in Java with a client-server architecture for real-time communication. Utilizing socket programming and multi-threading in Java, this application enables fast and secure messaging, file sharing, and multimedia exchange across both local and distributed networks."
          technologies={["Java", "JavaFX", "Java Threads", "Java Sockets"]}
          githubLink="https://github.com/ravindudinushan/chatApp"
          images={chatApplicationImages}
          currentImageIndex={currentChatApplicationImage}
          onNextImage={() => setCurrentChatApplicationImage((prev) => (prev + 1) % chatApplicationImages.length)}
          onPreviousImage={() => setCurrentChatApplicationImage((prev) => (prev - 1 + chatApplicationImages.length) % chatApplicationImages.length)}
          onClickImage={() => openModal('chatApplication')} />
          
        <ProjectCard projectName="Rio Ice-Cream Shop Management System"
          description="The Rio Ice-Cream Shop Management System is a comprehensive standalone application built using JavaFX. It offers an 
          intuitive interface for managing users, customers, employees, suppliers, inventory, Event, Delivery and orders. The system also integrates Jasper 
          Reports for generating detailed reports, providing an efficient solution for managing various aspects of a computer shop's operations."
          technologies={["Java", "JavaFX", "Maven", "MySQL", "Jasper Report", "Layered","JDBC"]}
          githubLink="https://github.com/ravindudinushan/Project-Rio-Layered-"
          images={RioImages}
          currentImageIndex={currentRioImage}
          onNextImage={() => setCurrentRioImage((prev) => (prev + 1) % RioImages.length)}
          onPreviousImage={() => setCurrentRioImage((prev) => (prev - 1 + RioImages.length) % RioImages.length)}
          onClickImage={() => openModal('rio')} />

        <ProjectCard projectName="Connect 4 Game"
          description="I created this Connect 4 game as a way to deepen my understanding of Object-Oriented Programming (OOP) in Java. Through this project, I explored the principles of encapsulation, inheritance, polymorphism and abstraction, all while bringing a classic game to life."
          technologies={["Java", "JavaFX", "OOP"]}
          githubLink="https://github.com/ravindudinushan/Conect-for-game"
          images={connect4Images}
          currentImageIndex={currentConnect4Image}
          onNextImage={() => setCurrentConnect4Image((prev) => (prev + 1) % connect4Images.length)}
          onPreviousImage={() => setCurrentConnect4Image((prev) => (prev - 1 + connect4Images.length) % connect4Images.length)}
          onClickImage={() => openModal('connect4')} />

        <ProjectCard projectName="Student Management System - CLI"
          description="This is a Command Line Interface (CLI) application designed to manage student information efficiently. This is the Course-Work of Programming Fundermentals."
          technologies={["Java", "Fundermentals", "OOP"]}
          githubLink="https://github.com/ravindudinushan/Student_Management_System"
          images={studentCLIImages}
          currentImageIndex={currentStudentCLIImage}
          onNextImage={() => setCurrentStudentCLIImage((prev) => (prev + 1) % studentCLIImages.length)}
          onPreviousImage={() => setCurrentStudentCLIImage((prev) => (prev - 1 + studentCLIImages.length) % studentCLIImages.length)}
          onClickImage={() => openModal('studentCLI')} />

      </div>

      <PopUpImage isOpen={isModalOpen} onClose={closeModal}
        imageSrc={
          currentProject === 'gym' ? GymImage[currentGymImage] :
            currentProject === 'shoeShop' ? shoeShopImages[currentShoeShopImage] :
              currentProject === 'rio' ? RioImages[currentRioImage] :
                currentProject === 'portfolio' ? portfolioImages[currentPortfolioImage] :
                  currentProject === 'connect4' ? connect4Images[currentConnect4Image] :
                    currentProject === 'portfoliov2' ? portfolioV2Images[currentPortfolioV2Image] :
                      currentProject === 'studentCLI' ? studentCLIImages[currentStudentCLIImage] :
                        currentProject === 'todo' ? ToDoImages[currentToDoImage] :
                          currentProject === 'currency' ? CurrencyImages[currentCurrencyImage] :
                            currentProject === 'carRental' ? CarRentalImages[currentCarRentalImage] :
                              currentProject === 'ecommerce' ? ECommerceImages[currentECommerceImage] :
                                currentProject === 'user' ? UserImages[currentUserImage] :
                                  currentProject === 'aora' ? AoraImages[currentAoraImage] :
                                    currentProject === 'highway' ? HighwayImages[currentHighwayImage] :
                                      currentProject === 'SPA' ? SPAImages[currentSPAImage] :
                                        currentProject === 'hostel' ? HostelImages[currentHostelImage] :
                                          currentProject === 'calc' ? CalcImages[currentCalcImage] :
                                            currentProject === 'thogakade' ? ThogakadeImages[currentThogakadeImage] :
                                              currentProject === 'chatApplication' ? chatApplicationImages[currentChatApplicationImage] :
                                                currentProject === 'uber' ? UberImages[currentUberImage] :
                                                  currentProject === 'commerce' ? CommerceImages[currentCommerceImage] :
                                                    currentProject === 'POS' ? POSImages[currentPOSImage] : ''}

        onNext={
          currentProject === 'gym' ? () => setcurrentGymImage((prev) => (prev + 1) % GymImage.length) :
            currentProject === 'shoeShop' ? () => setCurrentShoeShopImage((prev) => (prev + 1) % shoeShopImages.length) :
              currentProject === 'rio' ? () => setCurrentRioImage((prev) => (prev + 1) % RioImages.length) :
                currentProject === 'portfolio' ? () => setCurrentPortfolioImage((prev) => (prev + 1) % portfolioImages.length) :
                  currentProject === 'connect4' ? () => setCurrentConnect4Image((prev) => (prev + 1) % connect4Images.length) :
                    currentProject === 'portfoliov2' ? () => setCurrentPortfolioV2Image((prev) => (prev + 1) % portfolioV2Images.length) :
                      currentProject === 'studentCLI' ? () => setCurrentStudentCLIImage((prev) => (prev + 1) % studentCLIImages.length) :
                        currentProject === 'todo' ? () => setCurrentToDoImage((prev) => (prev + 1) % ToDoImages.length) :
                          currentProject === 'currency' ? () => setCurrentCurrencyImage((prev) => (prev + 1) % CurrencyImages.length) :
                            currentProject === 'carRental' ? () => setCurrentCarRentalImage((prev) => (prev + 1) % CarRentalImages.length) :
                              currentProject === 'ecommerce' ? () => setCurrentECommerceImage((prev) => (prev + 1) % ECommerceImages.length) :
                                currentProject === 'user' ? () => setCurrentUserImage((prev) => (prev + 1) % UserImages.length) :
                                  currentProject === 'aora' ? () => setCurrentAoraImage((prev) => (prev + 1) % AoraImages.length) :
                                    currentProject === 'highway' ? () => setCurrentHighwayImage((prev) => (prev + 1) % HighwayImages.length) :
                                      currentProject === 'SPA' ? () => setCurrentSPAImage((prev) => (prev + 1) % SPAImages.length) :
                                        currentProject === 'hostel' ? () => setCurrentHostelImage((prev) => (prev + 1) % HostelImages.length) :
                                          currentProject === 'calc' ? () => setCurrentCalcImage((prev) => (prev + 1) % CalcImages.length) :
                                            currentProject === 'thogakade' ? () => setCurrentCalcImage((prev) => (prev + 1) % CalcImages.length) :
                                              currentProject === 'chatApplication' ? () => setCurrentChatApplicationImage((prev) => (prev + 1) % chatApplicationImages.length) :
                                                currentProject === 'uber' ? () => setCurrentUberImage((prev) => (prev + 1) % UberImages.length) :
                                                  currentProject === 'commerce' ? () => setCurrentCommerceImage((prev) => (prev + 1) % CommerceImages.length) :
                                                    currentProject === 'POS' ? () => setCurrentThogakadeImage((prev) => (prev + 1) % ThogakadeImages.length) : () => { }}

        onPrevious={
          currentProject === 'gym' ? () => setcurrentGymImage((prev) => (prev - 1 + GymImage.length) % GymImage.length) :
            currentProject === 'shoeShop' ? () => setCurrentShoeShopImage((prev) => (prev - 1 + shoeShopImages.length) % shoeShopImages.length) :
              currentProject === 'rio' ? () => setCurrentRioImage((prev) => (prev - 1 + RioImages.length) % RioImages.length) :
                currentProject === 'portfolio' ? () => setCurrentPortfolioImage((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length) :
                  currentProject === 'connect4' ? () => setCurrentConnect4Image((prev) => (prev - 1 + connect4Images.length) % connect4Images.length) :
                    currentProject === 'portfoliov2' ? () => setCurrentPortfolioV2Image((prev) => (prev - 1 + portfolioV2Images.length) % portfolioV2Images.length) :
                      currentProject === 'studentCLI' ? () => setCurrentStudentCLIImage((prev) => (prev - 1 + studentCLIImages.length) % studentCLIImages.length) :
                        currentProject === 'todo' ? () => setCurrentToDoImage((prev) => (prev - 1 + ToDoImages.length) % ToDoImages.length) :
                          currentProject === 'currency' ? () => setCurrentCurrencyImage((prev) => (prev - 1 + CurrencyImages.length) % CurrencyImages.length) :
                            currentProject === 'carRental' ? () => setCurrentCarRentalImage((prev) => (prev - 1 + CarRentalImages.length) % CarRentalImages.length) :
                              currentProject === 'ecommerce' ? () => setCurrentECommerceImage((prev) => (prev - 1 + ECommerceImages.length) % ECommerceImages.length) :
                                currentProject === 'user' ? () => setCurrentUserImage((prev) => (prev - 1 + UserImages.length) % UserImages.length) :
                                  currentProject === 'aora' ? () => setCurrentAoraImage((prev) => (prev - 1 + AoraImages.length) % AoraImages.length) :
                                    currentProject === 'highway' ? () => setCurrentHighwayImage((prev) => (prev - 1 + HighwayImages.length) % HighwayImages.length) :
                                      currentProject === 'SPA' ? () => setCurrentSPAImage((prev) => (prev - 1 + SPAImages.length) % SPAImages.length) :
                                        currentProject === 'hostel' ? () => setCurrentHostelImage((prev) => (prev - 1 + HostelImages.length) % HostelImages.length) :
                                          currentProject === 'calc' ? () => setCurrentCalcImage((prev) => (prev - 1 + CalcImages.length) % CalcImages.length) :
                                            currentProject === 'thogakade' ? () => setCurrentThogakadeImage((prev) => (prev - 1 + ThogakadeImages.length) % ThogakadeImages.length) :
                                              currentProject === 'chatApplication' ? () => setCurrentChatApplicationImage((prev) => (prev - 1 + chatApplicationImages.length) % chatApplicationImages.length) :
                                                currentProject === 'uber' ? () => setCurrentUberImage((prev) => (prev - 1 + UberImages.length) % UberImages.length) :
                                                  currentProject === 'commerce' ? () => setCurrentCommerceImage((prev) => (prev - 1 + CommerceImages.length) % CommerceImages.length) :
                                                    currentProject === 'POS' ? () => setCurrentPOSImage((prev) => (prev - 1 + POSImages.length) % POSImages.length) : () => { }} />

    </div>
  );
}