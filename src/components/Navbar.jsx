import { motion } from "framer-motion";
import "./Navbar.css";
import {Link} from "react-router-dom"
import {useState} from "react"

const fadeInUp = {
    initial : {opacity:0, y:20},
    animate: {opacity: 1, y:0},
    transition: {duration: 0.6},
}

const staggerContainer = {
    animate: {
        transition:{
            staggerChildren: 0.3,
        },
    },
}

export const Navbar = () => {

    const[isSidebarOpen, setIsSidebaOpen] = useState(false);

    const toggleSidebar = () =>{
        setIsSidebaOpen(prev => !prev);
    }

    return <motion.nav 
        className="navbar" 
        initial ={{y:-100}} 
        animate ={{y:0}} 
        transition={{duration:0.6, ease:"easeOut"}}
        >
            
            <motion.div 
                className="logo" 
                whileHover= {{scale:1.05}}
                whileTap = {{scale:0.95}}
                > 
                ML
            </motion.div>

            <motion.ul className="nav-links" 
            variants={staggerContainer} 
            initial="initial" 
            animate  ="animate"
            >
                <motion.li variants ={fadeInUp} 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.95}}
                >
                    <Link to="/"> Home </Link>
                </motion.li>

                <motion.li variants ={fadeInUp}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.95}}
                >
                    <Link to="/portfolio"> Portfolio </Link>
                </motion.li>

                <motion.li variants ={fadeInUp}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.95}}
                >
                    <Link to="/contact"> Contact </Link>
                </motion.li>
                
                <motion.li
                    variants={fadeInUp}
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}
                >
                    <a href="/pictures/ResumeWeb.pdf"> Resume </a>
                </motion.li>
            </motion.ul>

            <motion.ul className={`nav-sidebar ${isSidebarOpen ? "show" : ""}`}
            variants={staggerContainer} 
            initial="initial" 
            animate  ="animate"
            >
                <motion.li 
                className="close-icon"
                variants ={fadeInUp} 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.95}}
                onClick={toggleSidebar}
                >
                    <i className="fa-solid fa-xmark"></i>
                </motion.li>
                
                <motion.li variants ={fadeInUp} 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.95}}
                >
                    <Link to="/"> Home </Link>
                </motion.li>

                <motion.li variants ={fadeInUp}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.95}}
                >
                    <Link to="/portfolio"> Portfolio </Link>
                </motion.li>

                <motion.li variants ={fadeInUp}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.95}}
                >
                    <Link to="/contact"> Contact </Link>
                </motion.li>
                
                <motion.li
                    variants={fadeInUp}
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}
                >
                    <a href="/pictures/ResumeWeb.pdf"> Resume </a>
                </motion.li>

            </motion.ul>

            <motion.li
                className="hamburger"
                    variants={fadeInUp}
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}
                    onClick={toggleSidebar}
                >
                    <i class="fa-solid fa-bars"></i>
                </motion.li>
        </motion.nav>
}