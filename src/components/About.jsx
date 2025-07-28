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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
    >
      <motion.div
        id="about-box"
        className="about-box"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div className="about-me">
          <motion.h1 className="about-header"> About Me </motion.h1>
          <motion.p className="about-text">
            I'm a current Junior at NYU majoring in Computer Science. I work as
            a Desktop Technician at NYU, where I assist with software
            troubleshooting and create automation scripts to streamline support
            tasks. Outside of work and school, I spend most of my time at the
            gym, cooking, gaming with friends, or coding personal projects. I
            enjoy solving problems, learning new technologies, and staying
            active both mentally and physically.
          </motion.p>
        </motion.div>
        <motion.div className="about-images">
          <motion.img
            id="profile-picture"
            src="/pictures/ProfilePicture.jpeg"
            alt="Profile Picture"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
