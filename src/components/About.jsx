import { animate, motion } from "framer-motion";
import "./About.css";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.4 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const About = () => {
  return (
    <motion.section
        className="about"
        initial={{opacity:0}} 
        animate={{opacity:1}}
        transition={{duration:1.2, delay:.2}}
    >
      <motion.div
        className="about-box"
        variants={staggerContainer}
        initial="initial"
        animate="animate">
        <motion.div className="about-me">
          <motion.h1 className="about-header"> About Me </motion.h1>
          <motion.p className="about-text">
            Im a current Junior at NYU with a major in computer Science. Im
            currently a Desktop Technician at NYU, creating automation scripts
            and helping others with software. I spend most of my free time going
            to the gym,cooking, playing video games with friends or coding.
          </motion.p>
        </motion.div>
        <motion.div className="about-images">
            <motion.img id="profile-picture" src="/pictures/SafetyTag.jpg" alt="Profile Picture"/>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
