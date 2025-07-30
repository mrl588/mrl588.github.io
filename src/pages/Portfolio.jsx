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
          href="https://github.com/freeCodeCamp-2025-Summer-Hackathon/purple-array?tab=readme-ov-file"
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
                backgroundImage: "url('/pictures/WriteLight.jpg')",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3> WriteLight </h3>
            <p>
              WriteLight is a full-stack app that helps users learn new vocabulary through daily reflection and action. Each day, users receive a new word and are challenged to use it meaningfully in their lives. After using their word, they journal their experience by answering prompts like: How did you use today’s word? What gave you hope? What did you learn? How did you show kindness? The app fosters language growth, self-awareness, and positivity—one word at a time. <br/>Notes: First Hackathon ever, learned a completely "new" languauge, pystream and had to code my butt off for 24 hours.
            </p>
            <div className="project-tech">
              <span>MERN</span>
              <span>Javascript</span>
            </div>
          </motion.div>
        </a>


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
              security lessons with quizzes and progress tracking. <br />
              Notes: First Hackathon ever, learned a completely "new" languauge,
              pystream and had to code my butt off for 24 hours.
            </p>
            <div className="project-tech">
              <span>Flask</span>
              <span>AI</span>
              <span>Django</span>
              <span>Pystream</span>
            </div>
          </motion.div>
        </a>

        <a
          href="https://github.com/mrl588/ShopBot"
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
              AutoBuy is a Selenium-powered automation bot that monitors Best
              Buy for product availability and autonomously completes purchases.
              It uses stealth techniques and human-like interaction patterns to
              bypass bot detection and seamlessly navigate the checkout process.{" "}
              <br />
              Notes: One of the first times I ever went outside my coding
              comfort box. I just googled and learned whatever I needed to
              finish this passion project. First time working at API's also
              quite the experience.
            </p>
            <div className="project-tech">
              <span>Python</span>
              <span>BeautifulSoup</span>
              <span>Selenium</span>
            </div>
          </motion.div>
        </a>

        <a
          target="_blank"
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
              <br />
              Notes: It was one of my first times ever coding in a group
              enviorment. Even though it was a struggle, it was fun doing it
              together.
            </p>
            <div className="project-tech">
              <span>Arduino</span>
              <span>Raspberry Pi</span>
              <span>Hardware</span>
            </div>
          </motion.div>
        </a>

        <a
          target="_blank"
          href="https://github.com/mrl588/jobs-api"
          className="project-link"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: "url('/pictures/HireFlowLogo.jpg')" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3> HireFlow </h3>
            <p>
              HireFlow is a RESTful backend service that allows users to register, log in, and manage job listings. Authenticated users can create, update, and delete their own jobs, ensuring secure and personalized data control. The API includes user authentication via JWT, protected routes, and proper authorization so users can only modify their own entries.
                  <br />
                  Notes: This project has user auth and pushed me to understand how APIs work under the hood — from handling routes and middleware to protecting sensitive data.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
          </motion.div>
        </a>

        <a
          target="_blank"
          href="https://github.com/mrl588/Flights/blob/main/PythonNotebook.py"
          className="project-link"
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: "url('/pictures/FlightAnalyzer.jpg')" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3> Flight Analyzer </h3>
            <p>
              FlightAnalyzer is a large-scale data analytics project built in Python using pandas to process and analyze over one million rows of flight transaction data. The dataset, originally in Excel/CSV format, includes fields such as departure and arrival cities, traveler counts, prices, booking timestamps, cabin classes, and airline names. I cleaned, transformed, and analyzed the data to uncover meaningful trends in airline pricing, user booking behavior, and flight route popularity. </p>
            <div className="project-tech">
              <span>Python</span>
              <span>Pandas</span>
              <span>Data Analysis</span>
            </div>
          </motion.div>
        </a>


      </motion.div>
    </motion.section>
  );
};
