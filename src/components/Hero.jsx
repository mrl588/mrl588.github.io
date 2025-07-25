import { motion, stagger } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Hero.css";
import { Link } from "react-router-dom";
const MotionLink = motion(Link);

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

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.3 }}
            >
              Hello, I'm
            </motion.span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Michael Liu
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Aspiring Software Engineer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            Passionate about making things work — cleanly, and intuitively
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <MotionLink whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            to="/portfolio" className="cta-primary"
            > 
                View My Work
            </MotionLink>

            <MotionLink 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}  
              to="/contact" 
              className="cta-secondary"
            >
                Contact Me
            </MotionLink>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/mrl588" target="_blank">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/michaelrliu/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={(0.8, 0.4)}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="javascript"
              style={oneLight}
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                minHeight: "auto",
                borderRadius: "20px",
                background: "rgba(252, 252, 252, 0.95)",
                backdropFilter: "blur(10px)",
                marginBottom: 30,
                border: "1px solid rgba(139, 115, 85, 0.2)",
                boxShadow: "0 8px 32px rgba(139, 115, 85, 0.1)",
                overflowX: "hidden",
                overflowY: "visible",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                maxWidth: "100%",
              }}
            >
              {`const aboutMe: DeveloperProfile = {
  user: "Michael Liu",
  stack: {
    languages: ["JavaScript", "Python", "C++"],
    frameworks: ["React", "Next.js", "Django"],
  },
  list: [
    "communication pro",
    "teamwork specialist",
    "bug-squashing problem solver",
],
  string:
    "Junior at NYU · Desktop Technician",
  status: "Available for hire",
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text"> Current working on a MERN app </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
