import { motion } from "framer-motion";
import "./Portfolio.css";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const Portfolio = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 variants={fadeInUp} initial="initial" animate="animate">
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <a
          href="https://github.com/mrl588/secure-lingo"
          target="_blank"
          className="project-link"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/pictures/SafeBrowsingLogo.jpg')",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3> SafeBrowsing </h3>
            <p>
              SafeBrowsing is a Chrome extension and web app that helps users
              stay safe online. The extension analyzes websites for harmful,
              AI-generated, or scam content, while the web app offers free
              security lessons with quizzes and progress tracking. <br/>Notes: First Hackathon ever, learned a completely "new" languauge, pystream and had to code my butt off for 24 hours.
            </p>
            <div className="project-tech">
              <span>Flask</span>
              <span>AI</span>
              <span>Django</span>
              <span>Pystream</span>
            </div>
          </motion.div>
        </a>

        <a href="https://github.com/mrl588/ShopBot"
          target="_blank"
          className="project-link"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: "url('/pictures/AutoBuy.jpg')" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3> AutoBuy </h3>
            <p>
              AutoBuy is a Selenium-powered automation bot that monitors Best Buy
              for product availability and autonomously completes purchases. It
              uses stealth techniques and human-like interaction patterns to
              bypass bot detection and seamlessly navigate the checkout process. <br/>Notes: One of the first times I ever went outside my coding comfort box. I just googled and learned whatever I needed to finish this passion project. First time working at API's also quite the experience.
            </p>
            <div className="project-tech">
              <span>Python</span>
              <span>BeautifulSoup</span>
              <span>Selenium</span>
            </div>
          </motion.div>
        </a>

        <a target="_blank"
        href="https://wp.nyu.edu/tandonschoolofengineering-mrl9392/sample-page/" 
        className="project-link"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: "url('/pictures/SafetyTag.jpg')" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3> Safety Tag </h3>
            <p>
              Safety Tag is a wearable emergency device developed for EG1004 at
              NYU Tandon. When the button is pressed, it triggers an audible
              alarm and displays the user’s location on an LCD screen, helping
              others respond quickly in dangerous situations.

              <br/>Notes: It was one of my first times ever coding in a group enviorment. Even though it was a struggle, it was fun doing it together.
              </p>
            <div className="project-tech">
              <span>Arduino</span>
              <span>Raspberry Pi</span>
              <span>Hardware</span>
            </div>
          </motion.div>
        </a>
      </motion.div>
    </motion.section>
  );
};
