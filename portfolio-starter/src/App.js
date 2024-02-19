import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context'
import {useContext} from 'react'
import Coding from "./Components/Coding/Coding";
import TechStack from "./Components/TechStack/TechStack";
import PerProject from "./Components/PerProject/PerProject";
import NewWorks from "./Components/NewWorks/NewWorks";
import Clients from "./Components/Clients/Clients";
import Reviews from "./Components/Reviews/Reviews";
import PhTechStack from "./Components/PhTechStack/PhTechStack";
import Worksatpoint, {Works as works2} from "./Components/Works/Works2child";


function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className="App" 
    style={{
      background : darkMode? 'black' : ' ',
      color: darkMode? 'white' : ' '
    }}
    >
      <Navbar />
      <Intro />
      {/* <Services /> */}
      <TechStack />
      
      
      
      <Experience />
      <Coding/>
     
      {/* <Works /> */}
      {window.innerWidth <= 768 ? (
  <>
   <Worksatpoint/>
    <Works />
    
  </>
) : (
  <NewWorks />
)}
      
      {/* <PerProject/> */}
      <Clients />
      <Reviews />
      <Portfolio />
      
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
