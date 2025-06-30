 import Image from "next/image";
import "./page.css"; 
import { FaHome, FaUser, FaCog, FaBriefcase, FaNewspaper, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaDribble, FaTiktok } from 'react-icons/fa';  

const Sidebar = () => (
  <div className="sidebar">
    <div>
      <h1 className="logo">Rajasthan</h1>
      <nav className="nav-links">
        <a href="#" className="nav-item"><FaHome /><span>Home</span></a>
        <a href="#" className="nav-item"><FaUser /><span>About</span></a>
        <a href="#" className="nav-item"><FaCog /><span>Service</span></a>
        <a href="#" className="nav-item"><FaBriefcase /><span>Portfolio</span></a>
        <a href="#" className="nav-item"><FaNewspaper /><span>News</span></a>
        <a href="#" className="nav-item"><FaEnvelope /><span>Contact</span></a>
      </nav>
    </div>
  </div>
);

const MainContent = () => (
  <div className="main-content">
    <img
      src="/src/app/pic.jpg"
      alt="Aayush Suthar "
      className="profile-img"
    />
    <h1 className="name">Aayush Suthar </h1>
    <p className="description">
      Creative programmer .
    </p>
    <div className="social-icons">
      <a href="#"><FaFacebookF /></a>
      <a href="#"><FaTwitter /></a>
      <a href="#"><FaInstagram /></a>
      <a href="#"><FaDribble /></a>
      <a href="#"><FaTiktok /></a>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <MainContent />
    </div>
  );
}
