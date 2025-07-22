import './App.css'
import { Navbar } from './components/Navbar';
import {Hero} from './components/Hero';
import {Projects} from './components/Projects'
import { Contact } from './components/Contact';


function App() {
  return (
    <>
      {" "}
      <Navbar /> 

      <Hero />
      <Projects />
      <Contact />


      <>
        <p> &copy; 2025 Michael Liu. All rights reserved. HIHIHI</p>
      </>
    </>
  )
}

export default App
