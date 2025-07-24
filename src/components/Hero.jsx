import { motion, stagger } from "framer-motion"
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.3,
        },
    },
}

export const Hero = () => {
    return (
        <motion.section
            id="home"
            className="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >

            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div className="hero-badge">
                        <span> 👋 Hello , I'm </span>
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
                        Im a current Junior at NYU with a major in computer Science. Im currently a Desktop Technician at NYU, creating automation scripts and helping others with software. I spend most of my free time going to the gym,cooking, playing video games or coding.
                    </motion.p>

                    <motion.div
                        className="cta-buttons"
                        variants={staggerContainer}
                    >
                        <motion.a
                            href="#projects"
                            className="cta-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{scale:0.95}}
                        >
                            View My Work
                        </motion.a>

                        <motion.a 
                            href="#contacts"
                            className="cta-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{scale:0.95}}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>
                    <motion.div 
                        className="social-links"
                        variants={staggerContainer}
                    >
                        <motion.a href="https://github.com/mrl588"target="_blank">
                            <i className="fab fa-github"></i>
                        </motion.a>
                        <motion.a href="https://www.linkedin.com/in/michaelrliu/" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </motion.a>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="hero-image-container" 
                    initial={{opacity:0, x: 50}}
                    animate={{opacity:1, x: 0}}
                    transition={(0.8, 0.4)}
                >
                    <div classname="code-display">
                        <SyntaxHighlighter 
                            language="javascript" 
                            style={vscDarkPlus}
                            customStyle={{
                                margin:0, 
                                padding:"2rem", 
                                height:"100%", 
                                borderRadius: "20px",
                                background: "rgba(30,41,59,0.8",
                                backdropFilter: "blur(10px)",
                                marginBottom: 30,
                            }}
                        >
                              {`const aboutMe: DeveloperProfile = {
  codename: "Michael Liu",
  stack: {
    languages: ["JavaScript", "Python", "C++"],
    frameworks: ["React", "Next.js", "Supabase"],
  },
  traits: [
    "pixel-perfectionist",
    "API whisperer",
    "dark mode advocate",
    "terminal aesthetic enthusiast",
  ],
  missionStatement:
    "Passionate about making things work — cleanly, and intuitively",
  availability: "Available for hire",
};`}
                        </SyntaxHighlighter>
                    </div>
                    
                    <motion.div 
                        className="floating-card" 
                        animate={{y:[0,-10,0], rotate:[0,2,0]}}
                        transition={{duration:4, repeat:Infinity, ease: "easeInOut"}}
                    >
                        <div className="card-content">
                            <span className="card-icon"> 💻 </span>
                            <span className="card-text"> Current working on a MERN app </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>)
}