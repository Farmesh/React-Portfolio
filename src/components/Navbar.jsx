import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
  import { motion } from "motion/react";


const Navbar = () =>{
  return <nav className="mb-20 flex item-center justify-between py-6">
    <div className="flex flex-shrink-0 item-center">
      <h1 className="my-7 ">👋 Portfolio</h1>
    </div>
<div className=" m-8 flex item-center justify-center gap-4 text-2xl" >
 <motion.a
 onHoverStart={{rotate:20}}
 onHoverEnd={{rotate:0}}
 
 href="https://www.linkedin.com/in/farmeshkumar/"> <FaLinkedin/> </motion.a>
 <a href="https://www.instagram.com/farmesh_09"><FaInstagram/></a>
  <a href="https://github.com/Farmesh"><FaGithub/></a>

 
 </div>
  </nav>
}

export default Navbar ;