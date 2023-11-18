import React from "react";
import { motion,AnimatePresence } from "framer-motion";
import { Leaf1,Leaf2, about } from "../assets";

const About = () => {
  return <section 
  id="about" 
  className="flex items-center justify-center
  flex-col gap-12 my-12">

    <div className="w-full flex items-center justify-center py-24">
      <motion.div 
       initial={ {opacity:0, width:0}}
       animate ={{opacity:1,width:200}}
       exit={{opacity:0,width:0}}
       transition={{delay: 0.4}} 
      
      
      className="w-full flex items-center flec-col gap-12 my-12">
          <img src={Leaf1} className="w-6 h-auto object-contain " />
          <p className="text-transparent 
          bg-clip-text  bg-gradient-to-r 
           from-primary  to-secondary">About</p>
          <img src={Leaf2} className="w-6 h-auto object-contain " />
      </motion.div>


    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full" >
    {/* image*/}
    <div className="w-full flex items-center justify-center px-8">
    <div className="w-full lg:w-96 p-[2px] rounded-md 
    bg-gradient-to-br from bg-primary to-secondary relative">
      <img src={about} className="w-full 
      rounded-md h-auto object-contain " alt=" " />
      <div className="absolute w-full h-full -top-3 -left-2 
      bg-gradient-to-br from bg-primary to-secondary rounded-md
      blur [5px] -z-10 "></div>
    </div>
    </div>
 {/* content*/}

 <div className="w-full px-8 flex flex-col 
 gap-4 items-start justify-start">
  <p className="text-texlight 
  text-base tracking-wide text-justify">
I am from Jamshedpur,Jharkhand.
I am 21 years old.
I am currently pursuing my B.Tech degree in Computer Science and
 Engineering from Veer Surendra Sai University Of Technology,Burla.
  </p>
  <p className="text-texlight 
  text-base tracking-wide text-justify">
My Interests are 
Web Development,
Competitive Coding,
Chess,
Cricket,
Sightseeing.
  </p>
  <p className="text-texlight 
  text-base tracking-wide text-justify">
My Hobbies are
writing Journal and short stories,
Gaming,
Listening to Music,
playing chess,
Watching Sunrise and Sunsets. 

  </p>

 </div>

    
    
    
    
    </div>
    </section>
};

export default About;
