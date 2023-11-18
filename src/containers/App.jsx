import React from "react";
import Header from "./Header";
import Home from "./Home";
import ServiceCount from "./ServiceCount";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact"
import { AnimatePresence} from "framer-motion";
import { Socials } from "../utils/helper";
import {HomeSocialLinks } from "../components";
import ParticlesContainer from "./ParticlesContainer";

const App = () => {
  return (
    <div className="w-full  xl:w-[1600px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">

<ParticlesContainer />

 <Header />

 <Home />

 <ServiceCount />

 <About />

 <Skills />
 
 <Projects />
    
 <Contact />  

 {/*  Footer*/}
 <div className="2-full flex flex-col items-center justify-start mt-32 mb-12">
     <p className="text-3xl tracking-wide text-texlight">
      Avinash Kumar @2023
     </p>
    <div className="flex items-center justify-center gap-16 mt-16">
    <AnimatePresence>
            {Socials && Socials.map((item, index) => (
              <HomeSocialLinks key={index} data={item} index={index} />
            ))}
          </AnimatePresence>
    </div>
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12">
      <p className="text-texlight text-center">
      I really want you to recognize that if you're taking care of your physical and mental health,
       you can take on any challenge.
      </p>
      <p className="text-texlight text-center">
      When you are not sure, flip a coin because while the coin is in the air, you realize which one you are actually hoping for
      </p>
      <div className="w-full flex flex-col items-center justify-center gap-3">
        <p className="text-texlight text-center">
          theavinashkp73@gmail.com
        </p>
        <p className="text-texlight text-center">
         +91-620423XXXX
        </p>
        <p className="text-primary text-center">Contact Me</p>
      </div>

    </div>
 </div>
 {/* <div className="h-screen flex items-center justify-center">
  <iframe src="https://www.google.com/maps/d/u/0/embed?mid=11Q7YtjKKTexSouL_rVXmqW7Iv-N8KZU&ehbc=2E312F" width="50%" height="480">
    </iframe>        
  </div> */}
  </div>
  );
};

export default App;
