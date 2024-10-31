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

// Computer Shop Management System
// import ComputerShopTheme from '../../../assets/images/projects/Computer-Shop/Theme.png';
import ComputerShopLogin from '../../../assets/images/projects/Computer-Shop/Login.png';
import ComputerShopAdminDashboard from '../../../assets/images/projects/Computer-Shop/Admin-Dashboard.png';
import ComputerShopCustomer from '../../../assets/images/projects/Computer-Shop/Customer.png';
import ComputerShopSupplier from '../../../assets/images/projects/Computer-Shop/Supplier.png';
import ComputerShopStore from '../../../assets/images/projects/Computer-Shop/Store.png';
import ComputerShopSalary from '../../../assets/images/projects/Computer-Shop/Salary.png';
import ComputerShopOrders from '../../../assets/images/projects/Computer-Shop/Orders.png';
import ComputerShopReports from '../../../assets/images/projects/Computer-Shop/Reports.png';
import ComputerShopCustomerReport from '../../../assets/images/projects/Computer-Shop/Customer-Report.png';
import ComputerShopCodes from '../../../assets/images/projects/Computer-Shop/Codes.png';

// Hostel Management System
// import HostelManagementTheme from '../../../assets/images/projects/Hostel-Management/Theme.png';
import HostelManagementHome from '../../../assets/images/projects/Hostel-Management/Home.png';
import HostelManagementAdminDashboard from '../../../assets/images/projects/Hostel-Management/Admin-Dashboard.png';
import HostelManagementStudents from '../../../assets/images/projects/Hostel-Management/Students.png';
import HostelManagementRooms from '../../../assets/images/projects/Hostel-Management/Rooms.png';
import HostelManagementReservation from '../../../assets/images/projects/Hostel-Management/Reservation.png';
import HostelManagementKeyMoney from '../../../assets/images/projects/Hostel-Management/Key-Money.png';
import HostelManagementUser from '../../../assets/images/projects/Hostel-Management/User.png';
import HostelManagementReports from '../../../assets/images/projects/Hostel-Management/Reports.png';
import HostelManagementCodes from '../../../assets/images/projects/Hostel-Management/Codes.png';

// Chat Application
// import ChatRoomTheme from '../../../assets/images/projects/Chat-Application/Theme.png';
import ChatRoom1 from '../../../assets/images/projects/Chat-Application/Chat-Room-1.png';
import ChatRoom2 from '../../../assets/images/projects/Chat-Application/Chat-Room-2.png';
import ChatApplicationCodes from '../../../assets/images/projects/Chat-Application/Codes.png';
import ChatApplicationLiveChatRoom from '../../../assets/images/projects/Chat-Application/Live-Chat-Room.gif';

// Shoe Shop Landing Page
// import ShoeShopLandingTheme from '../../../assets/images/projects/Shoe-Shop-Landing/Theme.png';
import ShoeShopLandingHome from '../../../assets/images/projects/Shoe-Shop-Landing/Home.png';
import ShoeShopLandingAbout from '../../../assets/images/projects/Shoe-Shop-Landing/About.png';
import ShoeShopLandingShoeCollection1 from '../../../assets/images/projects/Shoe-Shop-Landing/Shoe-Collection-1.png';
import ShoeShopLandingShoeCollection2 from '../../../assets/images/projects/Shoe-Shop-Landing/Shoe-Collection-2.png';
import ShoeShopLandingCTA from '../../../assets/images/projects/Shoe-Shop-Landing/CTA.png';
import ShoeShopLandingReviews from '../../../assets/images/projects/Shoe-Shop-Landing/Reviews.png';
import ShoeShopLandingDiscount from '../../../assets/images/projects/Shoe-Shop-Landing/Discount.png';
import ShoeShopLandingContacts from '../../../assets/images/projects/Shoe-Shop-Landing/Contacts.png';
import ShoeShopLandingCodes from '../../../assets/images/projects/Shoe-Shop-Landing/Codes.png';

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

// LinkedIn Clone
// import LinkedInCloneTheme from '../../../assets/images/projects/LinkedIn-Clone/Theme.png';
import LinkedInCloneHome from '../../../assets/images/projects/LinkedIn-Clone/Home.png';
import LinkedInCloneNetwork from '../../../assets/images/projects/LinkedIn-Clone/Network.png';
import LinkedInClonePost from '../../../assets/images/projects/LinkedIn-Clone/Post.png';
import LinkedInCloneNotification from '../../../assets/images/projects/LinkedIn-Clone/Notification.png';
import LinkedInCloneJobs from '../../../assets/images/projects/LinkedIn-Clone/Jobs.png';
import LinkedInCloneProfile from '../../../assets/images/projects/LinkedIn-Clone/Profile.png';
import LinkedInCloneCodes from '../../../assets/images/projects/LinkedIn-Clone/Codes.png';

// MERN POS System
// import MERNPOSTheme from '../../../assets/images/projects/MERN-POS/Theme.png';
import MERNPOSCustomer from '../../../assets/images/projects/MERN-POS/Customer.png';
import MERNPOSItem from '../../../assets/images/projects/MERN-POS/Item.png';
import MERNPOSCodes from '../../../assets/images/projects/MERN-POS/Codes.png';

// Connect 4 Game
// import Connect4Theme from '../../../assets/images/projects/Connect-4-Game/Theme.png';
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
// import StudentManagementTheme from '../../../assets/images/projects/Student-CLI/Theme.png';
import StudentManagementCodes from '../../../assets/images/projects/Student-CLI/Codes.png';

// POS FrontEnd - React
// import POSFrontendTheme from '../../../assets/images/projects/POS-FrontEnd-React/Theme.png';
import POSFrontendHome from '../../../assets/images/projects/POS-FrontEnd-React/Home.png';
import POSFrontendCustomer from '../../../assets/images/projects/POS-FrontEnd-React/Customer.png';
import POSFrontendItem from '../../../assets/images/projects/POS-FrontEnd-React/Item.png';
import POSFrontendOrder from '../../../assets/images/projects/POS-FrontEnd-React/Order.png';
import POSFrontendOrderDetails from '../../../assets/images/projects/POS-FrontEnd-React/OrderDetails.png';
import POSFrontendCodes from '../../../assets/images/projects/POS-FrontEnd-React/Codes.png';

// POS BackEnd - Spring
// import POSBackendSpringTheme from '../../../assets/images/projects/POS-BackEnd-Spring/Theme.png';
import POSBackendSpringCustomer from '../../../assets/images/projects/POS-BackEnd-Spring/Customer.png';
import POSBackendSpringItem from '../../../assets/images/projects/POS-BackEnd-Spring/Item.png';
import POSBackendSpringCodes from '../../../assets/images/projects/POS-BackEnd-Spring/Codes.png';

// POS BackEnd - SpringBoot
// import POSBackendSpringBootTheme from '../../../assets/images/projects/POS-BackEnd-SpringBoot/Theme.png';
import POSBackendSpringBootCustomer from '../../../assets/images/projects/POS-BackEnd-SpringBoot/Customer.png';
import POSBackendSpringBootItem from '../../../assets/images/projects/POS-BackEnd-SpringBoot/Item.png';
import POSBackendSpringBootCodes from '../../../assets/images/projects/POS-BackEnd-SpringBoot/Codes.png';

// JavaEE POS
// import JavaEEPOSTheme from '../../../assets/images/projects/JavaEE-POS/Theme.png';
import JavaEEPOSHome from '../../../assets/images/projects/JavaEE-POS/Home.png';
import JavaEEPOSCustomer from '../../../assets/images/projects/JavaEE-POS/Customer.png';
import JavaEEPOSItem from '../../../assets/images/projects/JavaEE-POS/Item.png';
import JavaEEPOSOrders from '../../../assets/images/projects/JavaEE-POS/Orders.png';
import JavaEEPOSOrderDetails from '../../../assets/images/projects/JavaEE-POS/OrderDetails.png';
import JavaEEPOSPOSCodes from '../../../assets/images/projects/JavaEE-POS/Codes.png';

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

const computerShopImages = [
  // ComputerShopTheme,
  ComputerShopLogin,
  ComputerShopAdminDashboard,
  ComputerShopCustomer,
  ComputerShopSupplier,
  ComputerShopStore,
  ComputerShopSalary,
  ComputerShopOrders,
  ComputerShopReports,
  ComputerShopCustomerReport,
  ComputerShopCodes,
];

const hostelManagementImages = [
  // HostelManagementTheme,
  HostelManagementHome,
  HostelManagementAdminDashboard,
  HostelManagementStudents,
  HostelManagementRooms,
  HostelManagementReservation,
  HostelManagementKeyMoney,
  HostelManagementUser,
  HostelManagementReports,
  HostelManagementCodes,
];

const chatApplicationImages = [
  // ChatRoomTheme,
  ChatRoom1,
  ChatRoom2,
  ChatApplicationCodes,
  ChatApplicationLiveChatRoom,
];

const shoeShopLandingImages = [
  // ShoeShopLandingTheme,
  ShoeShopLandingHome,
  ShoeShopLandingAbout,
  ShoeShopLandingShoeCollection1,
  ShoeShopLandingShoeCollection2,
  ShoeShopLandingCTA,
  ShoeShopLandingReviews,
  ShoeShopLandingDiscount,
  ShoeShopLandingContacts,
  ShoeShopLandingCodes,
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
  PortfolioCodes,
];

const linkedInCloneImages = [
  // LinkedInCloneTheme,
  LinkedInCloneHome,
  LinkedInCloneNetwork,
  LinkedInClonePost,
  LinkedInCloneNotification,
  LinkedInCloneJobs,
  LinkedInCloneProfile,
  LinkedInCloneCodes,
];

const mernPOSImages = [
  // MERNPOSTheme,
  MERNPOSCustomer,
  MERNPOSItem,
  MERNPOSCodes,
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

const posFrontendImages = [
  // POSFrontendTheme,
  POSFrontendHome,
  POSFrontendCustomer,
  POSFrontendItem,
  POSFrontendOrder,
  POSFrontendOrderDetails,
  POSFrontendCodes
];

const posBackendSpringImages = [
  // POSBackendSpringTheme,
  POSBackendSpringCustomer,
  POSBackendSpringItem,
  POSBackendSpringCodes
];

const posBackendSpringBootImages = [
  // POSBackendSpringBootTheme,
  POSBackendSpringBootCustomer,
  POSBackendSpringBootItem,
  POSBackendSpringBootCodes
];

const javaeePOSImages = [
  // JavaEEPOSTheme,
  JavaEEPOSHome,
  JavaEEPOSCustomer,
  JavaEEPOSItem,
  JavaEEPOSOrders,
  JavaEEPOSOrderDetails,
  JavaEEPOSPOSCodes
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
  const [currentComputerShopImage, setCurrentComputerShopImage] = useState(0);
  const [currentHostelManagementImage, setCurrentHostelManagementImage] = useState(0);
  const [currentChatApplicationImage, setCurrentChatApplicationImage] = useState(0);
  const [currentShoeShopLandingImage, setCurrentShoeShopLandingImage] = useState(0);
  const [currentPortfolioImage, setCurrentPortfolioImage] = useState(0);
  const [currentLinkedinImage, setCurrentLinkedinImage] = useState(0);
  const [currentMernPOSImage, setCurrentMernPOSImage] = useState(0);
  const [currentConnect4Image, setCurrentConnect4Image] = useState(0);
  const [currentPortfolioV2Image, setCurrentPortfolioV2Image] = useState(0);
  const [currentStudentCLIImage, setCurrentStudentCLIImage] = useState(0);
  const [currentPOSFrontendImage, setCurrentPOSFrontendImage] = useState(0);
  const [currentPOSBackendSpringImage, setCurrentPOSBackendSpringImage] = useState(0);
  const [currentPOSBackendSpringBootImage, setCurrentPOSBackendSpringBootImage] = useState(0);
  const [currentJavaEEPOSImage, setCurrentJavaEEPOSImage] = useState(0);

  const openModal = (projectType) => {
    setIsModalOpen(true);
    setCurrentProject(projectType);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg pt-20 pb-5">
      <h1 className="text-4xl text-primary font-bold text-center text-neonBlue mb-10 fixed top-0 left-0 right-0 z-10 mt-20 bg-bg pb-5">My Projects</h1>

      <div className="max-w-7xl px-6 space-y-32 mt-20">

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

        <ProjectCard projectName="Car Rental Website"
          description="This is Responsive Premium Car Rental Front-End Website. Using HTML, CSS, JavaScript & Bootstrap"
          technologies={["HTML", "CSS", "Javascript", "Bootstrap"]}
          githubLink="https://github.com/ravindudinushan/Car-Rental"
          images={CarRentalImages}
          currentImageIndex={currentCarRentalImage}
          onNextImage={() => setCurrentCarRentalImage((prev) => (prev + 1) % CarRentalImages.length)}
          onPreviousImage={() => setCurrentCarRentalImage((prev) => (prev - 1 + CarRentalImages.length) % CarRentalImages.length)}
          onClickImage={() => openModal('carRental')} />

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
          description="My Portfolio highlights my top projects and skills, showcasing my creativity, dedication, and growth. It reflects my approach to problem-solving and continuous learning, offering insights into my innovative solutions and commitment to excellence."
          technologies={["HTML", "CSS", "JavaScript"]}
          githubLink="https://ravindudinushan.github.io/MyPortfolio/"
          images={portfolioImages}
          currentImageIndex={currentPortfolioImage}
          onNextImage={() => setCurrentPortfolioImage((prev) => (prev + 1) % portfolioImages.length)}
          onPreviousImage={() => setCurrentPortfolioImage((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length)}
          onClickImage={() => openModal('portfolio')} />

        <ProjectCard projectName="Computer Shop Management System"
          description="The Computer Shop Management System is a comprehensive standalone application built using JavaFX. It offers an 
          intuitive interface for managing customers, employees, suppliers, inventory, and orders. The system also integrates Jasper 
          Reports for generating detailed reports, providing an efficient solution for managing various aspects of a computer shop's operations."
          technologies={["Java", "JavaFX", "Maven", "MySQL", "Jasper Report"]}
          githubLink="https://github.com/Ravindu-Dinushan/Computershop-Management-System-1st-Sem-Final"
          images={computerShopImages}
          currentImageIndex={currentComputerShopImage}
          onNextImage={() => setCurrentComputerShopImage((prev) => (prev + 1) % computerShopImages.length)}
          onPreviousImage={() => setCurrentComputerShopImage((prev) => (prev - 1 + computerShopImages.length) % computerShopImages.length)}
          onClickImage={() => openModal('computerShop')} />

        <ProjectCard projectName="Hostel Management System"
          description="The Hostel Management System, built with JavaFX, provides an intuitive interface for managing students, room allocations,
                reservations, and user logins. Students can secure rooms by paying key money, streamlining hostel operations and record-keeping."
          technologies={["Java", "JavaFX", "Maven", "MySQL", "Hibernate"]}
          githubLink="https://github.com/Ravindu-Dinushan/Hostel-Management-System"
          images={hostelManagementImages}
          currentImageIndex={currentHostelManagementImage}
          onNextImage={() => setCurrentHostelManagementImage((prev) => (prev + 1) % hostelManagementImages.length)}
          onPreviousImage={() => setCurrentHostelManagementImage((prev) => (prev - 1 + hostelManagementImages.length) % hostelManagementImages.length)}
          onClickImage={() => openModal('hostelManagement')} />

        <ProjectCard projectName="Chat Application"
          description="Introducing our innovative Multi-Threaded Chat Application, built in Java with a client-server architecture for real-time communication. Utilizing socket programming and multi-threading in Java, this application enables fast and secure messaging, file sharing, and multimedia exchange across both local and distributed networks."
          technologies={["Java", "JavaFX", "Java Threads", "Java Sockets"]}
          githubLink="https://github.com/Ravindu-Dinushan/ChatApplication"
          images={chatApplicationImages}
          currentImageIndex={currentChatApplicationImage}
          onNextImage={() => setCurrentChatApplicationImage((prev) => (prev + 1) % chatApplicationImages.length)}
          onPreviousImage={() => setCurrentChatApplicationImage((prev) => (prev - 1 + chatApplicationImages.length) % chatApplicationImages.length)}
          onClickImage={() => openModal('chatApplication')} />

        <ProjectCard projectName="Shoe Shop Landing Page"
          description="This Shoe Shop Landing Page houses the code for our sleek and user-friendly site, crafted to highlight our brand and product offerings. Designed with a modern and responsive layout, this page ensures a seamless user experience across all devices."
          technologies={["HTML", "CSS", "JavaScript"]}
          githubLink="https://github.com/Ravindu-Dinushan/Shoe-Shop-Landing-Page"
          images={shoeShopLandingImages}
          currentImageIndex={currentShoeShopLandingImage}
          onNextImage={() => setCurrentShoeShopLandingImage((prev) => (prev + 1) % shoeShopLandingImages.length)}
          onPreviousImage={() => setCurrentShoeShopLandingImage((prev) => (prev - 1 + shoeShopLandingImages.length) % shoeShopLandingImages.length)}
          onClickImage={() => openModal('shoeShopLanding')} />

        <ProjectCard projectName="LinkedIn Clone - Mobile Application"
          description="This is my First Mobile Application: LinkedIn Clone App, developed using React Native. I focused on replicating the core functionalities and UI of LinkedIn to ensure a user-friendly experience. An Android Emulator was used for testing and debugging, which was essential in fine-tuning the app's performance and usability."
          technologies={["React Native", "Android Studio", "VS Code"]}
          githubLink="https://github.com/Ravindu-Dinushan/LinkedIn-Clone-App"
          images={linkedInCloneImages}
          currentImageIndex={currentLinkedinImage}
          onNextImage={() => setCurrentLinkedinImage((prev) => (prev + 1) % linkedInCloneImages.length)}
          onPreviousImage={() => setCurrentLinkedinImage((prev) => (prev - 1 + linkedInCloneImages.length) % linkedInCloneImages.length)}
          onClickImage={() => openModal('linkedinClone')} />

        <ProjectCard projectName="Simple MERN POS"
          description="This is my First MERN Application .A straightforward Point of Sale system developed using the MERN stack. This application includes essential features like customer management, item management, and order placement, offering a comprehensive solution for basic sales operations."
          technologies={["React.js", "Axios", "Node.js", "Express.js", "MongoDB"]}
          githubLink="https://github.com/Ravindu-Dinushan/MERN-POS"
          images={mernPOSImages}
          currentImageIndex={currentMernPOSImage}
          onNextImage={() => setCurrentMernPOSImage((prev) => (prev + 1) % mernPOSImages.length)}
          onPreviousImage={() => setCurrentMernPOSImage((prev) => (prev - 1 + mernPOSImages.length) % mernPOSImages.length)}
          onClickImage={() => openModal('mernPOS')} />

        <ProjectCard projectName="Connect 4 Game"
          description="I created this Connect 4 game as a way to deepen my understanding of Object-Oriented Programming (OOP) in Java. Through this project, I explored the principles of encapsulation, inheritance, polymorphism and abstraction, all while bringing a classic game to life."
          technologies={["Java", "JavaFX", "OOP"]}
          githubLink="https://github.com/Ravindu-Dinushan/connect-four-assignment"
          images={connect4Images}
          currentImageIndex={currentConnect4Image}
          onNextImage={() => setCurrentConnect4Image((prev) => (prev + 1) % connect4Images.length)}
          onPreviousImage={() => setCurrentConnect4Image((prev) => (prev - 1 + connect4Images.length) % connect4Images.length)}
          onClickImage={() => openModal('connect4')} />

        <ProjectCard projectName="JavaEE POS"
          description="This is my first simple POS system using Java EE, with a frontend for the user interface and a backend built with Java EE to manage the API."
          technologies={["HTML", "CSS", "JS", "AJAX", "JavaEE", "MySQL"]}
          githubLink="https://github.com/Ravindu-Dinushan/JavaEE-POS"
          images={javaeePOSImages}
          currentImageIndex={currentJavaEEPOSImage}
          onNextImage={() => setCurrentJavaEEPOSImage((prev) => (prev + 1) % javaeePOSImages.length)}
          onPreviousImage={() => setCurrentJavaEEPOSImage((prev) => (prev - 1 + javaeePOSImages.length) % javaeePOSImages.length)}
          onClickImage={() => openModal('javaeePOS')} />

        <ProjectCard projectName="POS FrontEnd - React"
          description="This is my first project using React, where I built a simple POS frontend designed to integrate with a backend powered by Java EE, Spring, and Spring Boot."
          technologies={["React", "Axios", "VS Code"]}
          githubLink="https://github.com/Ravindu-Dinushan/POS-FrontEnd-React"
          images={posFrontendImages}
          currentImageIndex={currentPOSFrontendImage}
          onNextImage={() => setCurrentPOSFrontendImage((prev) => (prev + 1) % posFrontendImages.length)}
          onPreviousImage={() => setCurrentPOSFrontendImage((prev) => (prev - 1 + posFrontendImages.length) % posFrontendImages.length)}
          onClickImage={() => openModal('posFrontend')} />

        <ProjectCard projectName="POS BackEnd - Spring"
          description="This is my first project where I've implemented a Spring based BackEnd for a POS system. It utilizes Spring and Spring Data JPA to handle business logic and data persistence, providing a robust and scalable solution for managing transactions and inventory."
          technologies={["Spring", "Spring Data JPA", "MySQL"]}
          githubLink="https://github.com/Ravindu-Dinushan/POS-BackEnd-Spring"
          images={posBackendSpringImages}
          currentImageIndex={currentPOSBackendSpringImage}
          onNextImage={() => setCurrentPOSBackendSpringImage((prev) => (prev + 1) % posBackendSpringImages.length)}
          onPreviousImage={() => setCurrentPOSBackendSpringImage((prev) => (prev - 1 + posBackendSpringImages.length) % posBackendSpringImages.length)}
          onClickImage={() => openModal('posBackendSpring')} />

        <ProjectCard projectName="POS BackEnd - SpringBoot"
          description="This is my first project where I've implemented a SpringBoot based BackEnd for a POS system. It utilizes Spring Boot and Spring Data JPA to handle business logic and data persistence, providing a robust and scalable solution for managing transactions and inventory."
          technologies={["SpringBoot", "Spring Data JPA", "MySQL"]}
          githubLink="https://github.com/Ravindu-Dinushan/POS-BackEnd-SpringBoot"
          images={posBackendSpringBootImages}
          currentImageIndex={currentPOSBackendSpringBootImage}
          onNextImage={() => setCurrentPOSBackendSpringBootImage((prev) => (prev + 1) % posBackendSpringBootImages.length)}
          onPreviousImage={() => setCurrentPOSBackendSpringBootImage((prev) => (prev - 1 + posBackendSpringBootImages.length) % posBackendSpringBootImages.length)}
          onClickImage={() => openModal('posBackendSpringBoot')} />

        <ProjectCard projectName="Student Management System - CLI"
          description="This is a Command Line Interface (CLI) application designed to manage student information efficiently. This is the Course-Work of Programming Fundermentals."
          technologies={["Java", "Fundermentals"]}
          githubLink="https://github.com/Ravindu-Dinushan/Student-Management-System-CLI"
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
              currentProject === 'computerShop' ? computerShopImages[currentComputerShopImage] :
                currentProject === 'hostelManagement' ? hostelManagementImages[currentHostelManagementImage] :
                  currentProject === 'chatApplication' ? chatApplicationImages[currentChatApplicationImage] :
                    currentProject === 'shoeShopLanding' ? shoeShopLandingImages[currentShoeShopLandingImage] :
                      currentProject === 'portfolio' ? portfolioImages[currentPortfolioImage] :
                        currentProject === 'linkedinClone' ? linkedInCloneImages[currentLinkedinImage] :
                          currentProject === 'mernPOS' ? mernPOSImages[currentMernPOSImage] :
                            currentProject === 'connect4' ? connect4Images[currentConnect4Image] :
                              currentProject === 'portfoliov2' ? portfolioV2Images[currentPortfolioV2Image] :
                                currentProject === 'studentCLI' ? studentCLIImages[currentStudentCLIImage] :
                                  currentProject === 'posFrontend' ? posFrontendImages[currentPOSFrontendImage] :
                                    currentProject === 'posBackendSpring' ? posBackendSpringImages[currentPOSBackendSpringImage] :
                                      currentProject === 'posBackendSpringBoot' ? posBackendSpringBootImages[currentPOSBackendSpringBootImage] :
                                        currentProject === 'todo' ? ToDoImages[currentToDoImage] :
                                          currentProject === 'currency' ? CurrencyImages[currentCurrencyImage] :
                                            currentProject === 'carRental' ? CarRentalImages[currentCarRentalImage] :
                                              currentProject === 'ecommerce' ? ECommerceImages[currentECommerceImage] :
                                                currentProject === 'javaeePOS' ? javaeePOSImages[currentJavaEEPOSImage] : ''}

        onNext={
          currentProject === 'gym' ? () => setcurrentGymImage((prev) => (prev + 1) % GymImage.length) :
            currentProject === 'shoeShop' ? () => setCurrentShoeShopImage((prev) => (prev + 1) % shoeShopImages.length) :
              currentProject === 'computerShop' ? () => setCurrentComputerShopImage((prev) => (prev + 1) % computerShopImages.length) :
                currentProject === 'hostelManagement' ? () => setCurrentHostelManagementImage((prev) => (prev + 1) % hostelManagementImages.length) :
                  currentProject === 'chatApplication' ? () => setCurrentChatApplicationImage((prev) => (prev + 1) % chatApplicationImages.length) :
                    currentProject === 'shoeShopLanding' ? () => setCurrentShoeShopLandingImage((prev) => (prev + 1) % shoeShopLandingImages.length) :
                      currentProject === 'portfolio' ? () => setCurrentPortfolioImage((prev) => (prev + 1) % portfolioImages.length) :
                        currentProject === 'linkedinClone' ? () => setCurrentLinkedinImage((prev) => (prev + 1) % linkedInCloneImages.length) :
                          currentProject === 'mernPOS' ? () => setCurrentMernPOSImage((prev) => (prev + 1) % mernPOSImages.length) :
                            currentProject === 'connect4' ? () => setCurrentConnect4Image((prev) => (prev + 1) % connect4Images.length) :
                              currentProject === 'portfoliov2' ? () => setCurrentPortfolioV2Image((prev) => (prev + 1) % portfolioV2Images.length) :
                                currentProject === 'studentCLI' ? () => setCurrentStudentCLIImage((prev) => (prev + 1) % studentCLIImages.length) :
                                  currentProject === 'posFrontend' ? () => setCurrentPOSFrontendImage((prev) => (prev + 1) % posFrontendImages.length) :
                                    currentProject === 'posBackendSpring' ? () => setCurrentPOSBackendSpringImage((prev) => (prev + 1) % posBackendSpringImages.length) :
                                      currentProject === 'posBackendSpringBoot' ? () => setCurrentPOSBackendSpringBootImage((prev) => (prev + 1) % posBackendSpringBootImages.length) :
                                        currentProject === 'todo' ? () => setCurrentToDoImage((prev) => (prev + 1) % ToDoImages.length) :
                                          currentProject === 'currency' ? () => setCurrentCurrencyImage((prev) => (prev + 1) % CurrencyImages.length) :
                                            currentProject === 'carRental' ? () => setCurrentCarRentalImage((prev) => (prev + 1) % CarRentalImages.length) :
                                              currentProject === 'ecommerce' ? () => setCurrentECommerceImage((prev) => (prev + 1) % ECommerceImages.length) :
                                                currentProject === 'javaeePOS' ? () => setCurrentJavaEEPOSImage((prev) => (prev + 1) % javaeePOSImages.length) : () => { }}

        onPrevious={
          currentProject === 'gym' ? () => setcurrentGymImage((prev) => (prev - 1 + GymImage.length) % GymImage.length) :
            currentProject === 'shoeShop' ? () => setCurrentShoeShopImage((prev) => (prev - 1 + shoeShopImages.length) % shoeShopImages.length) :
              currentProject === 'computerShop' ? () => setCurrentComputerShopImage((prev) => (prev - 1 + computerShopImages.length) % computerShopImages.length) :
                currentProject === 'hostelManagement' ? () => setCurrentHostelManagementImage((prev) => (prev - 1 + hostelManagementImages.length) % hostelManagementImages.length) :
                  currentProject === 'chatApplication' ? () => setCurrentChatApplicationImage((prev) => (prev - 1 + chatApplicationImages.length) % chatApplicationImages.length) :
                    currentProject === 'shoeShopLanding' ? () => setCurrentShoeShopLandingImage((prev) => (prev - 1 + shoeShopLandingImages.length) % shoeShopLandingImages.length) :
                      currentProject === 'portfolio' ? () => setCurrentPortfolioImage((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length) :
                        currentProject === 'linkedinClone' ? () => setCurrentLinkedinImage((prev) => (prev - 1 + linkedInCloneImages.length) % linkedInCloneImages.length) :
                          currentProject === 'mernPOS' ? () => setCurrentMernPOSImage((prev) => (prev - 1 + mernPOSImages.length) % mernPOSImages.length) :
                            currentProject === 'connect4' ? () => setCurrentConnect4Image((prev) => (prev - 1 + connect4Images.length) % connect4Images.length) :
                              currentProject === 'portfoliov2' ? () => setCurrentPortfolioV2Image((prev) => (prev - 1 + portfolioV2Images.length) % portfolioV2Images.length) :
                                currentProject === 'studentCLI' ? () => setCurrentStudentCLIImage((prev) => (prev - 1 + studentCLIImages.length) % studentCLIImages.length) :
                                  currentProject === 'posFrontend' ? () => setCurrentPOSFrontendImage((prev) => (prev - 1 + posFrontendImages.length) % posFrontendImages.length) :
                                    currentProject === 'posBackendSpring' ? () => setCurrentPOSBackendSpringImage((prev) => (prev - 1 + posBackendSpringImages.length) % posBackendSpringImages.length) :
                                      currentProject === 'posBackendSpringBoot' ? () => setCurrentPOSBackendSpringBootImage((prev) => (prev - 1 + posBackendSpringBootImages.length) % posBackendSpringBootImages.length) :
                                        currentProject === 'todo' ? () => setCurrentToDoImage((prev) => (prev - 1 + ToDoImages.length) % ToDoImages.length) :
                                          currentProject === 'currency' ? () => setCurrentCurrencyImage((prev) => (prev - 1 + CurrencyImages.length) % CurrencyImages.length) :
                                            currentProject === 'carRental' ? () => setCurrentCarRentalImage((prev) => (prev - 1 + CarRentalImages.length) % CarRentalImages.length) :
                                              currentProject === 'ecommerce' ? () => setCurrentECommerceImage((prev) => (prev - 1 + ECommerceImages.length) % ECommerceImages.length) :
                                                currentProject === 'javaeePOS' ? () => setCurrentJavaEEPOSImage((prev) => (prev - 1 + javaeePOSImages.length) % javaeePOSImages.length) : () => { }} />

    </div>
  );
}