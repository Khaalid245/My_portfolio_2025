import logo from '../assets/khalid3.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className='flex items-center space-x-5'>
           
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className='mx-2 w-10 w-10 h-10 rounded-full ' />
      </div>
      <a href="" className='font-thin tracking-light text-2xl'>Khalid <span className='text-blue-300 text-bold'>Abdillahi</span></a>
      </div>
      <div className='flex items-center space-x-4'>
      <a href="https://www.linkedin.com/in/khalid-abdillahi-269871276/">  <FaLinkedin /></a>
       <a href="https://github.com/Khaalid245?tab=repositories"> <FaGithub /></a>
        <FaTwitterSquare />
        <a href="https://www.instagram.com/"><FaInstagram /></a>
      </div>
    </nav>
  );
}

export default Navbar;
