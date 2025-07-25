import { motion } from "framer-motion";
import "./Navbar.css";
import {Link} from "react-router-dom"

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

            </motion.ul>
        </motion.nav>
}