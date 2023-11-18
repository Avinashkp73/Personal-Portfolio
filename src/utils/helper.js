import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaInstagram,
  FaLinkedinIn,
  FaRenren,
  FaUser,

} from "react-icons/fa6";
import {
  Movierev,
  Panda,
  Panda2,
  Tictac,
  Ecommerce,
  Spotify,
  NGO,
  Notesapp,
  Weatherapp,
} from "../assets";

export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    uri: "https://www.facebook.com/Iamavinashkp/",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/avinash-kumar-669131209/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/Avinashkp73",
    color: "#fff",
  },
  {
    id: `youtube-${Date.now()}`,
    Icon: FaInstagram,
    uri: "https://www.instagram.com/avinash_k_p_7/",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `movierev-${Date.now()}`,
    name: "Movie Review App",
    imgSrc: Movierev,
    gitURL: "https://github.com/Avinashkp73/Movies_Review",
  },
  {
    id: `panda-${Date.now()}`,
    name: "RealEstate MERN Web App",
    imgSrc: Panda,
    gitURL: "https://github.com/Avinashkp73/Real-Estate-MERN",
  },
  {
    id: `tictac-${Date.now()}`,
    name: "TIC TAC TOE",
    imgSrc: Tictac,
    gitURL: "https://github.com/Avinashkp73/TicTacToe_React",
  },
 
  {
    id: `spotify-${Date.now()}`,
    name: "Spotify Clone for Premium Spotify User",
    imgSrc: Spotify,
    gitURL: "https://github.com/Avinashkp73/Sportify_premium-musicplayer",
  },
  {
    id: `ngo-${Date.now()}`,
    name: "Android Study Jams NGO Connector App",
    imgSrc: NGO,
    gitURL: "https://github.com/Avinashkp73/ASJ_NGO_app",
  },
  {
    id: `notesapp-${Date.now()}`,
    name: "Note Making App with CRUD",
    imgSrc: Notesapp,
    gitURL: "https://github.com/Avinashkp73/NotesApp-backend",
  },
  {
    id: `weatherapp-${Date.now()}`,
    name: "Weather App",
    imgSrc: Weatherapp,
    gitURL: "https://github.com/Avinashkp73/Javascript_weather_app",
  },
  {
    id: `ecommerce-${Date.now()}`,
    name: "Frontend Ecommerce Web App",
    imgSrc: Ecommerce,
    gitURL: "https://github.com/Avinashkp73/E-commerce-frontendapp",
  },
  {
    id: `panda2-${Date.now()}`,
    name: "RealEstate MERN",
    imgSrc: Panda2,
    gitURL: "https://github.com/Avinashkp73/Real-Estate-MERN",
  },
];
